import { Coins, Zap } from "lucide-react"
import Image from "next/image";
import type React from "react";

export function BusinessModel() {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
                        El <span className="text-secondary">modelo de negocio</span>
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 shadow-xl">
                            <h3 className="text-2xl font-bold text-foreground mb-4">El juego es gratuito</h3>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Para avanzar y lograr completarlo no se necesita la compra de los recursos. La compra de
                                recursos
                                acelera el proceso*.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* EcoCoins Section */}
                                <div
                                    className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                            <Image src={"/assets/resources/moneda.png"} alt={`Resource moneda`}
                                                   width={50} height={50}/>
                                        </div>
                                        <h4 className="text-xl font-semibold text-foreground">Con las EcoCoins
                                            podrá:</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-muted-foreground">
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                            Adquirir nuevas estructuras
                                        </li>
                                    </ul>
                                </div>

                                {/* Energy Section */}
                                <div
                                    className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                            <Image src={"/assets/resources/energia.png"} alt={`Resource energia`}
                                                   width={50} height={50}/>
                                        </div>
                                        <h4 className="text-xl font-semibold text-foreground">Con la Energía podrá:</h4>
                                    </div>
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-muted-foreground">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            Mantener su ciudad funcionando
                                        </li>
                                        <li className="flex items-center gap-2 text-muted-foreground">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            Construir estructuras
                                        </li>
                                        <li className="flex items-center gap-2 text-muted-foreground">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            Mantener la felicidad de los ciudadanos
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border/50">
                                <p className="text-sm text-muted-foreground italic text-center pt-4">
                                    *El pago de estas será mediante billeteras virtuales y tarjetas de débito.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
