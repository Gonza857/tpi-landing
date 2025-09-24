"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CarouselImage {
    src: string
    alt: string
    title: string
    description: string
}

interface ImageCarouselProps {
    images: CarouselImage[]
    autoPlay?: boolean
    autoPlayInterval?: number
    className?: string
    onImageClick?: (image: CarouselImage, index: number) => void
}

export function ImageCarousel({
                                  images,
                                  autoPlay = true,
                                  autoPlayInterval = 4000,
                                  className,
                                  onImageClick,
                              }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        if (!autoPlay || images.length <= 1) return

        const interval = setInterval(() => {
            nextSlide()
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [currentIndex, autoPlay, autoPlayInterval, images.length])

    const nextSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setTimeout(() => setIsAnimating(false), 500)
    }

    const prevSlide = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        setTimeout(() => setIsAnimating(false), 500)
    }

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentIndex) return
        setIsAnimating(true)
        setCurrentIndex(index)
        setTimeout(() => setIsAnimating(false), 500)
    }

    if (images.length === 0) return null

    return (
        <div className={cn("relative w-full h-96 overflow-hidden rounded-xl bg-muted", className)}>
            {/* Main Image */}
            <div className="relative w-full h-full">
                <img
                    src={images[currentIndex].src || "/placeholder.svg"}
                    alt={images[currentIndex].alt}
                    className={cn("w-full h-full object-cover transition-all duration-500", isAnimating ? "slide-in" : "")}
                />

                {/* Overlay with content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2 text-balance">{images[currentIndex].title}</h3>
                    <p className="text-sm opacity-90 text-pretty">{images[currentIndex].description}</p>
                </div>

                {/* Expand button */}
                <Button
                    variant="secondary"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    onClick={() => onImageClick?.(images[currentIndex], currentIndex)}
                >
                    <Expand className="h-4 w-4" />
                </Button>
            </div>

            {/* Navigation arrows */}
            {images.length > 1 && (
                <>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                        onClick={prevSlide}
                        disabled={isAnimating}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                        onClick={nextSlide}
                        disabled={isAnimating}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </>
            )}

            {/* Dots indicator */}
            {images.length > 1 && (
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75",
                            )}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
