/* 4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map(). */
const users41 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const users41b = users41.map((user) => user.name)
console.log(users41b)
/* 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'. */
const users42 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const users42b = users42.map((user) => {
  if (user.name.startsWith('A')) {
    return { ...user, name: 'Anacleto' }
  } else {
    return { ...user }
  }
})
console.log(users42b)

/* 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true. */
const cities43 = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
const cities43b = cities43.map((location) => {
  if (location.isVisited == true) {
    return location.name + ' Visitado'
  } else {
    return location.name
  }
})
console.log(cities43b)
