/*
Se necesita saber quienes son de asia

return ('Asia') ==> 2
 */
const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

let count = 0;

list.forEach((array) => {
  console.log(array);
  if (array.continent === "Asia") {
    count += 1;
  }
});

console.log(` Las personas que asistieron de Asia son un total de: ${count}
`);
