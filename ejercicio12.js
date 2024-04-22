/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array: */

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

export const findArrayIndex = (array, text) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (element === text) {
      return i // Devuelve la posición del elemento si se encuentra
    }
  }
  return -1 // Devuelve -1 si el elemento no se encuentra en el array
}
console.log(findArrayIndex(mainCharacters, 'Han Solo')) // Salida esperada: 2
