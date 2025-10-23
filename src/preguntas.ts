export interface Question {
    question: string
    options: string[]
}

export const questions: Question[] = [
    {
        question: "¿Qué tipo de energía aprovecha la fuerza del viento?",
        options: ["Energía solar", "Energía eólica ✅", "Energía geotérmica", "Energía nuclear"],
    },
    {
        question: "¿Qué país fue pionero en el uso masivo de calentadores solares de agua?",
        options: ["Dinamarca", "Israel ✅", "Alemania", "Brasil"],
    },
    {
        question: "¿Qué significa DRS en gestión ambiental?",
        options: [
            "Depósito y Retorno de envases ✅",
            "Disposición Rápida Sustentable",
            "Desarrollo Responsable Social",
            "Desperdicio Reducido Sostenible",
        ],
    },
    {
        question: "¿Qué podés hacer para ahorrar agua en casa?",
        options: [
            "Dejar la canilla abierta al cepillarte",
            "Cerrar la canilla mientras te lavás los dientes ✅",
            "Usar más jabón",
            "Dejar correr el agua para enfriar",
        ],
    },
    {
        question: "Un litro de aceite usado puede contaminar:",
        options: ["10 litros de agua", "100 litros de agua", "1000 litros de agua ✅", "10.000 litros de agua"],
    },
    {
        question: "¿Qué país tiene un sistema exitoso de retorno de botellas (Pfand)?",
        options: ["Alemania ✅", "Francia", "Chile", "Estados Unidos"],
    },
    {
        question: "¿Qué representa la Economía Azul?",
        options: [
            "Uso del aire para generar energía",
            "Uso sostenible de los océanos ✅",
            "Producción industrial sin contaminación",
            "Comercio marítimo internacional",
        ],
    },
    {
        question: "¿Qué energía es considerada renovable?",
        options: ["Solar ✅", "Carbón", "Gas natural", "Nuclear"],
    },
    {
        question: "En Corea del Sur, ¿cómo se controla la basura orgánica?",
        options: [
            "Por peso del camión",
            "Con tachos RFID que cobran por kilo ✅",
            "Con multas a los vecinos",
            "Solo con compost domiciliario",
        ],
    },
    {
        question: "¿Qué podés hacer con los restos de frutas y verduras en casa?",
        options: ["Tirarlos al tacho común", "Compostarlos ✅", "Guardarlos en la heladera", "Quemarlos"],
    },
    {
        question: "¿Qué significa justicia climática?",
        options: [
            "Que todos los países compartan responsabilidades frente al cambio climático ✅",
            "Que cada país actúe solo",
            "Que las empresas no participen",
            "Que solo los ricos paguen",
        ],
    },
    {
        question: "¿Qué objeto se usa para transformar la luz solar en electricidad?",
        options: ["Panel solar ✅", "Generador diésel", "Caldera", "Turbina de gas"],
    },
    {
        question: "¿Qué acción ayuda a reducir residuos plásticos?",
        options: [
            "Comprar botellas nuevas",
            "Reutilizar envases y evitar descartables ✅",
            "Tirar más bolsas",
            "Usar envoltorios innecesarios",
        ],
    },
    {
        question: "¿Qué práctica cultural existe en Buenos Aires relacionada con residuos?",
        options: [
            "Separación en origen de secos y húmedos ✅",
            "Arrojar basura en cualquier contenedor",
            "Mezclar orgánicos e inorgánicos",
            "Ninguna",
        ],
    },
    {
        question: "¿Qué recurso natural es inagotable a escala humana?",
        options: ["Energía solar ✅", "Petróleo", "Carbón", "Gas"],
    },
    {
        question: "¿Cuál es una consecuencia del derroche de agua?",
        options: [
            "Aumento de energía eléctrica",
            "Pérdida de recursos naturales esenciales ✅",
            "Mejora del suelo",
            "Ninguna",
        ],
    },
    {
        question: "¿Dónde se encuentra el Banco Global de Semillas?",
        options: ["Islandia", "Noruega ✅", "Suecia", "Finlandia"],
    },
    {
        question: "¿Qué energía aprovecha el calor del sol para calentar agua?",
        options: ["Energía solar térmica ✅", "Energía eólica", "Energía hidráulica", "Biomasa"],
    },
    {
        question: "¿Qué hábito cotidiano ayuda al medio ambiente?",
        options: [
            "Dejar luces encendidas",
            "Apagar los aparatos eléctricos cuando no se usan ✅",
            "Usar aerosoles",
            "Lavar con agua caliente todos los días",
        ],
    },
    {
        question: "¿Qué práctica convierte el aceite vegetal usado en combustible?",
        options: ["Compostaje", "Producción de biodiésel ✅", "Filtración doméstica", "Separación de residuos secos"],
    },
]

export function getRandomQuestions(count: number): Question[] {
    // Create a copy of the questions array
    const shuffled = [...questions]

    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    // Return the first 'count' questions
    return shuffled.slice(0, Math.min(count, shuffled.length))
}
