"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { sendFeedbackToFirebase, getDeviceInfo } from "@/firebase"
import { toast } from "sonner"
import { Loader2, Send, Star } from "lucide-react"

export function FeedbackForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        entertainment: "",
        learned: "",
        interesting: "",
        improvements: "",
        recommend: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Validación
        if (!formData.name.trim()) {
            toast.error("Por favor ingresá tu nombre")
            return
        }

        if (!formData.age || Number.parseInt(formData.age) < 1 || Number.parseInt(formData.age) > 120) {
            toast.error("Por favor ingresá una edad válida")
            return
        }

        if (!formData.entertainment) {
            toast.error("Por favor calificá qué tan entretenido te resultó el juego")
            return
        }

        if (!formData.learned) {
            toast.error("Por favor indicá si aprendiste algo nuevo")
            return
        }

        if (!formData.interesting.trim()) {
            toast.error("Por favor contanos qué parte te pareció más interesante")
            return
        }

        if (!formData.improvements.trim()) {
            toast.error("Por favor contanos qué te gustaría mejorar")
            return
        }

        if (!formData.recommend) {
            toast.error("Por favor indicá si recomendarías el juego")
            return
        }

        setIsSubmitting(true)

        try {
            const deviceInfo = getDeviceInfo()
            const feedbackData = {
                name: formData.name,
                age: Number.parseInt(formData.age),
                entertainment: Number.parseInt(formData.entertainment),
                learned: formData.learned,
                interesting: formData.interesting,
                improvements: formData.improvements,
                recommend: formData.recommend,
                timestamp: new Date().toISOString(),
                device: deviceInfo,
            }

            await sendFeedbackToFirebase(feedbackData)
            toast.success("¡Gracias por tu feedback!")

            // Reset form
            setFormData({
                name: "",
                age: "",
                entertainment: "",
                learned: "",
                interesting: "",
                improvements: "",
                recommend: "",
            })
        } catch (error) {
            console.error("Error al enviar feedback:", error)
            toast.error("Hubo un error al enviar tu feedback. Por favor intentá de nuevo.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card className="border-emerald-200 shadow-xl pt-0 bg-emerald-25">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-lg py-4">
                <CardTitle className="text-2xl">Contanos tu experiencia</CardTitle>
                <CardDescription className="text-emerald-50">
                    Completá este breve formulario para ayudarnos a mejorar NeoCivita
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nombre y Edad */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nombre</Label>
                            <Input
                                id="name"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="age">Edad</Label>
                            <Input
                                id="age"
                                type="number"
                                min="1"
                                max="120"
                                placeholder="Tu edad"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>

                    {/* Pregunta 1: Entretenimiento (1-5) */}
                    <div className="space-y-3">
                        <Label className="text-base font-semibold">1. ¿Qué tan entretenido te resultó el juego NeoCivita?</Label>
                        <RadioGroup
                            value={formData.entertainment}
                            onValueChange={(value) => setFormData({ ...formData, entertainment: value })}
                            disabled={isSubmitting}
                            className="flex flex-wrap gap-3"
                        >
                            {[1, 2, 3, 4, 5].map((num) => (
                                <div key={num} className="flex items-center space-x-2">
                                    <RadioGroupItem value={num.toString()} id={`entertainment-${num}`} />
                                    <Label htmlFor={`entertainment-${num}`} className="flex items-center gap-1 cursor-pointer">
                                        {num} <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    {/* Pregunta 2: Aprendizaje */}
                    <div className="space-y-3">
                        <Label className="text-base font-semibold">
                            2. ¿Sentís que aprendiste algo nuevo sobre el medio ambiente o la gestión de recursos jugando NeoCivita?
                        </Label>
                        <RadioGroup
                            value={formData.learned}
                            onValueChange={(value) => setFormData({ ...formData, learned: value })}
                            disabled={isSubmitting}
                            className="space-y-2"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="si" id="learned-yes" />
                                <Label htmlFor="learned-yes" className="cursor-pointer">
                                    Sí
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="learned-no" />
                                <Label htmlFor="learned-no" className="cursor-pointer">
                                    No
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="un-poco" id="learned-little" />
                                <Label htmlFor="learned-little" className="cursor-pointer">
                                    Un poco
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Pregunta 3: Parte más interesante */}
                    <div className="space-y-3">
                        <Label htmlFor="interesting" className="text-base font-semibold">
                            3. ¿Qué parte del juego te pareció más interesante o divertida?
                        </Label>
                        <Textarea
                            id="interesting"
                            placeholder="Contanos qué fue lo que más te gustó..."
                            value={formData.interesting}
                            onChange={(e) => setFormData({ ...formData, interesting: e.target.value })}
                            disabled={isSubmitting}
                            rows={4}
                            className="resize-none"
                        />
                    </div>

                    {/* Pregunta 4: Mejoras */}
                    <div className="space-y-3">
                        <Label htmlFor="improvements" className="text-base font-semibold">
                            4. ¿Qué te gustaría mejorar o agregar en las próximas versiones del juego?
                        </Label>
                        <Textarea
                            id="improvements"
                            placeholder="Tus sugerencias son muy valiosas para nosotros..."
                            value={formData.improvements}
                            onChange={(e) => setFormData({ ...formData, improvements: e.target.value })}
                            disabled={isSubmitting}
                            rows={4}
                            className="resize-none"
                        />
                    </div>

                    {/* Pregunta 5: Recomendación */}
                    <div className="space-y-3">
                        <Label className="text-base font-semibold">5. ¿Recomendarías NeoCivita a tus amigos o compañeros?</Label>
                        <RadioGroup
                            value={formData.recommend}
                            onValueChange={(value) => setFormData({ ...formData, recommend: value })}
                            disabled={isSubmitting}
                            className="space-y-2"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="si" id="recommend-yes" />
                                <Label htmlFor="recommend-yes" className="cursor-pointer">
                                    Sí
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="recommend-no" />
                                <Label htmlFor="recommend-no" className="cursor-pointer">
                                    No
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="tal-vez" id="recommend-maybe" />
                                <Label htmlFor="recommend-maybe" className="cursor-pointer">
                                    Tal vez
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-700">
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Enviando...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Enviar Feedback
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
