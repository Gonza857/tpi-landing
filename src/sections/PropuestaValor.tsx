import {Building2, Coins, Leaf, Trophy, Users, Zap} from "lucide-react";
import {funcionalidadesClave} from "@/hard-data";

function PropuestaValor() {
    return (
        <>
            {/* Value Proposition Section */}
            <section className="py-20 bg-slate-800 text-white">
                <div className="container mx-auto px-4 w-10/12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-balance text-white">NUESTRA PROPUESTA DE VALOR</h2>
                    </div>

                    <div className="space-y-6 grid lg:grid-cols-2 gap-8">
                        <p className="text-lg leading-relaxed text-gray-300 px-4">
                            EcoCiudad se diferencia por combinar la diversión y libertad creativa de un juego de
                            construcción con un
                            fuerte enfoque en la sustentabilidad y la educación ambiental. A diferencia de otros
                            videojuegos, ofrece
                            una experiencia realista y actualizada, donde los jugadores enfrentan decisiones
                            relacionadas con
                            energías renovables y no renovables, manejo de recursos y sus efectos en la economía, la
                            felicidad y la
                            contaminación de la ciudad.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300 px-4">
                            Nos eligen porque no solo entretenemos, sino que también despertamos conciencia
                            ecológica a través de un
                            juego interactivo que invita a reflexionar y aprender sobre el impacto de nuestras
                            acciones en el
                            planeta. EcoCiudad es una herramienta lúdica que transforma el entretenimiento en un
                            espacio de
                            aprendizaje significativo y compromiso ambiental.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

function FeatureList() {
    return (
        <div className="space-y-4">
            {funcionalidadesClave.map((item, index) => {
                const Icon = item.icon
                return (
                    <div key={index} className="flex items-center gap-4">
                        <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center flex-shrink-0">
                            <Icon className="h-4 w-4 text-white"/>
                        </div>
                        <span className="text-lg text-gray-200">{item.label}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default PropuestaValor;