/*
Crear un juego de heroes, hacer una funcion que utilize una clase para crear un heroe
*/

class Character {
  constructor(name = "heroe") {
    this.name = name;
    this.ranking = "00";
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }
}

const characterMain = new Character("Paladin");
console.log(characterMain);
