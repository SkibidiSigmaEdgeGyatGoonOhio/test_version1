"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateForm() {

    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preentDefault()
        setIsLoading(true)

        const contact = {
            name,
            email
        }

        const res = await fetch('http://localhost:3000/intro/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        })

        if (res.status === 201) {
            router.push('/intro/contact')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Tên</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </label>
            <label>
                <span>Email</span>
                <input
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading && <span>Đang tạo...</span>}
                {!isLoading && <span>Tạo Liên hệ</span>}
            </button>
        </form>
    )
}