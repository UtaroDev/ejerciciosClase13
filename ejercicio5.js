/*
    Devolver un array donde en cada posicion tiene un objeto con una nueva propiedad donde le de la bienvenida la proxima vez que asista a un evento.
*/

const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  

const newlist = list.map((array)=>{
    const{firstName:greetingName,language:languageName}=array;

    const greeting =`Hi ${greetingName}, what do you like the most about ${languageName}?`
    return{
        ...array,
        greeting,
    }
})

console.log(newlist)

//Hice trampa :(