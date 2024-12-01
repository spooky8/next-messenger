"use client"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useCallback } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { BsGoogle } from "react-icons/bs"

type Variant = 'LOGIN' | 'REGISTER'

export function AuthForm() {

  const [variant, setVariant] = React.useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = React.useState(false)

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === 'REGISTER') {
      // TODO: Axios register
    }

    if (variant === 'LOGIN') {
      // TODO: NextAuth sign in
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)
  }
  // TODO: NextAuth social sign in

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className='text-2xl'>{variant === 'LOGIN' ? 'Login' : 'Register'}</CardTitle>
        {variant === 'LOGIN' && (
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {variant === 'REGISTER' && (
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              {variant === 'LOGIN' && (
                <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link>
              )}
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            {variant === 'LOGIN' ? 'Login' : 'Register'}
          </Button>
          <Button variant="outline" className="w-full">
            {variant === 'LOGIN' ? 'Login with Google' : 'Con with Google'}
            <BsGoogle />
          </Button>
        </div>
        <div className="mt-4 text-center text-sm" onClick={toggleVariant}>
          {variant === 'LOGIN' ? 'Don`t have an account? ' : 'Already have an account ?'}
          <Link href="#" className="underline">
            {variant === 'LOGIN' ? 'Register' : 'Login'}
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
