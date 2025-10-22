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
]
