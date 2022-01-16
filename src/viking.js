// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health,
    this.strength = strength

  }

  attack() {
    return this.strength
  };

  receivedDamage(theDamage) {
    return this.health -= theDamage
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    this.name = name,
  }
 }

// Saxon
class Saxon { }

// War
class War { }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
