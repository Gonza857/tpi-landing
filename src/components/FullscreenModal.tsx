"use client"

import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FullscreenModalProps {
    isOpen: boolean
    onClose: () => void
    images: Array<{
        src: string
        alt: string
        title: string
        description: string
    }>
    currentIndex: number
    onPrevious: () => void
    onNext: () => void
}

export function FullscreenModal({ isOpen, onClose, images, currentIndex, onPrevious, onNext }: FullscreenModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return

            switch (e.key) {
                case "Escape":
                    onClose()
                    break
                case "ArrowLeft":
                    onPrevious()
                    break
                case "ArrowRight":
                    onNext()
                    break
            }
        }

        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onClose, onPrevious, onNext])

    if (!isOpen || !images[currentIndex]) return null

    return (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm fade-in">
            {/* Close button */}
            <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={onClose}
            >
                <X className="h-6 w-6" />
            </Button>

            {/* Navigation */}
            {images.length > 1 && (
                <>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                        onClick={onPrevious}
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                        onClick={onNext}
                    >
                        <ChevronRight className="h-8 w-8" />
                    </Button>
                </>
            )}

            {/* Main content */}
            <div className="flex items-center justify-center h-full p-8">
                <div className="max-w-6xl w-full">
                    <img
                        src={images[currentIndex].src || "/placeholder.svg"}
                        alt={images[currentIndex].alt}
                        className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                    />

                    <div className="mt-6 text-center text-white">
                        <h2 className="text-2xl font-bold mb-2 text-balance">{images[currentIndex].title}</h2>
                        <p className="text-lg opacity-90 text-pretty max-w-2xl mx-auto">{images[currentIndex].description}</p>
                    </div>
                </div>
            </div>

            {/* Image counter */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    )
}
