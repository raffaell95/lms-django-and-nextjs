"use client"

import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSignUp } from "@/lib/mutations"
import { registerSchema, SignUpForm } from "@/schemas/auth"
import { useRouter } from "@bprogress/next/app"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const router = useRouter()

    const {mutateAsync, isPending} = useSignUp()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<SignUpForm>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = async (data: SignUpForm) => {
        try{
            const response = await mutateAsync(data)

            if(!response.success){
                toast.error("Erro ao criar conta.", {
                    description: response.detail
                })
                return
            }

            toast.success("Conta criada com sucesso!",{
                description: "Redirecionando para o dashboard."
            })

            router.push("/dashboard")
        } catch (error){
            toast.error("Erro ao criar conta.", {
                description: "Tente novamente mais tarde."
            })
        }
    }

    return (
        <div className="min-h-screen gradient-bg flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center p-4">
                <Card className="w-full max-w-md glass-effect">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2x1 font-bold text-center">Criar conta</CardTitle>
                        <CardDescription className="text-center">Crie sua conta para começar a aprender</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Nome completo</Label>
                                <Input id="name" type="text" placeholder="Seu nome" disabled={isPending} {...register("name")}/>
                                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="text" placeholder="seu@email.com" disabled={isPending} {...register("email")}/>
                                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Senha</Label>
                                <div className="relative">
                                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="Sua senha" disabled={isPending} {...register("password")}/>
                                    <Button onClick={() => setShowPassword(!showPassword)} type="button" variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3 py-2 cursor-pointer">
                                        {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />} 
                                    </Button>
                                </div>
                                {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
                            </div>

                             <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirmar senha</Label>
                                <div className="relative">
                                    <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Sua senha" disabled={isPending} {...register("confirmPassword")}/>
                                    <Button onClick={() => setShowConfirmPassword(!showConfirmPassword)} type="button" variant="ghost" size="sm" className="absolute right-0 top-0 h-full px-3 py-2 cursor-pointer">
                                        {showConfirmPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />} 
                                    </Button>
                                </div>
                                {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>}
                            </div>

                            <Button type="submit" className="w-full" disabled={isPending}>
                                {isPending ? "Criando a conta..." : "Criar conta"}
                            </Button>
                        </form>

                        <div className="text-center text-sm">
                            Já tem conta? {" "}
                            <Link href="/auth/signin" className="text-primary hover:underline">Faça login</Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}