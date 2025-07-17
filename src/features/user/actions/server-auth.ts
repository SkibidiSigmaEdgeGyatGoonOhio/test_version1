"use server"
import { auth } from "@/lib/auth"

export const SignUp = async (input: any) => {
    const response = await auth.api.signUpEmail({
        body: {
            email: input.email as string,
            password: input.password as string,
            name: input.name as string
        },
    })
    return response
}

export const SignIn = async (input: any) => {
    await auth.api.signInEmail({
        body: {
            email: input.email as string,
            password: input.password as string,
        },
    })
}