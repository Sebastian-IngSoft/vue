/*
//Curso de javascript para consumir api con vue
//VARIABLES
let para hacer que las variables sean unicas en cada bloque
var las variables seran globales
const las variables tendran el un valor constante y no pueden ser cambiadas

//FUNCIONES
//Las funciones clasicas son asi
function mi_funion(){
	console.log('mi funcion')
}
//funciones flecha son asi
const mi_funcion = () => 'mi funcion'
console.log(mi_funcion())

//TEMPLATES
let nombre = "sebastian"
let apellido = "sarmiento"
let edad = "24"
let texto = `hola mi nombre ${nombre} y mi apellido ${sarmiento} es y mi edad ${edad}`

//OBJETOS LITERALES
let persona={
	nombre: "sebastian",
	apellido: "sarmiento",
	edad: 24,
	mascota: ['perro',gato]
}
let texto = `hola mi nombre ${persona.nombre} y mi apellido ${personala.apellido} es y mi edad ${persona.edad} mi mascota es ${persona.mascota}`
persona.id = 001; //agrega o actualiza el objeto
//DESTRUCTURACION DE OBJETO
const {nombre, apellido} = persona;
console.log("mi nombre es " + nombre); //saca el persona.nombre y crea una valiable independiente con el valor
*/
//MANEJO DE PROMESAS
let data = [
    {
        id:1,
        nombre: "jhon",
        age: 20,
    },
    {
        id:2,
        nombre: "miguel",
        age: 20,
    },
    {
        id:2,
        nombre: "seba",
        age: 20,
    }
    ]
    
    function getData(){
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                if (true) {
                    resolve(data)
                }
                else{
                    reject('error')
                }
            },200);
        });
    }
    /*
    let response = getData();

    response.then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    });
    
    console.log('continua el programa')
    */
async function fetchData(){
    try {
        let response = await getData();
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

fetchData()
