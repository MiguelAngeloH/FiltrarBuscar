//variables 

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//contenedor para los resultados 
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;



//generar un objeto con la busqueda
const datosBusqueda = {
    marca:'',
    year:'',
    maximo:'',
    minimo:'',
    puertas:'',
    transmision:'',
    color:'',

};

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);//muestra loc autos al cargar

    //llena las opciones de años 
    llenarSelect(); 
});


///event llistener para los formularios 
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});


year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    
    filtrarAuto();
});


minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();    
});


maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
    
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas =parseInt(e.target.value);
    filtrarAuto();

    
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;    
    filtrarAuto();


});



color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;    
});





//funciones
function mostrarAutos(autos) {

    limpiarHTML();//eElimina el HTML previo


    autos.forEach(auto => {

        const {
         marca, modelo, year, puertas, transmision, precio, color
        } =auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        
        ${marca} ${modelo} - ${year} - ${puertas} 
        -Puertas -Transmision ${transmision} 
        -Precio: ${precio} -Color ${color} 
     
        `;


 //insertar en el HTML
        resultado.appendChild(autoHTML);
    });
}

//forma rapida de limpiar html
function limpiarHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }   
}







//Genera  los años del select
function llenarSelect() {
    for(let i = max; i > min; i--) {
        
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega las opciones de año al select 

    }
}



//funcion que filtra en base a la busqueda 
function filtrarAuto(){
    //usamos un aray method filter: 
    //console.log('filtrando')
    
    const  resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).
    filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    //console.log(resultado);
    //mostrarAutos(resultado);

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
}

function noResultado(){
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add =('alerta', 'error') ;
    noResultado.textContent = 'No hay Resultados, intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado);
}


function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}
//filtrar autos por año

function filtrarYear(auto){
    const {year} = datosBusqueda;
    //console.log(typeof year === 'number);
    //console.log(year);
    console.log(typeof auto.year);
    if (year) {
        return auto.year === year;
    }
    return auto;
}
function filtrarMinimo(auto){
    const {minimo}=datosBusqueda;
    
    if (minimo) {
        return auto.precio >=minimo;
    } return auto ;

}


function filtrarMaximo(auto){
    const {maximo}=datosBusqueda;
    
    if (maximo) {
        return auto.precio <= maximo;
    } return auto ;

}

function filtrarPuertas(auto){
    const {puertas}=datosBusqueda;
    
    if (puertas) {
        return auto.puertas === puertas;
    } return auto ;

}

function filtrarTransmision(auto){
    const {transmision}=datosBusqueda;
    
    if (transmision) {
        return auto.transmision === transmision;
    } return auto ;
}








function filtrarColor(auto){
    const {color}=datosBusqueda;
    
    if (color) {
        return auto.color === color;
    } return auto ;
}





