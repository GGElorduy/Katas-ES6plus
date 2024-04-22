/*
 Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: 
*/

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

// Verifica si los índices están dentro del rango del array
// Retorna el array original si los índices están fuera de rango
// Intercambia los elementos de las posiciones index1 y index2
// Retorna el array resultante después del intercambio
// Ejemplo de uso
const swap = (array, index1, index2) => {
  if (
    index1 >= 0 &&
    index1 < array.length &&
    index2 >= 0 &&
    index2 < array.length
  ) {
    let cambiante = array[index1]
    array[index1] = array[index2]
    array[index2] = cambiante
    return array
  } else {
    console.error(
      'No guay, dichos indices no pueden realizar ningun cambio en el array'
    )
    return array
  }
}
console.log(fantasticFour)
console.log('---------------------------------')

console.log(swap(fantasticFour, 0, 3))
