"use client"
import { useState } from "react"
import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Lock, RefreshCw } from "lucide-react"
import Link from "next/link"
import { FeedbackMetricsTable } from "@/components/feedback-metrics-table"
import { FeedbackMetricsSummary } from "@/components/feedback-metrics-summary"
import { toast } from "sonner"

export default function FeedbackMetricsPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")
    const [refreshKey, setRefreshKey] = useState(0)
    const [isRefreshing, setIsRefreshing] = useState(false)

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

    const handleRefresh = () => {
        setIsRefreshing(true)
        setRefreshKey((prev) => prev + 1)
        toast.success("Datos actualizados")
        setTimeout(() => setIsRefreshing(false), 500)
    }

    if (!isAuthenticated) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-4">
                <Card className="w-full max-w-md">
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                            <Lock className="h-8 w-8 text-purple-600" />
                        </div>
                        <CardTitle className="text-2xl">Panel de Feedback</CardTitle>
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
                            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                                Acceder
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-4 md:p-8">
            <div className="mx-auto max-w-7xl space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-purple-900 md:text-4xl">Panel de Feedback</h1>
                        <p className="mt-2 text-purple-700">Análisis de respuestas sobre NeoCivita</p>
                    </div>
                    <div className="flex gap-2 flex-col md:flex-row">
                        <Button onClick={handleRefresh} disabled={isRefreshing} variant="outline" className="gap-2 bg-transparent">
                            <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                            Actualizar
                        </Button>
                        <Link href="/feedback">
                            <Button variant="outline" className="gap-2 bg-transparent">
                                <ArrowLeft className="h-4 w-4" />
                                Volver al Feedback
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Summary Cards */}
                <FeedbackMetricsSummary key={`summary-${refreshKey}`} />

                {/* Results Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Historial de Feedback</CardTitle>
                        <CardDescription>Todas las respuestas ordenadas por fecha (más reciente primero)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FeedbackMetricsTable key={`table-${refreshKey}`} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
