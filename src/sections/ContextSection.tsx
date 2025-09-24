import { Card, CardContent } from "@/components/ui/card"

export function ContextSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-20">
                    {/* Context Section */}
                    <div>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
                                El <span className="text-secondary">Contexto</span>
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                                Entendemos la necesidad de crear conciencia ambiental desde temprana edad
                            </p>
                        </div>

                        <Card className="overflow-hidden border-2 border-secondary/20 bg-gradient-to-br from-card to-secondary/5">
                            <CardContent className="p-12 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">¿Por qué NeoCivita?</h3>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                                    La idea del proyecto surgió con el objetivo de concientizar a las personas sobre el cuidado del
                                    medioambiente, a través de un videojuego en donde se pueden tomar decisiones y buscar el equilibrio de
                                    los recursos para lograr una ciudad sustentable y amigable con el planeta.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Problem Section */}
                    <div>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
                                El <span className="text-destructive">Problema</span>
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                                Identificamos las causas raíz que queremos abordar con nuestra solución
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-8 bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
                                <h3 className="text-2xl font-semibold mb-4 text-destructive">🏭 Crecimiento Sin Conciencia</h3>
                                <p className="text-muted-foreground">
                                    Se prioriza el crecimiento económico y urbano sin considerar las consecuencias ambientales, afectando
                                    la calidad de vida y el equilibrio ecológico.
                                </p>
                            </Card>

                            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                                <h3 className="text-2xl font-semibold mb-4 text-primary">📚 Falta de Educación</h3>
                                <p className="text-muted-foreground">
                                    Existe una falta de educación y concientización sobre cómo nuestras decisiones tienen un impacto real
                                    y acumulativo sobre el medioambiente.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
