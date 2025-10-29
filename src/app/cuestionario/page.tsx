export default function FeedbackPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-emerald-900 mb-2">Feedback NeoCivita</h1>
                    <p className="text-emerald-700">Tu opinión nos ayuda a mejorar el juego</p>
                </div>
                <FeedbackForm />
            </div>
        </main>
    )
}

import { FeedbackForm } from "@/components/feedback-form"
