import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc"

export function SignupCard() {
    return (
        <Card className="w-full max-w-[400px]">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
                <p className="text-sm text-muted-foreground">
                    Enter your details to create an account
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                        User name
                    </label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">
                        Password
                    </label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="confirm-password" className="text-sm font-medium">
                        Confirm Password
                    </label>
                    <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                    />
                </div>
                <Button className="w-full">
                    Sign Up
                </Button>
                <Button
                    variant="outline"
                    className="w-full"
                >
                    <FcGoogle className="mr-2 h-4 w-4" />
                    Sign up with Google
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Button variant="link" className="px-1 text-primary">
                        Login here
                    </Button>
                </p>
            </CardContent>
        </Card>
    )
} 