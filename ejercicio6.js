/**
 Necesitamos saber si va a haber programadores de un lenguaje que le pidamos devolviendo true o false
 */


 const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 28, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];


const knowIfLanguage = (array, lang) => {
  let foundLanguage = false;
  langparameter = lang.toLowerCase();
  

  array.forEach((element) => {
    const { language } = element;
    lenguagecomparation = language.toLowerCase();
    
    if (lenguagecomparation === langparameter) {
      foundLanguage = true;
    }
  });
  return foundLanguage;
};

console.log(knowIfLanguage(list, "RUBY"));
