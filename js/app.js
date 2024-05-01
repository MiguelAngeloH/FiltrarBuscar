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
    minimof:'',
    puertas:'',
    transmision:'',
    color:'',

};

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();//muestra loc autos al cargar

    //llena las opciones de años 
    llenarSelect(); 
});


///event llistener para los formularios 
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    console.log(datosBusqueda);
});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    console.log(datosBusqueda);
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    console.log(datosBusqueda);
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    console.log(datosBusqueda);
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    console.log(datosBusqueda);
});





//funciones
function mostrarAutos() {
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



//Genera  los añosd del select
function llenarSelect() {
    for(let i = max; i > min; i--) {
        
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega las opciones de año al select 

    }
}



