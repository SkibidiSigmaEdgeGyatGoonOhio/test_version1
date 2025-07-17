"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
// import { SignUp } from "../actions/server-auth"
// import { SignIn } from "../actions/server-auth"

// import { signIn } from "@/config/auth"
// import { GoogleLogin } from "@/features/user/actions/login"

import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc"

import { authClient } from "@/lib/better-auth/auth-client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { SignInForm, SignUpForm } from "../schemas/auth-form-schema"

export default function AuthCard({ redirectUrl }: { redirectUrl: string }) {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter()
  const [error, setError] = useState<string | undefined>(undefined)

  const toggleView = () => setIsLogin(!isLogin)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const loginForm = useForm({
    resolver: zodResolver(SignInForm),
  })

  const signUpForm = useForm({
    resolver: zodResolver(SignUpForm),
  })

  const HandleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      errorCallbackURL: "/authentication",
    })
  }

  const HandleSignUpSubmit = async (input: any) => {
    setError(undefined)
    const { error } = await authClient.signUp.email({
      email: input.email,
      password: input.password,
      name: input.name,
    })
    // const response = await SignUp(input)
    if (!error) {
      router.push(redirectUrl)
    } else {
      setError(error.message)
    }
  }

  const HandleSignInSubmit = async (input: any) => {
    setError(undefined)
    const { error } = await authClient.signIn.email({
      email: input.email,
      password: input.password,
    })

    if (!error) {
      router.push(redirectUrl)
    } else {
      setError(error.message)
    }
    // const response = await SignIn(input)
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          {isLogin ? "Login" : "Sign Up"}
        </CardTitle>
        <CardDescription className="text-center">
          {isLogin
            ? "Enter your credentials to access your account"
            : "Create an account to get started"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={
            isLogin
              ? loginForm.handleSubmit(HandleSignInSubmit)
              : signUpForm.handleSubmit(HandleSignUpSubmit)
          }
        >
          <div className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  {...signUpForm.register("name")}
                  id="name"
                  placeholder="John Doe"
                />
                {signUpForm.formState.errors.name && (
                  <p className="text-red-500">
                    {signUpForm.formState.errors.name.message}
                  </p>
                )}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...(isLogin
                  ? loginForm.register("email")
                  : signUpForm.register("email"))}
                id="email"
                type="text"
                placeholder="john@example.com"
              />
              {isLogin
                ? loginForm.formState.errors.email && (
                  <p className="text-red-500">
                    {loginForm.formState.errors.email.message}
                  </p>
                )
                : signUpForm.formState.errors.email && (
                  <p className="text-red-500">
                    {signUpForm.formState.errors.email.message}
                  </p>
                )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {isLogin && (
                  <Link
                    href="/forgot-password"
                    className="text-primary text-sm hover:underline"
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <div>
                <div className="relative">
                  <Input
                    {...(isLogin
                      ? loginForm.register("password")
                      : signUpForm.register("password"))}
                    id="password"
                    type={showPassword ? "text" : "password"}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
                {isLogin
                  ? loginForm.formState.errors.password && (
                    <p className="mt-2 text-red-500">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )
                  : signUpForm.formState.errors.password && (
                    <p className="mt-2 text-red-500">
                      {signUpForm.formState.errors.password.message}
                    </p>
                  )}
              </div>
            </div>
          </div>
          <div className="mt-4">
            {error && <p className="mb-2 text-red-500">{error}</p>}
            <Button
              type="submit"
              className="w-full"
              disabled={
                loginForm.formState.isSubmitting ||
                signUpForm.formState.isSubmitting
              }
            >
              {isLogin
                ? loginForm.formState.isSubmitting
                  ? "Logging in..."
                  : "Login"
                : signUpForm.formState.isSubmitting
                  ? "Signing up..."
                  : "Sign Up"}
            </Button>
          </div>
        </form>
        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background text-muted-foreground px-2">
                Or continue with
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            className="mt-4 w-full"
            onClick={() => HandleGoogleLogin()}
          >
            <FcGoogle className="mr-2 h-4 w-4" /> Google
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="w-full text-center text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              toggleView()
              setError(undefined)
            }}
            className="text-primary font-medium hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </CardFooter>
    </Card>
  )
}
