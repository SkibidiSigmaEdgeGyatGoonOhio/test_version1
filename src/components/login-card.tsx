import { FcGoogle } from "react-icons/fc"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function LoginCard() {
  return (
    <Card className="w-full max-w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        <p className="text-muted-foreground text-sm">
          Welcome back! Please enter your details.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <Input id="password" type="password" placeholder="Password" />
        </div>
        <Button
          variant="link"
          className="text-primary px-0 text-sm font-medium"
        >
          Forgot password
        </Button>
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">
          <FcGoogle className="mr-2 h-4 w-4" />
          Sign in with Google
        </Button>
        <p className="text-muted-foreground text-center text-sm">
          Don't have an account?{" "}
          <Button variant="link" className="text-primary px-1">
            Sign up for free
          </Button>
        </p>
      </CardContent>
    </Card>
  )
}
