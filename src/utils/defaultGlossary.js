export const arrWordsSpanish = [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo",
  "día",
  "semana",
  "mes",
  "año",
  "billetera",
  "cámara",
  "libro",
  "moneda",
  "tarjeta de crédito",
  "diccionario",
  "archivo",
  "carpeta",
  "llaves",
  "paraguas",
  "él está cocinando",
  "ellos están escuchando música",
  "tocar la guitarra",
  "Luis está leyendo un libro",
  "estudiar",
  "Pepita trabaja en una oficina",
  "ingeniero",
  "actor",
  "estudiante",
  "negro",
  "azul",
  "marrón",
  "verde",
  "gris",
  "naranja",
  "rosa",
  "rojo",
  "blanco",
  "amarillo",
  "malo",
  "bueno",
  "bonito",
  "fácil",
  "difícil",
  "vacío",
  "barato",
  "rápido",
  "joven",
  "largo",
  "corto",
  "alto",
  "oscuro",
  "nuevo",
  "feliz",
  "triste",
  "padre",
  "madre",
  "hermana",
  "hermano",
  "abuelo",
  "abuela",
  "novio",
  "novia",
  "familia",
  "segundo",
  "minuto",
  "hora",
  "todos los días",
  "una vez por semana",
  "primavera",
  "verano",
  "invierno",
  "Navidad",
  "Año nuevo",
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
  "primero",
  "segundo",
  "tercero",
  "cena",
  "actividad",
  "encontrar",
  "Lucas juega ajedrez",
  "siempre",
  "a veces",
  "nunca",
  "pan",
  "comida",
  "desayuno",
  "almuerzo",
  "café",
  "leche",
  "azúcar",
  "té",
  "carne",
  "pollo",
  "arroz",
  "ensalada",
  "zanahoria",
  "lechuga",
  "helado",
  "fruta",
  "¿ella es tu amiga?",
  "yo vivo en Argentina",
  "ella tiene dos hermanas",
  "¿ella es tu madre?",
  "¿él es tu hermano?",
  "Rosanelda necesita ir al parque",
  "Leonel Juega fútbol",
  "Pablo necesita un trabajo",
  "nos gusta jugar",
  "Brenda necesita ayuda en el trabajo",
  "ella va a la escuela"
]

export const arrWordsEnglish = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "day",
  "week",
  "month",
  "year",
  "wallet",
  "camera",
  "book",
  "coin",
  "credit card",
  "dictionary",
  "file",
  "folder",
  "keys",
  "umbrella",
  "he is cooking",
  "they are listening to music",
  "to play the guitar",
  "Luis is reading a book",
  "study",
  "Pepita works in an office",
  "engineer",
  "acto",
  "student",
  "black",
  "blue",
  "brown",
  "green",
  "grey",
  "orange",
  "pink",
  "red",
  "white",
  "yellow",
  "bad",
  "good",
  "beautiful",
  "easy",
  "difficult",
  "empty",
  "cheap",
  "fast",
  "young",
  "long",
  "short",
  "tall",
  "dark",
  "new",
  "happy",
  "sad",
  "father",
  "mother",
  "sister",
  "brother",
  "grandfather",
  "grandmother",
  "boyfriend",
  "girlfriend",
  "family",
  "second",
  "minute",
  "hour",
  "every day",
  "once a week",
  "spring",
  "summer",
  "winter",
  "Christmas",
  "New Year",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "first",
  "second",
  "third",
  "dinner",
  "activity",
  "find",
  "Lucas plays chess",
  "always",
  "sometimes",
  "never",
  "bread",
  "food",
  "breakfast",
  "lunch",
  "coffee",
  "milk",
  "sugar",
  "tea",
  "meat",
  "chicken",
  "rice",
  "salad",
  "carrot",
  "lettuce",
  "ice cream",
  "fruit",
  "is she your friend?",
  "i live in Argentina",
  "she has two sisters",
  "is she your mother",
  "is he your brother",
  "Rosanelda needs to go to the park",
  "Leonel plays soccer",
  "Pablo needs a job",
  "we like to play",
  "Brenda needs help at work",
  "she goes to school"
]

const formatWord = {
  translation: "Abstract sintax tree",
  date: 1656367149471,
  isSentence: true,
  entry: "Árbol de sintaxis abstracto ",
  errors: 0,
  id: "FhSZO1hLPDBTGUMLRc4M",
}

export const parsearWords = () => {
  return arrWordsSpanish.map((word, index) => {
    const entry = word.trim()
    const translation = arrWordsEnglish[index].trim()
    const isSentence = entry.includes(' ') && translation.includes(' ')
    const id = index
    return { entry, translation, isSentence, id }
  })
}

