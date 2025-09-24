import { Card } from "@/components/ui/card"

export function TargetMarket() {
    return (
        <section className="py-20 bg-gradient-to-b from-background to-primary/10">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6">
                            Nuestro <span className="text-accent">Mercado</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                            Dirigido a una audiencia joven y activa, comprometida con el aprendizaje y la tecnología
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center gap-2 p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 pixel-float">
                            <div className="text-5xl mb-6">👥</div>
                            <h3 className="text-2xl font-semibold mb-4 text-primary">10+ Millones</h3>
                            <p className="text-lg font-medium mb-3">Jóvenes de 10-25 años</p>
                            <p className="text-muted-foreground">
                                NeoCivita apunta a jóvenes de 10 a 25 años, un segmento de más de 10 millones de personas en el país.
                            </p>
                        </Card>

                        <Card
                            className="text-center gap-2 p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 pixel-float"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <div className="text-5xl mb-6">💻</div>
                            <h3 className="text-2xl font-semibold mb-4 text-secondary">Nativos Digitales</h3>
                            <p className="text-lg font-medium mb-3">Estudiantes activos</p>
                            <p className="text-muted-foreground">
                                Son estudiantes y jóvenes activos con alto acceso a internet. Familiaridad con juegos y experiencias
                                virtuales.
                            </p>
                        </Card>

                        <Card
                            className="text-center gap-2 p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 pixel-float"
                            style={{ animationDelay: "1s" }}
                        >
                            <div className="text-5xl mb-6">🌍</div>
                            <h3 className="text-2xl font-semibold mb-4 text-accent">Mercado Creciente</h3>
                            <p className="text-lg font-medium mb-3">Educación con propósito</p>
                            <p className="text-muted-foreground">
                                Este público busca experiencias educativas y tecnológicas con propósito, lo que ubica a NeoCivita en un
                                mercado amplio y en crecimiento.
                            </p>
                        </Card>
                    </div>

                    <div className="mt-8 text-center">
                        <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
                            <h3 className="text-2xl font-semibold mb-4">🎯 Oportunidad de Mercado</h3>
                            <p className="text-lg text-muted-foreground max-w-2xl">
                                La intersección entre gaming, educación y sustentabilidad representa una oportunidad única en el mercado
                                latinoamericano.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
