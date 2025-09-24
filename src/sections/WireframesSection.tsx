import {ImageCarousel} from "@/components/ImageCarousel";
import {gameplayImages, wireframeObjects} from "@/hard-data";

export type WireframesSectionProps = {
    openFullscreen: (images: typeof gameplayImages, index: number) => void
}

function WireframesSection({openFullscreen}: WireframesSectionProps) {

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-balance">Wireframes</h2>
                    <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                        Ideas iniciales para cada pantalla del juego
                    </p>
                </div>

                <ImageCarousel
                    images={wireframeObjects}
                    className="h-[400px] max-w-4xl mx-auto"
                    autoPlayInterval={3000}
                    onImageClick={(_, index) => openFullscreen(wireframeObjects, index)}
                />
            </div>
        </section>
    )
}

export default WireframesSection;