"use client"
import { useState } from "react"
import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Lock } from "lucide-react"
import Link from "next/link"
import { MetricsTable } from "@/components/metrics-table"
import { MetricsSummary } from "@/components/metrics-summary"
import { toast } from "sonner"

export default function MetricsPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (password === "commit") {
            setIsAuthenticated(true)
            toast.success("Acceso concedido")
        } else {
            toast.error("Contraseña incorrecta")
            setPassword("")
        }
    }

    if (!isAuthenticated) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4">
                <Card className="w-full max-w-md">
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                            <Lock className="h-8 w-8 text-emerald-600" />
                        </div>
                        <CardTitle className="text-2xl">Panel de Métricas</CardTitle>
                        <CardDescription>Ingresa la contraseña para acceder</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Input
                                    type="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="text-center"
                                    autoFocus
                                />
                            </div>
                            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                                Acceder
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4 md:p-8">
            <div className="mx-auto max-w-7xl space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-emerald-900 md:text-4xl">Panel de Métricas</h1>
                        <p className="mt-2 text-emerald-700">Resultados y estadísticas del quiz ambiental</p>
                    </div>
                    <Link href="/">
                        <Button variant="outline" className="gap-2 bg-transparent">
                            <ArrowLeft className="h-4 w-4" />
                            Volver al Quiz
                        </Button>
                    </Link>
                </div>

                {/* Summary Cards */}
                <MetricsSummary />

                {/* Results Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Historial de Resultados</CardTitle>
                        <CardDescription>Todos los intentos ordenados por fecha (más reciente primero)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <MetricsTable />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
