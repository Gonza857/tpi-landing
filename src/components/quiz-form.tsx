"use client"

import { Key, useState} from "react"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Progress} from "@/components/ui/progress"
import {ChevronRight, ChevronLeft, Send, User} from "lucide-react"
import {type Question, getRandomQuestions} from "@/preguntas"
import {sendToFirebase, getDeviceInfo} from "@/firebase"
import {toast} from "sonner"

interface QuizFormProps {
    onComplete: (results: {
        score: number
        total: number
        answers: Array<{ question: string; userAnswer: string; correctAnswer: string; isCorrect: boolean }>
    }) => void
}

export function QuizForm({onComplete}: QuizFormProps) {
    const [quizStarted, setQuizStarted] = useState(false)
    const [userName, setUserName] = useState("")
    const [userAge, setUserAge] = useState("")
    const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, string>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const progress = selectedQuestions.length > 0 ? ((currentQuestion + 1) / selectedQuestions.length) * 100 : 0

    const handleStartQuiz = () => {
        if (!userName.trim()) {
            toast.error("Por favor ingresá tu nombre para continuar")
            return
        }

        if (!userAge || Number.parseInt(userAge) < 1 || Number.parseInt(userAge) > 120) {
            toast.error("Por favor ingresá una edad válida")
            return
        }

        // Get 6 random questions
        const randomQuestions = getRandomQuestions(6)
        setSelectedQuestions(randomQuestions)
        setQuizStarted(true)
    }

    const handleAnswerSelect = (answer: string) => {
        setAnswers({...answers, [currentQuestion]: answer})
    }

    const handleNext = () => {
        if (currentQuestion < selectedQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const handleSubmit = async () => {
        const unansweredQuestions = selectedQuestions.filter((_, index) => !answers[index])

        if (unansweredQuestions.length > 0) {
            toast.error(`Por favor respondé todas las preguntas antes de enviar (${unansweredQuestions.length} restantes)`)
            return
        }

        setIsSubmitting(true)

        const results = selectedQuestions.map((q, index) => {
            const userAnswer = answers[index]
            const correctAnswer = q.options.find((opt: string | string[]) => opt.includes("✅")) || ""
            const isCorrect = userAnswer === correctAnswer

            return {
                question: q.question,
                userAnswer,
                correctAnswer,
                isCorrect,
            }
        })

        const score = results.filter((r) => r.isCorrect).length

        const deviceInfo = getDeviceInfo()

        const quizData = {
            userName,
            userAge: Number.parseInt(userAge),
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString("es-AR"),
            time: new Date().toLocaleTimeString("es-AR"),
            score,
            total: selectedQuestions.length,
            percentage: Math.round((score / selectedQuestions.length) * 100),
            answers: results,
            deviceInfo,
        }

        try {
            await sendToFirebase(quizData)

            toast.success("Tus respuestas fueron enviadas exitosamente")

            onComplete({score, total: selectedQuestions.length, answers: results})
        } catch (error) {
            console.error("Error al enviar datos:", error)
            toast.error("Hubo un problema al guardar tus respuestas. Por favor intentá de nuevo.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!quizStarted) {
        return (
            <Card className="border-2 border-emerald-200 shadow-lg max-w-md mx-auto">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center">
                            <User className="w-6 h-6 text-white"/>
                        </div>
                        <div>
                            <CardTitle className="text-2xl text-emerald-900">Bienvenido al Quiz Ambiental</CardTitle>
                            <CardDescription className="text-emerald-600">Completá tus datos para
                                comenzar</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-medium text-emerald-900">
                            Nombre completo
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Ingresá tu nombre"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="border-emerald-200 focus:border-emerald-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="age" className="text-base font-medium text-emerald-900">
                            Edad
                        </Label>
                        <Input
                            id="age"
                            type="number"
                            placeholder="Ingresá tu edad"
                            value={userAge}
                            onChange={(e) => setUserAge(e.target.value)}
                            min="1"
                            max="120"
                            className="border-emerald-200 focus:border-emerald-500"
                        />
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                        <p className="text-sm text-emerald-800 text-balance">
                            Responderás <strong>6 preguntas aleatorias</strong> sobre sustentabilidad ambiental. Tomá tu
                            tiempo y
                            elegí la mejor respuesta.
                        </p>
                    </div>

                    <Button onClick={handleStartQuiz}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-base">
                        Comenzar Quiz
                        <ChevronRight className="w-5 h-5 ml-2"/>
                    </Button>
                </CardContent>
            </Card>
        )
    }

    const currentQ = selectedQuestions[currentQuestion]
    const selectedAnswer = answers[currentQuestion]

    return (
        <div className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-emerald-700">
          <span className="font-medium">
            Pregunta {currentQuestion + 1} de {selectedQuestions.length}
          </span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2"/>
            </div>

            {/* Question Card */}
            <Card className="border-2 border-emerald-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
                    <CardDescription
                        className="text-emerald-600 font-medium">Pregunta {currentQuestion + 1}</CardDescription>
                    <CardTitle
                        className="text-xl md:text-2xl text-emerald-900 text-balance">{currentQ.question}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                    <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                        <div className="space-y-3">
                            {currentQ.options.map((option: string, index: Key | null | undefined) => {
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

                {currentQuestion < selectedQuestions.length - 1 ? (
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
                {selectedQuestions.map((_, index) => (
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
