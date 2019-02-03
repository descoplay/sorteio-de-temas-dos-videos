
const Random = require('random')

const Lista = require('./ideias')

const temas = Lista.temas

const temasKeys = Object.keys(temas)
const numTemas = temasKeys.length - 1

const posTemaAleatorio = Random.int(0, numTemas)
const nomeTemaAleatorio = temasKeys[posTemaAleatorio]
const descricaoTemaAleatorio = temas[nomeTemaAleatorio]

console.log('=====================================================================================')
console.log(`> O tema sorteado foi: ${nomeTemaAleatorio} - ${descricaoTemaAleatorio}`)

const frontend = Lista.frontend
const backend = Lista.backend
const tecnologias = frontend.concat(backend)

const numTecnologias = tecnologias.length - 1

const posTecnologiaAleatoria = Random.int(0, numTecnologias)
const tecnologiaAleatoria = tecnologias[posTecnologiaAleatoria]

console.log('=====================================================================================')
console.log(`> A tecnologia sorteada foi: ${tecnologiaAleatoria}`)
console.log('=====================================================================================')