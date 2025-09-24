import {recursos} from "@/hard-data";
import {ResourceCard} from "@/components/ResourceCard";

function ResoursesSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-balance">Los 5 Recursos Principales</h2>
                    <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                        Gestiona estos recursos clave para construir una ciudad próspera y sustentable
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {recursos.map((r) =>
                        <ResourceCard
                            key={r.path}
                            path={r.path}
                            title={r.title}
                            description={r.description}
                            value={r.value}
                            trend={r.trend}
                        />)}
                </div>
            </div>
        </section>
    )
}

export default ResoursesSection;