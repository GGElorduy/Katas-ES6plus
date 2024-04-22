/* 
Dado el siguiente javascript usa forof y forin para saber cuantas veces ha 
sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre 
de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada 
vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a 
la vez un buen reto y oportunidad para comprender que hay muchas formas de 
hacer las cosas en javascript.
 */

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
let allSounds = []
let countedSounds = []
for (const user of users) {
  for (const sound in user.favoritesSounds) {
    allSounds.push(sound)
  }
}
/* for (const sound of allSounds) {
  let counter = 1
  if (!countedSounds.includes(allSounds[sound])) {
    let finalSound = {}
    finalSound.Name = sound
    finalSound.Counter = counter
    countedSounds.push(finalSound)
  } else {
    counter++
  }
} */
/* for (const sound of allSounds) {
  if (!countedSounds.some((item) => item.Name === sound)) {
    let finalSound = {}
    finalSound.Name = sound
    finalSound.Counter = 1
    countedSounds.push(finalSound)
  } else {
    let existingSound = countedSounds.find((item) => item.Name === sound)
    existingSound.Counter++
  }
}
console.log(countedSounds) */
const soundCount = {}

// Iteramos sobre cada usuario y sus sonidos favoritos
for (const user of users) {
  for (const sound in user.favoritesSounds) {
    // Si el sonido aún no está en el objeto soundCount, lo inicializamos a 1
    // Si ya está, incrementamos su conteo
    soundCount[sound] = (soundCount[sound] || 0) + 1
  }
}

console.log(soundCount)
