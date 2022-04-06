const botonContactar = document.querySelector("#boton-contactar");
const botonHerramientas = document.querySelector("#boton-herramientas");
const botonRoadMap = document.querySelector("#boton-roadMap");
const container_contactar = document.querySelector('#container-contactar');
const container_herramientas = document.querySelector('#container-herramientas');
const container_roadMap = document.querySelector('#container-roadMap');

const input_nombre = document.querySelector('#input_nombre');


botonContactar.addEventListener('click', () => {
    container_contactar.classList.remove('no-visible'); /* Mostrar container CONTACTAR*/ 
    container_contactar.classList.add('visible');       
    
    container_herramientas.classList.remove('visible');
    container_herramientas.classList.add('no-visible');
    container_roadMap.classList.remove('visible');
    container_roadMap.classList.add('no-visible');

    document.querySelector('#input_nombre').focus();
})

botonHerramientas.addEventListener('click', () => {  /* Mostrar container HERRAMIENTAS*/ 
    container_herramientas.classList.remove('no-visible');
    container_herramientas.classList.add('visible');

    container_contactar.classList.remove('visible');
    container_contactar.classList.add('no-visible');
    container_roadMap.classList.remove('visible');
    container_roadMap.classList.add('no-visible');
})

botonRoadMap.addEventListener('click', () => {  /* Mostrar container ROADMAP*/ 
    container_roadMap.classList.remove('no-visible');
    container_roadMap.classList.add('visible');

    container_contactar.classList.remove('visible');
    container_contactar.classList.add('no-visible');
    container_herramientas.classList.remove('visible');
    container_herramientas.classList.add('no-visible');
})




