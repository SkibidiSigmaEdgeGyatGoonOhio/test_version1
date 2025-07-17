"use client";
import { use } from "react";

interface ContactDetailsProps {
    params: Promise<{
        id: string;
    }>;
}

export default function ContactDetails({ params }: ContactDetailsProps) {
    const { id } = use(params);

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <h1 className="text-6xl font-bold">{id}</h1>
            </div>
        </div>
    );
}