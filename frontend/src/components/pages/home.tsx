"use client"

import Link from "next/link"
import { Navbar } from "../layout/navbar"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ArrowRight, Award, BookOpen, Users } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

export const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <section className="gradient-bg py-20 lg:py-32">
                <div className="container">
                    <div className="mx-auto max-w-4xl text-center">
                        <Badge className="mb-4" variant="secondary">
                            🚀 Nova plataforma de aprendizado
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                            Aprenda com os <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">melhores cursos</span> online
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                            Desenvolva suas habilidades com nossa plataforma moderna e intuitiva. Acesso de cursos de alta qualidade com certificação
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button asChild size="lg" className="h-12 px-8">
                                <Link href="/auth/signup">
                                    Começar agora
                                    <ArrowRight className="size-4 lm-2" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild size="lg" className="h-12 px-8">
                                <Link href="/courses">Explorar Cursos</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Por que escolher nossa plataforma?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">Oferecemos a melhor experiência de aprendizado online</p>
                    </div>
                </div>

                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="glass-effect">
                        <CardHeader>
                            <BookOpen className="size-8 text-primary" />
                            <CardTitle>Cursos de Qualidade</CardTitle>
                            <CardDescription>Conteúdo criado por especialistas da indústria</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="glass-effect">
                        <CardHeader>
                            <Users className="h-8 w-8 text-primary" />
                            <CardTitle>Comunidade Ativa</CardTitle>
                            <CardDescription>Conecte-se com outros estudantes e mentores</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="glass-effect">
                        <CardHeader>
                            <Award className="h-8 w-8 text-primary" />
                            <CardTitle>Certificação</CardTitle>
                            <CardDescription>Receba certificados reconhecidos no mercado</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </section>
        </div>
    )
}