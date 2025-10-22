"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, ChevronLeft, Send } from "lucide-react"
import { questions } from "@/preguntas"
import { sendToFirebase } from "@/firebase"
import { useToast } from "@/hooks/use-toast"


interface QuizFormProps {
    onComplete: (results: {
        score: number
        total: number
        answers: Array<{ question: string; userAnswer: string; correctAnswer: string; isCorrect: boolean }>
    }) => void
}

export function QuizForm({ onComplete }: QuizFormProps) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const progress = ((currentQuestion + 1) / questions.length) * 100

    const handleAnswerSelect = (answer: string) => {
        setAnswers({ ...answers, [currentQuestion]: answer })
    }

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const handleSubmit = async () => {
        // Verificar que todas las preguntas estén respondidas
        const unansweredQuestions = questions.filter((_, index) => !answers[index])

        if (unansweredQuestions.length > 0) {
            toast({
                // @ts-ignore
                title: "Preguntas sin responder",
                description: `Por favor respondé todas las preguntas antes de enviar (${unansweredQuestions.length} restantes)`,
                variant: "destructive",
            })
            return
        }

        setIsSubmitting(true)

        // Calcular resultados
        const results = questions.map((q, index) => {
            const userAnswer = answers[index]
            const correctAnswer = q.options.find((opt) => opt.includes("✅"))!
            const isCorrect = userAnswer === correctAnswer

            return {
                question: q.question,
                userAnswer,
                correctAnswer,
                isCorrect,
            }
        })

        const score = results.filter((r) => r.isCorrect).length

        // Preparar datos para Firebase
        const quizData = {
            timestamp: new Date().toISOString(),
            score,
            total: questions.length,
            percentage: Math.round((score / questions.length) * 100),
            answers: results,
        }

        try {
            // Enviar a Firebase
            await sendToFirebase(quizData)

            toast({
                // @ts-ignore
                title: "¡Quiz completado!",
                description: "Tus respuestas fueron enviadas exitosamente",
            })

            // Mostrar resultados
            onComplete({ score, total: questions.length, answers: results })
        } catch (error) {
            console.error("Error al enviar datos:", error)
            toast({
                // @ts-ignore
                title: "Error al enviar",
                description: "Hubo un problema al guardar tus respuestas. Por favor intentá de nuevo.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const currentQ = questions[currentQuestion]
    const selectedAnswer = answers[currentQuestion]

    return (
        <div className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-emerald-700">
          <span className="font-medium">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="border-2 border-emerald-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                    <CardDescription className="text-emerald-600 font-medium">Pregunta {currentQuestion + 1}</CardDescription>
                    <CardTitle className="text-xl md:text-2xl text-emerald-900 text-balance">{currentQ.question}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                        <div className="space-y-3">
                            {currentQ.options.map((option, index) => {
                                const cleanOption = option.replace(" ✅", "")
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 ${
                                            selectedAnswer === option ? "border-emerald-600 bg-emerald-50" : "border-gray-200"
                                        }`}
                                        onClick={() => handleAnswerSelect(option)}
                                    >
                                        <RadioGroupItem value={option} id={`option-${index}`} />
                                        <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer text-base md:text-lg">
                                            {cleanOption}
                                        </Label>
                                    </div>
                                )
                            })}
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="w-full sm:w-auto border-emerald-300 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Anterior
                </Button>

                {currentQuestion < questions.length - 1 ? (
                    <Button
                        onClick={handleNext}
                        disabled={!selectedAnswer}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700"
                    >
                        Siguiente
                        <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                ) : (
                    <Button
                        onClick={handleSubmit}
                        disabled={!selectedAnswer || isSubmitting}
                        className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700"
                    >
                        {isSubmitting ? "Enviando..." : "Enviar Quiz"}
                        <Send className="w-4 h-4 ml-2" />
                    </Button>
                )}
            </div>

            {/* Question Navigation Dots */}
            <div className="flex flex-wrap gap-2 justify-center pt-4">
                {questions.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentQuestion(index)}
                        className={`w-8 h-8 rounded-full text-xs font-medium transition-all ${
                            index === currentQuestion
                                ? "bg-emerald-600 text-white scale-110"
                                : answers[index]
                                    ? "bg-emerald-200 text-emerald-800"
                                    : "bg-gray-200 text-gray-600"
                        }`}
                        aria-label={`Ir a pregunta ${index + 1}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
