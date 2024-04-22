/* 3.1 Dado el siguiente array, crea una copia usando spread operators.
 */ const pointsList31 = [32, 54, 21, 64, 75, 43]
const pointsList31b = [...pointsList31]

/* 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
 */ const toy32 = {
  name: 'Bus laiyiar',
  date: '20-30-1995',
  color: 'multicolor'
}
toy32b = { ...toy32 }
console.log(toy32b)

/* 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos. */

const pointsList33 = [32, 54, 21, 64, 75, 43]
const pointsLis332 = [54, 87, 99, 65, 32]
const pointsList33def = [...pointsList33, ...pointsLis332]
console.log(pointsList33def)

/* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators. */
const toy34 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate34 = {
  lights: 'rgb',
  power: ['Volar like a dragon', 'MoonWalk']
}
const toy34def = { ...toy34, ...toyUpdate34 }
console.log(toy34def)

/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */
const colors35 = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const colors35b = [...colors35.slice(0, 2), ...colors35.slice(3)]
console.log(colors35b)
