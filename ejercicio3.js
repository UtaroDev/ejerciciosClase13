/*
Mejorarlo para que haga un pvp y si esta vivo

le baje la vida a 10 para que se mueran XD
*/

class Character {
  constructor(name = "heroe") {
    this.name = name;
    this.ranking = "00";
    this.health = 10;
    this.damage = 5;
    this.experience = 0;
    this.isAlive = true;
  }

  talk(namefriendly) {
    console.log(`${this.name}: Hola ${namefriendly}!`);
  }

  attack(damageGiven, playerTarget) {
    if (playerTarget.isAlive === true) {
      console.log(
        `${this.name}: Realizó un ataque con ${damageGiven} en contra de ${playerTarget.name} y le resto ${this.damage} puntos de vida!`
      );
      this.experience += 10;
      playerTarget.health -= this.damage;
      console.log(
        `${playerTarget.name} ha recibido ${this.damage} de daño, su salud restante es de: ${playerTarget.health} hp!
        -------------`
      );
      if (playerTarget.health <= 0) {
        playerTarget.isAlive = false;
        console.log(` ${playerTarget.name} ah muerto!
        El ganador es ${this.name}
        `);
        this.experience += 10;
      }
    } else {
      console.log(` ${playerTarget.name} Ya esta muerto!
        `);
    }
  }
  takeDamage(damageTaken) {
    this.health -= damageTaken;
    console.log(
      `${this.name} ha recibido ${damageTaken} de daño, tu salud restante es: ${this.health} hp!`
    );
  }
}

const characterMain = new Character("Garen");

const characterSecondary = new Character("Olaf");

characterMain.attack("Golpe punzante", characterSecondary);

characterSecondary.attack("Hacha giratoria", characterMain);

characterMain.attack("Espada punzante", characterSecondary);

characterMain.attack("Espada punzante", characterSecondary);

console.log(characterMain);
console.log(characterSecondary);
