'use strict'

const mapa = document.querySelector('#map')

const getEstado = ({target}) => {

    const estado = target.id.replace('BR-', '')
    // const nomeEstado = target.getAttribute('title') 
    //  Puxa o titulo

    // preencherDados(estado)

    console.log(estado)
}

mapa.addEventListener('click', getEstado)

