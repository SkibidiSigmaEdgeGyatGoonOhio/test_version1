import Link from 'next/link';
import React from "react";

async function getContacts() {

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/test/contact`, {
        cache: "no-store", // or "force-cache" if you want caching
    });
    if (!res.ok) throw new Error("Failed to fetch contacts");
    const data = await res.json();
    return data.Contact;
}

export default async function Contact() {

    const contacts = await getContacts();

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-6xl font-bold">Liên hệ</h1>
                <ul>
                    {contacts.map((contact: any, idx: number) => (
                        <li key={idx}>
                            {contact.name} - {contact.email}
                        </li>
                    ))}
                </ul>
            </div>
            <Link href="/intro/create" className="ml-4">
                <button className="btn-primary">Tạo Liên hệ</button>
            </Link>
        </div>
    );
}