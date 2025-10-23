"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Award, Calendar } from "lucide-react"
import {getResultsFromFirebase} from "@/firebase";

interface QuizResult {
    id: string
    userName: string
    userAge: number
    score: number
    percentage: number
    timestamp: string
    deviceInfo: any
    answers: any[]
}

export function MetricsSummary() {
    const [results, setResults] = useState<QuizResult[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // TODO: Reemplazar con llamada real a Firebase
        const fetchResults = async () => {
            const data = await getResultsFromFirebase() as QuizResult[]
            setResults(data)
            setLoading(false)
        }
        fetchResults()

        // Mock data para desarrollo
        // const mockResults: QuizResult[] = [
        //     {
        //         id: "1",
        //         userName: "Juan Pérez",
        //         userAge: 25,
        //         score: 5,
        //         percentage: 83.33,
        //         timestamp: new Date().toISOString(),
        //         deviceInfo: { deviceType: "Desktop", browser: "Chrome" },
        //         answers: [],
        //     },
        //     {
        //         id: "2",
        //         userName: "María García",
        //         userAge: 30,
        //         score: 4,
        //         percentage: 66.67,
        //         timestamp: new Date(Date.now() - 86400000).toISOString(),
        //         deviceInfo: { deviceType: "Mobile", browser: "Safari" },
        //         answers: [],
        //     },
        //     {
        //         id: "3",
        //         userName: "Carlos López",
        //         userAge: 22,
        //         score: 6,
        //         percentage: 100,
        //         timestamp: new Date(Date.now() - 172800000).toISOString(),
        //         deviceInfo: { deviceType: "Desktop", browser: "Firefox" },
        //         answers: [],
        //     },
        // ]
        // setResults(mockResults)
        // setLoading(false)
    }, [])

    if (loading) {
        return (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                    <Card key={i}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
                        </CardHeader>
                        <CardContent>
                            <div className="h-8 w-16 animate-pulse rounded bg-gray-200" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }

    const totalAttempts = results.length
    const averageScore =
        results.length > 0 ? (results.reduce((sum, r) => sum + r.percentage, 0) / results.length).toFixed(1) : 0
    const highestScore = results.length > 0 ? Math.max(...results.map((r) => r.percentage)) : 0

    const resultsWithAge = results.filter((r) => r.userAge && !isNaN(r.userAge))
    const averageAge =
        resultsWithAge.length > 0
            ? Math.round(resultsWithAge.reduce((sum, r) => sum + r.userAge, 0) / resultsWithAge.length)
            : null

    const stats = [
        {
            title: "Total de Intentos",
            value: totalAttempts,
            icon: Users,
            color: "text-blue-600",
            bgColor: "bg-blue-100",
        },
        {
            title: "Promedio General",
            value: `${averageScore}%`,
            icon: TrendingUp,
            color: "text-emerald-600",
            bgColor: "bg-emerald-100",
        },
        {
            title: "Mejor Puntaje",
            value: `${highestScore}%`,
            icon: Award,
            color: "text-amber-600",
            bgColor: "bg-amber-100",
        },
        {
            title: "Edad Promedio",
            value: averageAge ? `${averageAge} años` : "Sin datos",
            icon: Calendar,
            color: "text-purple-600",
            bgColor: "bg-purple-100",
        },
    ]

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            <div className={`rounded-full p-2 ${stat.bgColor}`}>
                                <Icon className={`h-4 w-4 ${stat.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}
