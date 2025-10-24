"use client"

import React from "react"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getFeedbackFromFirebase } from "@/firebase"

interface FeedbackData {
    id: string
    name: string
    age?: number
    entertainment: number
    learned: string
    interesting: string
    improvements: string
    recommend: string
    timestamp: any
    device?: any
}

export function FeedbackMetricsTable() {
    const [feedbackData, setFeedbackData] = useState<FeedbackData[]>([])
    const [loading, setLoading] = useState(true)
    const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set())

    useEffect(() => {
        async function loadFeedback() {
            try {
                const data = await getFeedbackFromFirebase()
                setFeedbackData(data as FeedbackData[])

                // Mock data for development
                // const mockData: FeedbackData[] = [
                //   {
                //     id: "1",
                //     name: "Juan Pérez",
                //     age: 25,
                //     entertainment: 5,
                //     learned: "Sí",
                //     mostInteresting: "La gestión de recursos renovables y cómo afectan al medio ambiente",
                //     improvements: "Más niveles de dificultad y opciones de personalización",
                //     recommend: "Sí",
                //     timestamp: new Date(),
                //     deviceInfo: { deviceType: "Desktop", browser: "Chrome", os: "Windows" },
                //   },
                // ]
                // setFeedbackData(mockData)
            } catch (error) {
                console.error("Error loading feedback:", error)
            } finally {
                setLoading(false)
            }
        }

        loadFeedback()
    }, [])

    const toggleRow = (id: string) => {
        const newExpanded = new Set(expandedRows)
        if (newExpanded.has(id)) {
            newExpanded.delete(id)
        } else {
            newExpanded.add(id)
        }
        setExpandedRows(newExpanded)
    }

    const formatDate = (timestamp: any) => {
        if (!timestamp) return "Sin fecha"
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
        return date.toLocaleString("es-AR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    const getLearnedBadge = (learned: string) => {
        if (learned === "si") return <Badge className="bg-green-500">Sí</Badge>
        if (learned === "no") return <Badge className="bg-red-500">No</Badge>
        return <Badge className="bg-yellow-500">Un poco</Badge>
    }

    const getRecommendBadge = (recommend: string) => {
        if (recommend === "si") return <Badge className="bg-green-500">Sí</Badge>
        if (recommend === "no") return <Badge className="bg-red-500">No</Badge>
        return <Badge className="bg-yellow-500">Tal vez</Badge>
    }

    if (loading) {
        return <div className="text-center py-8">Cargando feedback...</div>
    }

    if (feedbackData.length === 0) {
        return <div className="text-center py-8 text-muted-foreground">No hay feedback disponible aún.</div>
    }

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]"></TableHead>
                        <TableHead>Fecha</TableHead>
                        <TableHead>Nombre</TableHead>
                        <TableHead>Edad</TableHead>
                        <TableHead>Entretenimiento</TableHead>
                        <TableHead>Aprendió</TableHead>
                        <TableHead>Recomienda</TableHead>
                        <TableHead>Dispositivo</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {feedbackData.map((feedback) => (
                        <React.Fragment key={feedback.id}>
                            <TableRow className="cursor-pointer hover:bg-muted/50" onClick={() => toggleRow(feedback.id)}>
                                <TableCell>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        {expandedRows.has(feedback.id) ? (
                                            <ChevronUp className="h-4 w-4" />
                                        ) : (
                                            <ChevronDown className="h-4 w-4" />
                                        )}
                                    </Button>
                                </TableCell>
                                <TableCell className="font-medium">{formatDate(feedback.timestamp)}</TableCell>
                                <TableCell>{feedback.name}</TableCell>
                                <TableCell>{feedback.age ? `${feedback.age} años` : "No especificada"}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{feedback.entertainment}/5</span>
                                    </div>
                                </TableCell>
                                <TableCell>{getLearnedBadge(feedback.learned)}</TableCell>
                                <TableCell>{getRecommendBadge(feedback.recommend)}</TableCell>
                                <TableCell>
                                    {feedback.device ? (
                                        <div className="text-sm">
                                            <div>{feedback.device.deviceType}</div>
                                            <div className="text-xs text-muted-foreground">
                                                {feedback.device.browser} - {feedback.device.os}
                                            </div>
                                        </div>
                                    ) : (
                                        "No disponible"
                                    )}
                                </TableCell>
                            </TableRow>
                            {expandedRows.has(feedback.id) && (
                                <TableRow>
                                    <TableCell colSpan={8} className="bg-muted/30">
                                        <div className="space-y-4 p-4">
                                            <div>
                                                <h4 className="font-semibold text-sm text-purple-900 mb-2">
                                                    ¿Qué parte del juego te pareció más interesante o divertida?
                                                </h4>
                                                <p className="text-sm text-muted-foreground">{feedback.interesting}</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-sm text-purple-900 mb-2">
                                                    ¿Qué te gustaría mejorar o agregar en las próximas versiones?
                                                </h4>
                                                <p className="text-sm text-muted-foreground">{feedback.improvements}</p>
                                            </div>
                                            {feedback.device && (
                                                <div>
                                                    <h4 className="font-semibold text-sm text-purple-900 mb-2">Información del Dispositivo</h4>
                                                    <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                                                        <div>
                                                            <span className="font-medium">Tipo:</span> {feedback.device.deviceType}
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Navegador:</span> {feedback.device.browser}
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">SO:</span> {feedback.device.os}
                                                        </div>
                                                        <div>
                                                            <span className="font-medium">Resolución:</span> {feedback.device.screenResolution}
                                                        </div>
                                                    </div>
                                                </div>
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
