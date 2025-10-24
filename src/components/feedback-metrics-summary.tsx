"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Star, ThumbsUp, TrendingUp } from "lucide-react"
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

export function FeedbackMetricsSummary() {
    const [feedbackData, setFeedbackData] = useState<FeedbackData[]>([])
    const [loading, setLoading] = useState(true)

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
                //     mostInteresting: "La gestión de recursos renovables",
                //     improvements: "Más niveles de dificultad",
                //     recommend: "Sí",
                //     timestamp: new Date(),
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

    if (loading) {
        return <div className="text-center">Cargando estadísticas...</div>
    }

    const totalResponses = feedbackData.length

    const avgEntertainment =
        feedbackData.length > 0
            ? (feedbackData.reduce((sum, item) => sum + item.entertainment, 0) / feedbackData.length).toFixed(1)
            : "0.0"

    const learnedYes = feedbackData.filter((item) => item.learned === "si").length
    const learnedPercentage = totalResponses > 0 ? Math.round((learnedYes / totalResponses) * 100) : 0

    const recommendYes = feedbackData.filter((item) => item.recommend === "si").length
    const recommendPercentage = totalResponses > 0 ? Math.round((recommendYes / totalResponses) * 100) : 0

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-purple-200 bg-white/80 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-purple-900">Total de Respuestas</CardTitle>
                    <MessageSquare className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-purple-900">{totalResponses}</div>
                    <p className="text-xs text-purple-600">Feedback recibido</p>
                </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white/80 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-purple-900">Entretenimiento Promedio</CardTitle>
                    <Star className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-purple-900">{avgEntertainment}/5</div>
                    <p className="text-xs text-purple-600">Calificación media</p>
                </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white/80 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-purple-900">Aprendieron Algo</CardTitle>
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-purple-900">{learnedPercentage}%</div>
                    <p className="text-xs text-purple-600">Respondieron "Sí"</p>
                </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white/80 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-purple-900">Recomendarían</CardTitle>
                    <ThumbsUp className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-purple-900">{recommendPercentage}%</div>
                    <p className="text-xs text-purple-600">Respondieron "Sí"</p>
                </CardContent>
            </Card>
        </div>
    )
}
