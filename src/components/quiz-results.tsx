"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, CheckCircle2, XCircle, RotateCcw, Sparkles } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface QuizResultsProps {
    results: {
        score: number
        total: number
        answers: Array<{ question: string; userAnswer: string; correctAnswer: string; isCorrect: boolean }>
    }
    onRestart: () => void
}

export function QuizResults({ results, onRestart }: QuizResultsProps) {
    const percentage = Math.round((results.score / results.total) * 100)

    const getMessage = () => {
        if (percentage >= 90)
            return { title: "¡Excelente!", message: "Sos un experto en sustentabilidad 🌟", color: "emerald" }
        if (percentage >= 70)
            return { title: "¡Muy bien!", message: "Tenés un gran conocimiento ambiental 🌱", color: "teal" }
        if (percentage >= 50)
            return { title: "¡Buen trabajo!", message: "Vas por buen camino, seguí aprendiendo 🌿", color: "cyan" }
        return { title: "¡Seguí intentando!", message: "Hay mucho por aprender sobre el medio ambiente 🌍", color: "blue" }
    }

    const { title, message, color } = getMessage()

    return (
        <div className="space-y-6">
            {/* Score Card */}
            <Card className="border-2 border-emerald-500 shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r from-${color}-500 to-${color}-600 p-8 text-center text-emerald-900`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                        <Trophy className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
                    <p className="text-lg md:text-xl opacity-90 mb-6">{message}</p>

                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                        <div className="text-6xl md:text-7xl font-bold mb-2">
                            {results.score}/{results.total}
                        </div>
                        <div className="text-xl md:text-2xl font-medium">{percentage}% correctas</div>
                    </div>
                </div>

                <CardContent className="p-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span>Tu progreso</span>
                            <span className="font-medium">{percentage}%</span>
                        </div>
                        <Progress value={percentage} className="h-3" />
                    </div>
                </CardContent>
            </Card>

            {/* Detailed Results */}
            <Card className="border-2 border-emerald-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-900">
                        <Sparkles className="w-5 h-5" />
                        Revisión de Respuestas
                    </CardTitle>
                    <CardDescription>Revisá tus respuestas y aprendé de los errores</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {results.answers.map((answer, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg border-2 ${
                                answer.isCorrect ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"
                            }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-1">
                                    {answer.isCorrect ? (
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    ) : (
                                        <XCircle className="w-5 h-5 text-red-600" />
                                    )}
                                </div>
                                <div className="flex-1 space-y-2">
                                    <p className="font-medium text-sm md:text-base text-gray-900">
                                        {index + 1}. {answer.question}
                                    </p>
                                    <div className="space-y-1 text-sm">
                                        <p className={answer.isCorrect ? "text-emerald-700" : "text-red-700"}>
                                            <span className="font-medium">Tu respuesta:</span> {answer.userAnswer.replace(" ✅", "")}
                                        </p>
                                        {!answer.isCorrect && (
                                            <p className="text-emerald-700">
                                                <span className="font-medium">Respuesta correcta:</span>{" "}
                                                {answer.correctAnswer.replace(" ✅", "")}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Restart Button */}
            <div className="flex justify-center pt-4">
                <Button onClick={onRestart} size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                    <RotateCcw className="w-5 h-5 mr-2" />
                    Volver a Intentar
                </Button>
            </div>
        </div>
    )
}
