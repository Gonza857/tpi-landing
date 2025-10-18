import { Building2, Coins, Leaf, Trophy, Users, Zap } from "lucide-react";
import { funcionalidadesClave } from "@/hard-data";

function PropuestaValor() {
  return (
    <>
      {/* Value Proposition Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 w-10/12 text-center space-y-12">
          <h2 className="text-4xl font-bold text-balance text-white">
            NUESTRA PROPUESTA DE VALOR
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 text-lg leading-relaxed text-gray-300">
            <p className="px-4">
              Neocivita combina la estrategia y creatividad de un juego de
              construcción con un enfoque real en la sustentabilidad. Cada
              decisión que tomás tiene impacto en tu ciudad y recursos.
            </p>
            <p className="px-4">
              No solo construís una ciudad, construís conciencia. Aprendé
              jugando cómo las decisiones diarias influyen en el planeta y
              descubrí el desafío de mantener el equilibrio entre progreso y
              naturaleza.
            </p>
          </div>

          {/* Opción visual (recomendado) */}
          <div className="grid sm:grid-cols-3 gap-6 mt-10 text-center">
            <div>
              <span className="text-3xl">🏙️</span>
              <h3 className="font-semibold mt-2">Construí</h3>
              <p className="text-gray-400 text-sm">
                Diseñá tu ciudad desde cero
              </p>
            </div>
            <div>
              <span className="text-3xl">⚡</span>
              <h3 className="font-semibold mt-2">Equilibrá</h3>
              <p className="text-gray-400 text-sm">Manejá tus recursos</p>
            </div>
            <div>
              <span className="text-3xl">🌱</span>
              <h3 className="font-semibold mt-2">Aprendé</h3>
              <p className="text-gray-400 text-sm">
                Tomá decisiones sustentables
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureList() {
  return (
    <div className="space-y-4">
      {funcionalidadesClave.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex items-center gap-4">
            <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center flex-shrink-0">
              <Icon className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg text-gray-200">{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default PropuestaValor;
