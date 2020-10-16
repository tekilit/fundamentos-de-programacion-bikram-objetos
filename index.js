// DECLARACIONES:
// 1.- Crea un objeto de nombre Coche que tenga las propiedades: 
//marca, modelo, matricula
const Coche = {
    marca: '',
    modelo: '',
    matricula: '',

}

//  2.- Crea un objeto de nombre Casa 
//que tenga las propiedades: codPostal, calle, portal, piso

const Casa = {
    codPostal: '',
    calle: '',
    portal: '',
    piso: '',
}

// 3.- Crea un 'objeto' de nombre 'FullStackDeveloper' 
//que tenga las propiedades: 'array lenguajes, array proyectos'

const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
}

// 4.- Crea un 'objeto' de nombre 'Perro' que tenga las
// propiedades: 'nombre, raza, color, edad, función ladrar (imprime por consola un ladrido), 
//función popo (devuelve el valor: Math.random() * 3)


const Perro = {
    nombre: '',
    raza: '',
    color: '',
    edad: '',
    ladrar: function() {
        console.log('¡guau!')
    },
    popo: function() {
        return Math.random() * 3
    }
}

// LECTURA DE PROPIEDADES:

// 5.- Dado un objeto de nombre Portatil 
//obtén el valor de la propiedad marca con .marca guardándolo en la variable marcaPortatil

var marcaPortatil = Portatil.marca 

// 6.- Dado un 'objeto' de nombre 'Portatil' obtén el valor de la propiedad 
//'marca con ['marca'] guardándolo en la variable 'marcaPortatil2'

 var marcaPortatil2 = Portatil['marca']

 // 7.- Dado un 'objeto' de nombre 'Concierto' obtén 
 //el valor de la propiedad 'grupos' guardándolo en la variable 'grupos'

 var grupos = Concierto.grupos

 // 8.- Dado un 'objeto' de nombre 'Led' 
 //obtén el valor de las propiedades 'rojo, verde y azul' guardándolo en la variable 'array RGB[rojo, verde, azul]'

 var arrayRGB = [Led.rojo, Led.verde, Led.azul] 
 
 console.log(arrayRGB[rojo, verde, azul])