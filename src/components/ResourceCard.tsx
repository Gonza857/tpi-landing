import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image";

interface ResourceCardProps {
    path: string
    title: string
    description: string
    value: string
    trend?: "up" | "down" | "neutral" | string
    className?: string
}

export function ResourceCard({ path, title, description, value, trend = "neutral", className }: ResourceCardProps) {
    return (
        <Card className={cn("relative overflow-hidden group hover:shadow-lg transition-all duration-300", className)}>
            <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                        <Image src={path} alt={`Resource ${title}`} width={75} height={75} />
                    </div>
                    <div
                        className={cn(
                            "text-2xl font-bold",
                            trend === "up" && "text-green-600",
                            trend === "down" && "text-red-600",
                            trend === "neutral" && "text-foreground",
                        )}
                    >
                        {value}
                    </div>
                </div>

                <h3 className="font-semibold text-lg mb-2 text-balance">{title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{description}</p>

                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
        </Card>
    )
}

