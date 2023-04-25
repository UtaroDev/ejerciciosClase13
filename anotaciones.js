class Pet {
  constructor(nombre, especie, color, raza, tamaño) {
    this.name = nombre;
    this.specie = especie;
    this.color = color;
    this.breed = raza;
    this.size = tamaño;
  }

  sayMiau(){
    console.log(`${this.name}: hace miau!`)
  }
}

class Owner {
  constructor(name, address, phone, date, pet) {
    this.name = name;
    this.address = address;
    this.date = date;
    this.phone = phone;
    this.pet = pet;
  }
}

const myCat = new Pet("Haru", "Cat", "Black", "Halfblood", "small");
const owner = new Owner(
  "Santiago",
  "Avenida Siempre Viva",
  "113892",
  "13/04/23",
  myCat
);

//myCat.sayMiau()

/*

Conceptos de clases- 
Se escriben en pascal case
This hace referencia a una palabra dedicada que es "a esta variable de esta clase, normalmente se le guarda una variable de 
un parametro con el mismo nombre."

para crear un nuevo objeto, se usa la palabra "new" que es como deicr una nueva instancia y luego le pones la clase en este caso
pet
que es una palabra dedicada, y la palabra const ya que no va a cambiar luego

para acceder a una propiedad con el nombre del objeto y un punto que diga el atributo

se pueden tener Arrays con objetos adentro pero no ARRAYS con clases adentro.

METODOS 
Se ponen afuera del constructor y se llaman como el objeto y . nombre del metodo 

ESTACTICO 
lo llama la clase sin tener una instancia de objetos osea un ejemplo que no existe haru

Hay objetos literales que no tienen el new atributo y la creas sin metodo contrsuctor


*/

const richardlison = {
  name: "Martin",
  age: 19,
  country: "Argentina",
  hobbies: ["Guitar", "Voley", "Programming"],
  sayHi: () => console.log("Hola gente!"),
};
/*Sintaxis de un objeto literal, donde se diferencian atributos con una , y un atributo que puede ser un objeto con atributos
adentro
se pueden guardar arreglos.
*/

/*const array2 = [1, 2, 3, 4, 90, 23];
console.log(Math.max(...array2));

Ejemplo de que funciona con un arreglo ya hecho con spread operator.
*/

//Ejemplo con un Date.now built "Date" con el meotodo estatico .now
const array = [1, 2, 3, 4, Date.now()];
//console.log(array);

/*
Ejemplo donde tengo una propiedad con el nombre date: y le instancio la clase DATE con el metodo .getFullYear

const lautaro = {
  name: "Lauty",
  age: 19,
  date: new Date().getFullYear(),
};
console.log(lautaro.date);

*/

const fecha = new Date();
//console.log(fecha.getDate())

const numero = new Number(4);
//console.log(numero.toFixed(2))

/*
Existen objetos que se llaman built-in objetos

Que existen ya por defecto en java y son utilizables Y TIENEN METODOS ESTATICOS POR DEFECTO TAMBIEN
como la clase math y el metodo estatico .Max 

Estos built in objetos tambien pueden usar METODOS de INSTANCIA pero hay  que instanciarlos
por ejemplo  crea una instancia del OBJETO DATE y lo asgina a la variable fecha, luego le hace el metodo getDate

otro ejemplo la variable numero con la instancia de la clase Number y el metodo Tofixed
*/

/*
Los METODOS de instancia necesitan un objeto para funcionar
y los estaticos no

*/


/*
Rest operator se escribe para condensar variables coomo ...nombredevariable y un nombre va a hacer que los parametros restantes
se guarden en un array

*/
function sum(number1,number2,...rest){
  let result = number1 * number2;
  rest.forEach((number)=>{
    result+=number;
  })
  return result
}



/* 
Destructuring
Extrae variables con el mismo nombre de un objeto 
*/

const person = {
  fullname:'Martin svoco',
  age:35 ,
  addres: 'Altura 12',
  country: 'bolivia',
}

//agarro la edad y el nombre completo del objeto person
const{age:edad,addres} =person

console.log(`Ejemplo de destructuring de un objeto de persona: edad: ${edad} calle: ${addres} ---`)

/*const{...variables}=person
console.log(variables)
Desestructuro todo y lo guardo en un rest operator
*/

function sumas({numero2, numero1}){
 let result;
 console.log(`numero 1 vale: ${numero1} -- numero 2 vale: ${numero2}`)
 result = numero1+numero2;
 return result
}


const suma2 = {
  numero:10,
  numero2:5,

}


const suma = {
  numero1:2,
  numero2:5,

}
console.log('Ejemplo de funcion con objeto llamado suma: ', sumas(suma))
//A la funcion le paso como parametros el objeto suma

console.log("---")
const result = sumas({numero1:54,numero2:6})
console.log("Ejemplo de funcion con parametros que le creo en el momento:",result)

//Ya a la funcion sumas le paso como parametro 54 y 6 porque coinciden con el nombre aunque num2 no la detecta


/*
la Funcion hace un destructuring
la funcion toma como parametros los atributos que coincidan con el mismo nombre de un objeto y las usa
*/

/*
SPREAD OPERATOR
Operador de JavasaScript que nos deja extender un arreglo rompiendo la estructura

a diferencia del otro, este saca los elementos del arreglo y los va guardando como elementos independientes en
 variables distintas
*/

const numbers = [20,30,40,10]

console.log(...numbers, 'Spread operator')

//Destructuring de arreglos

const [...restOfn]=numbers

//console.log(firstn)
console.log(restOfn, 'destructuring')