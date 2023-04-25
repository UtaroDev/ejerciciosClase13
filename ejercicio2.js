/*
Mejorarlo para que salude ataque y reciba daño
*/

class Character {
  constructor(name = "heroe") {
    this.name = name;
    this.ranking = "00";
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }

  talk(namefriendly) {
    console.log(`${this.name}: Hola ${namefriendly}!`);
  }

  attack(damageGiven) {
    console.log(`${this.name}: Realizó un ataque con ${damageGiven}!`);
    this.experience += 10;
  }

  takeDamage(damageTaken) {
    this.health -= damageTaken;
    console.log(
      `Has recibido ${damageTaken} de daño, tu salud restante es: ${this.health} hp!`
    );
  }
}

const characterMain = new Character("Paladin");
console.log(characterMain);

characterMain.takeDamage(10);
