"use client"

import { useState } from "react"
import { QuizForm } from "@/components/quiz-form"
import { QuizResults } from "@/components/quiz-results"
import { Leaf } from "lucide-react"

export default function Home() {
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [results, setResults] = useState<{
        score: number
        total: number
        answers: Array<{ question: string; userAnswer: string; correctAnswer: string; isCorrect: boolean }>
    } | null>(null)

    const handleQuizComplete = (quizResults: {
        score: number
        total: number
        answers: Array<{ question: string; userAnswer: string; correctAnswer: string; isCorrect: boolean }>
    }) => {
        setResults(quizResults)
        setQuizCompleted(true)
    }

    const handleRestart = () => {
        setQuizCompleted(false)
        setResults(null)
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-emerald-600 rounded-full mb-4 md:mb-6">
                            <Leaf className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-3 md:mb-4 text-balance">
                            Quiz de Sustentabilidad Ambiental
                        </h1>
                        <p className="text-base md:text-lg text-emerald-700 max-w-2xl mx-auto text-pretty">
                            Descubrí cuánto sabés sobre energías renovables, gestión de residuos y prácticas sustentables
                        </p>
                    </div>

                    {/* Quiz or Results */}
                    {!quizCompleted ? (
                        <QuizForm onComplete={handleQuizComplete} />
                    ) : (
                        results && <QuizResults results={results} onRestart={handleRestart} />
                    )}
                </div>
            </div>
        </main>
    )
}
