// errors: valor de 0 a 3, donde 3 es la peor calificación en la práctica
// usedHelp: valor de 0 a 3, donde 3 es la mayor cantidad de ayuda posible usada (actualmente 
// el máximo valor es 1)
export const calcRepracticeDate = ({ errors, usedHelp, lvlUnderstand }) => {
  console.log(errors, usedHelp, lvlUnderstand)
  let newLvlUnderstand
  const MS_IN_A_DAY = 86400000
  lvlUnderstand = parseFloat(lvlUnderstand)

  if (usedHelp === 0) {
    if (errors === 0) newLvlUnderstand = lvlUnderstand < 1 ? lvlUnderstand + 0.5 : lvlUnderstand * 2
    else if (errors === 1)
      newLvlUnderstand = lvlUnderstand < 17 ? 0 : 2
    else if (errors === 2)
      newLvlUnderstand = lvlUnderstand < 17 ? 0 : 1
    else
      newLvlUnderstand = 0
  } else if (usedHelp === 1) {
    if (errors === 0) newLvlUnderstand = lvlUnderstand < 1 ? lvlUnderstand + 0.35 : lvlUnderstand * 1.7
    else if (errors === 1)
      newLvlUnderstand = lvlUnderstand < 17 ? 0 : 1
    else
      newLvlUnderstand = 0
  } else if (usedHelp === 2) {
    if (errors === 0)
      newLvlUnderstand = lvlUnderstand < 17 ? 0 : 1
    else
      newLvlUnderstand = 0
  } else {
    newLvlUnderstand = 0
  }

  newLvlUnderstand = newLvlUnderstand.toFixed(2)
  newLvlUnderstand = newLvlUnderstand < 40 ? newLvlUnderstand : 40
  const repracticeDate = Date.now() + (newLvlUnderstand * MS_IN_A_DAY)

  return { repracticeDate, newLvlUnderstand }
}

export const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const compareStrings = (a, b) => {
  a = a.replace(/[\?\.\!¡¿,;]/g, '') // Elimino signos ¿ ? ¡ ! . , ;
  b = b.replace(/[\?\.\!¡¿,;]/g, '')
  a = a.replace(/\t\r\n/g, ' ') // Reemplazo saltos de línea, tabs u enters con un espacio
  b = b.replace(/\t\r\n/g, ' ')

  a = removeAccents(a)
  b = removeAccents(b)

  a = a.toLowerCase().trim()
  b = b.toLowerCase().trim()
  return a == b
}