export const defaultGlossary = [
  {
    "entry": "lunes",
    "translation": "Monday",
    "isSentence": false,
    "id": 0
  },
  {
    "entry": "martes",
    "translation": "Tuesday",
    "isSentence": false,
    "id": 1
  },
  {
    "entry": "miércoles",
    "translation": "Wednesday",
    "isSentence": false,
    "id": 2
  },
  {
    "entry": "jueves",
    "translation": "Thursday",
    "isSentence": false,
    "id": 3
  },
  {
    "entry": "viernes",
    "translation": "Friday",
    "isSentence": false,
    "id": 4
  },
  {
    "entry": "sábado",
    "translation": "Saturday",
    "isSentence": false,
    "id": 5
  },
  {
    "entry": "domingo",
    "translation": "Sunday",
    "isSentence": false,
    "id": 6
  },
  {
    "entry": "día",
    "translation": "day",
    "isSentence": false,
    "id": 7
  },
  {
    "entry": "semana",
    "translation": "week",
    "isSentence": false,
    "id": 8
  },
  {
    "entry": "mes",
    "translation": "month",
    "isSentence": false,
    "id": 9
  },
  {
    "entry": "año",
    "translation": "year",
    "isSentence": false,
    "id": 10
  },
  {
    "entry": "billetera",
    "translation": "wallet",
    "isSentence": false,
    "id": 11
  },
  {
    "entry": "cámara",
    "translation": "camera",
    "isSentence": false,
    "id": 12
  },
  {
    "entry": "libro",
    "translation": "book",
    "isSentence": false,
    "id": 13
  },
  {
    "entry": "moneda",
    "translation": "coin",
    "isSentence": false,
    "id": 14
  },
  {
    "entry": "tarjeta de crédito",
    "translation": "credit card",
    "isSentence": true,
    "id": 15
  },
  {
    "entry": "diccionario",
    "translation": "dictionary",
    "isSentence": false,
    "id": 16
  },
  {
    "entry": "archivo",
    "translation": "file",
    "isSentence": false,
    "id": 17
  },
  {
    "entry": "carpeta",
    "translation": "folder",
    "isSentence": false,
    "id": 18
  },
  {
    "entry": "llaves",
    "translation": "keys",
    "isSentence": false,
    "id": 19
  },
  {
    "entry": "paraguas",
    "translation": "umbrella",
    "isSentence": false,
    "id": 20
  },
  {
    "entry": "él está cocinando",
    "translation": "he is cooking",
    "isSentence": true,
    "id": 21
  },
  {
    "entry": "ellos están escuchando música",
    "translation": "they are listening to music",
    "isSentence": true,
    "id": 22
  },
  {
    "entry": "tocar la guitarra",
    "translation": "to play the guitar",
    "isSentence": true,
    "id": 23
  },
  {
    "entry": "Luis está leyendo un libro",
    "translation": "Luis is reading a book",
    "isSentence": true,
    "id": 24
  },
  {
    "entry": "estudiar",
    "translation": "study",
    "isSentence": false,
    "id": 25
  },
  {
    "entry": "Pepita trabaja en una oficina",
    "translation": "Pepita works in an office",
    "isSentence": true,
    "id": 26
  },
  {
    "entry": "ingeniero",
    "translation": "engineer",
    "isSentence": false,
    "id": 27
  },
  {
    "entry": "actor",
    "translation": "acto",
    "isSentence": false,
    "id": 28
  },
  {
    "entry": "estudiante",
    "translation": "student",
    "isSentence": false,
    "id": 29
  },
  {
    "entry": "negro",
    "translation": "black",
    "isSentence": false,
    "id": 30
  },
  {
    "entry": "azul",
    "translation": "blue",
    "isSentence": false,
    "id": 31
  },
  {
    "entry": "marrón",
    "translation": "brown",
    "isSentence": false,
    "id": 32
  },
  {
    "entry": "verde",
    "translation": "green",
    "isSentence": false,
    "id": 33
  },
  {
    "entry": "gris",
    "translation": "grey",
    "isSentence": false,
    "id": 34
  },
  {
    "entry": "naranja",
    "translation": "orange",
    "isSentence": false,
    "id": 35
  },
  {
    "entry": "rosa",
    "translation": "pink",
    "isSentence": false,
    "id": 36
  },
  {
    "entry": "rojo",
    "translation": "red",
    "isSentence": false,
    "id": 37
  },
  {
    "entry": "blanco",
    "translation": "white",
    "isSentence": false,
    "id": 38
  },
  {
    "entry": "amarillo",
    "translation": "yellow",
    "isSentence": false,
    "id": 39
  },
  {
    "entry": "malo",
    "translation": "bad",
    "isSentence": false,
    "id": 40
  },
  {
    "entry": "bueno",
    "translation": "good",
    "isSentence": false,
    "id": 41
  },
  {
    "entry": "bonito",
    "translation": "beautiful",
    "isSentence": false,
    "id": 42
  },
  {
    "entry": "fácil",
    "translation": "easy",
    "isSentence": false,
    "id": 43
  },
  {
    "entry": "difícil",
    "translation": "difficult",
    "isSentence": false,
    "id": 44
  },
  {
    "entry": "vacío",
    "translation": "empty",
    "isSentence": false,
    "id": 45
  },
  {
    "entry": "barato",
    "translation": "cheap",
    "isSentence": false,
    "id": 46
  },
  {
    "entry": "rápido",
    "translation": "fast",
    "isSentence": false,
    "id": 47
  },
  {
    "entry": "joven",
    "translation": "young",
    "isSentence": false,
    "id": 48
  },
  {
    "entry": "largo",
    "translation": "long",
    "isSentence": false,
    "id": 49
  },
  {
    "entry": "corto",
    "translation": "short",
    "isSentence": false,
    "id": 50
  },
  {
    "entry": "alto",
    "translation": "tall",
    "isSentence": false,
    "id": 51
  },
  {
    "entry": "oscuro",
    "translation": "dark",
    "isSentence": false,
    "id": 52
  },
  {
    "entry": "nuevo",
    "translation": "new",
    "isSentence": false,
    "id": 53
  },
  {
    "entry": "feliz",
    "translation": "happy",
    "isSentence": false,
    "id": 54
  },
  {
    "entry": "triste",
    "translation": "sad",
    "isSentence": false,
    "id": 55
  },
  {
    "entry": "padre",
    "translation": "father",
    "isSentence": false,
    "id": 56
  },
  {
    "entry": "madre",
    "translation": "mother",
    "isSentence": false,
    "id": 57
  },
  {
    "entry": "hermana",
    "translation": "sister",
    "isSentence": false,
    "id": 58
  },
  {
    "entry": "hermano",
    "translation": "brother",
    "isSentence": false,
    "id": 59
  },
  {
    "entry": "abuelo",
    "translation": "grandfather",
    "isSentence": false,
    "id": 60
  },
  {
    "entry": "abuela",
    "translation": "grandmother",
    "isSentence": false,
    "id": 61
  },
  {
    "entry": "novio",
    "translation": "boyfriend",
    "isSentence": false,
    "id": 62
  },
  {
    "entry": "novia",
    "translation": "girlfriend",
    "isSentence": false,
    "id": 63
  },
  {
    "entry": "familia",
    "translation": "family",
    "isSentence": false,
    "id": 64
  },
  {
    "entry": "segundo",
    "translation": "second",
    "isSentence": false,
    "id": 65
  },
  {
    "entry": "minuto",
    "translation": "minute",
    "isSentence": false,
    "id": 66
  },
  {
    "entry": "hora",
    "translation": "hour",
    "isSentence": false,
    "id": 67
  },
  {
    "entry": "todos los días",
    "translation": "every day",
    "isSentence": true,
    "id": 68
  },
  {
    "entry": "una vez por semana",
    "translation": "once a week",
    "isSentence": true,
    "id": 69
  },
  {
    "entry": "primavera",
    "translation": "spring",
    "isSentence": false,
    "id": 70
  },
  {
    "entry": "verano",
    "translation": "summer",
    "isSentence": false,
    "id": 71
  },
  {
    "entry": "invierno",
    "translation": "winter",
    "isSentence": false,
    "id": 72
  },
  {
    "entry": "Navidad",
    "translation": "Christmas",
    "isSentence": false,
    "id": 73
  },
  {
    "entry": "Año nuevo",
    "translation": "New Year",
    "isSentence": true,
    "id": 74
  },
  {
    "entry": "enero",
    "translation": "January",
    "isSentence": false,
    "id": 75
  },
  {
    "entry": "febrero",
    "translation": "February",
    "isSentence": false,
    "id": 76
  },
  {
    "entry": "marzo",
    "translation": "March",
    "isSentence": false,
    "id": 77
  },
  {
    "entry": "abril",
    "translation": "April",
    "isSentence": false,
    "id": 78
  },
  {
    "entry": "mayo",
    "translation": "May",
    "isSentence": false,
    "id": 79
  },
  {
    "entry": "junio",
    "translation": "June",
    "isSentence": false,
    "id": 80
  },
  {
    "entry": "julio",
    "translation": "July",
    "isSentence": false,
    "id": 81
  },
  {
    "entry": "agosto",
    "translation": "August",
    "isSentence": false,
    "id": 82
  },
  {
    "entry": "septiembre",
    "translation": "September",
    "isSentence": false,
    "id": 83
  },
  {
    "entry": "octubre",
    "translation": "October",
    "isSentence": false,
    "id": 84
  },
  {
    "entry": "noviembre",
    "translation": "November",
    "isSentence": false,
    "id": 85
  },
  {
    "entry": "diciembre",
    "translation": "December",
    "isSentence": false,
    "id": 86
  },
  {
    "entry": "primero",
    "translation": "first",
    "isSentence": false,
    "id": 87
  },
  {
    "entry": "segundo",
    "translation": "second",
    "isSentence": false,
    "id": 88
  },
  {
    "entry": "tercero",
    "translation": "third",
    "isSentence": false,
    "id": 89
  },
  {
    "entry": "cena",
    "translation": "dinner",
    "isSentence": false,
    "id": 90
  },
  {
    "entry": "actividad",
    "translation": "activity",
    "isSentence": false,
    "id": 91
  },
  {
    "entry": "encontrar",
    "translation": "find",
    "isSentence": false,
    "id": 92
  },
  {
    "entry": "Lucas juega ajedrez",
    "translation": "Lucas plays chess",
    "isSentence": true,
    "id": 93
  },
  {
    "entry": "siempre",
    "translation": "always",
    "isSentence": false,
    "id": 94
  },
  {
    "entry": "a veces",
    "translation": "sometimes",
    "isSentence": false,
    "id": 95
  },
  {
    "entry": "nunca",
    "translation": "never",
    "isSentence": false,
    "id": 96
  },
  {
    "entry": "pan",
    "translation": "bread",
    "isSentence": false,
    "id": 97
  },
  {
    "entry": "comida",
    "translation": "food",
    "isSentence": false,
    "id": 98
  },
  {
    "entry": "desayuno",
    "translation": "breakfast",
    "isSentence": false,
    "id": 99
  },
  {
    "entry": "almuerzo",
    "translation": "lunch",
    "isSentence": false,
    "id": 100
  },
  {
    "entry": "café",
    "translation": "coffee",
    "isSentence": false,
    "id": 101
  },
  {
    "entry": "leche",
    "translation": "milk",
    "isSentence": false,
    "id": 102
  },
  {
    "entry": "azúcar",
    "translation": "sugar",
    "isSentence": false,
    "id": 103
  },
  {
    "entry": "té",
    "translation": "tea",
    "isSentence": false,
    "id": 104
  },
  {
    "entry": "carne",
    "translation": "meat",
    "isSentence": false,
    "id": 105
  },
  {
    "entry": "pollo",
    "translation": "chicken",
    "isSentence": false,
    "id": 106
  },
  {
    "entry": "arroz",
    "translation": "rice",
    "isSentence": false,
    "id": 107
  },
  {
    "entry": "ensalada",
    "translation": "salad",
    "isSentence": false,
    "id": 108
  },
  {
    "entry": "zanahoria",
    "translation": "carrot",
    "isSentence": false,
    "id": 109
  },
  {
    "entry": "lechuga",
    "translation": "lettuce",
    "isSentence": false,
    "id": 110
  },
  {
    "entry": "helado",
    "translation": "ice cream",
    "isSentence": false,
    "id": 111
  },
  {
    "entry": "fruta",
    "translation": "fruit",
    "isSentence": false,
    "id": 112
  },
  {
    "entry": "¿ella es tu amiga?",
    "translation": "is she your friend?",
    "isSentence": true,
    "id": 113
  },
  {
    "entry": "yo vivo en Argentina",
    "translation": "i live in Argentina",
    "isSentence": true,
    "id": 114
  },
  {
    "entry": "ella tiene dos hermanas",
    "translation": "she has two sisters",
    "isSentence": true,
    "id": 115
  },
  {
    "entry": "¿ella es tu madre?",
    "translation": "is she your mother?",
    "isSentence": true,
    "id": 116
  },
  {
    "entry": "¿él es tu hermano?",
    "translation": "is he your brother?",
    "isSentence": true,
    "id": 117
  },
  {
    "entry": "Rosanelda necesita ir al parque",
    "translation": "Rosanelda needs to go to the park",
    "isSentence": true,
    "id": 118
  },
  {
    "entry": "Leonel Juega fútbol",
    "translation": "Leonel plays soccer",
    "isSentence": true,
    "id": 119
  },
  {
    "entry": "Pablo necesita un trabajo",
    "translation": "Pablo needs a job",
    "isSentence": true,
    "id": 120
  },
  {
    "entry": "nos gusta jugar",
    "translation": "we like to play",
    "isSentence": true,
    "id": 121
  },
  {
    "entry": "Brenda necesita ayuda en el trabajo",
    "translation": "Brenda needs help at work",
    "isSentence": true,
    "id": 122
  },
  {
    "entry": "ella va a la escuela",
    "translation": "she goes to school",
    "isSentence": true,
    "id": 123
  }
]