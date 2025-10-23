"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Monitor, Smartphone, Tablet } from "lucide-react"
import {getResultsFromFirebase} from "@/firebase";
import React from "react"

interface QuizResult {
    id: string
    userName: string
    userAge: number
    score: number
    percentage: number
    timestamp: string
    deviceInfo: {
        deviceType: string
        browser: string
        os: string
        screenResolution?: string
    }
    answers: Array<{
        question: string
        userAnswer: string
        correctAnswer: string
        isCorrect: boolean
    }>
}

export function MetricsTable() {
    const [results, setResults] = useState<QuizResult[]>([])
    const [loading, setLoading] = useState(true)
    const [expandedRow, setExpandedRow] = useState<string | null>(null)

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
        //         deviceInfo: {
        //             deviceType: "Desktop",
        //             browser: "Chrome",
        //             os: "Windows",
        //             screenResolution: "1920x1080",
        //         },
        //         answers: [
        //             {
        //                 question: "¿Cuál es el principal gas de efecto invernadero?",
        //                 userAnswer: "Dióxido de carbono (CO2)",
        //                 correctAnswer: "Dióxido de carbono (CO2)",
        //                 isCorrect: true,
        //             },
        //             {
        //                 question: "¿Qué porcentaje de agua dulce está disponible?",
        //                 userAnswer: "1%",
        //                 correctAnswer: "1%",
        //                 isCorrect: true,
        //             },
        //         ],
        //     },
        //     {
        //         id: "2",
        //         userName: "María García",
        //         userAge: 30,
        //         score: 4,
        //         percentage: 66.67,
        //         timestamp: new Date(Date.now() - 86400000).toISOString(),
        //         deviceInfo: {
        //             deviceType: "Mobile",
        //             browser: "Safari",
        //             os: "iOS",
        //             screenResolution: "390x844",
        //         },
        //         answers: [],
        //     },
        //     {
        //         id: "3",
        //         userName: "Carlos López",
        //         userAge: 22,
        //         score: 6,
        //         percentage: 100,
        //         timestamp: new Date(Date.now() - 172800000).toISOString(),
        //         deviceInfo: {
        //             deviceType: "Tablet",
        //             browser: "Firefox",
        //             os: "Android",
        //             screenResolution: "768x1024",
        //         },
        //         answers: [],
        //     },
        // ]
        // setResults(mockResults)
        // setLoading(false)
    }, [])

    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp)
        return new Intl.DateTimeFormat("es-AR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        }).format(date)
    }

    const getDeviceIcon = (deviceType: string) => {
        if (!deviceType) return <Monitor className="h-4 w-4" />
        switch (deviceType.toLowerCase()) {
            case "mobile":
                return <Smartphone className="h-4 w-4" />
            case "tablet":
                return <Tablet className="h-4 w-4" />
            default:
                return <Monitor className="h-4 w-4" />
        }
    }

    const getScoreBadge = (percentage: number) => {
        if (percentage >= 80) return <Badge className="bg-emerald-500">Excelente</Badge>
        if (percentage >= 60) return <Badge className="bg-amber-500">Bueno</Badge>
        return <Badge variant="destructive">Mejorable</Badge>
    }

    if (loading) {
        return (
            <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-16 animate-pulse rounded bg-gray-100" />
                ))}
            </div>
        )
    }

    if (results.length === 0) {
        return <div className="py-12 text-center text-gray-500">No hay resultados disponibles todavía.</div>
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Edad</TableHead>
                        <TableHead>Puntaje</TableHead>
                        <TableHead>Porcentaje</TableHead>
                        <TableHead>Dispositivo</TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead className="text-right">Detalles</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {results.map((result) => (
                        <React.Fragment key={result.id}>
                            <TableRow className="cursor-pointer hover:bg-gray-50">
                                <TableCell className="font-medium">{result.userName}</TableCell>
                                <TableCell>{result.userAge ? `${result.userAge} años` : "No especificada"}</TableCell>
                                <TableCell>
                                    {result.score}/{result.answers.length || 6}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold">{result.percentage.toFixed(1)}%</span>
                                        {getScoreBadge(result.percentage)}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {getDeviceIcon(result.deviceInfo?.deviceType)}
                                        <div className="text-sm">
                                            <div>{result.deviceInfo?.deviceType}</div>
                                            <div className="text-xs text-gray-500">
                                                {result.deviceInfo?.browser} • {result.deviceInfo?.os}
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-sm text-gray-600">{formatDate(result.timestamp)}</TableCell>
                                <TableCell className="text-right">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setExpandedRow(expandedRow === result.id ? null : result.id)}
                                    >
                                        {expandedRow === result.id ? (
                                            <ChevronUp className="h-4 w-4" />
                                        ) : (
                                            <ChevronDown className="h-4 w-4" />
                                        )}
                                    </Button>
                                </TableCell>
                            </TableRow>
                            {expandedRow === result.id && (
                                <TableRow>
                                    <TableCell colSpan={7} className="bg-gray-50 p-4">
                                        <div className="space-y-4">
                                            <h4 className="font-semibold text-gray-900">Información del Dispositivo</h4>
                                            <div className="grid gap-2 text-sm md:grid-cols-2">
                                                <div>
                                                    <span className="font-medium">Resolución:</span> {result.deviceInfo?.screenResolution || "N/A"}
                                                </div>
                                                <div>
                                                    <span className="font-medium">Sistema Operativo:</span> {result.deviceInfo?.os}
                                                </div>
                                                <div>
                                                    <span className="font-medium">Navegador:</span> {result.deviceInfo?.browser}
                                                </div>
                                                <div>
                                                    <span className="font-medium">Tipo:</span> {result.deviceInfo?.deviceType}
                                                </div>
                                            </div>

                                            {result.answers.length > 0 && (
                                                <>
                                                    <h4 className="mt-4 font-semibold text-gray-900">Respuestas Detalladas</h4>
                                                    <div className="space-y-2">
                                                        {result.answers.map((answer, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={`rounded-lg border p-3 ${
                                                                    answer.isCorrect ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"
                                                                }`}
                                                            >
                                                                <div className="font-medium text-gray-900">
                                                                    {idx + 1}. {answer.question}
                                                                </div>
                                                                <div className="mt-1 text-sm">
                                                                    <span className="font-medium">Tu respuesta:</span> {answer.userAnswer}
                                                                </div>
                                                                {!answer.isCorrect && (
                                                                    <div className="mt-1 text-sm text-emerald-700">
                                                                        <span className="font-medium">Respuesta correcta:</span> {answer.correctAnswer}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
