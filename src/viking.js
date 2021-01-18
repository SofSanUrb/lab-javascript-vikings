// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    //Methods
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    //Methods
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    //Methods
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    //Methods
    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    
    vikingAttack() {
        let randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomIndexSaxon];

        let randomIndexVic = Math.floor(Math.random()*this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomIndexVic];
        
        let output =  randomSaxon.receiveDamage(randomViking.strength);
        if(randomSaxon.health <= 0) {
            this.saxonArmy.splice(randomIndexSaxon, 1);
        }
        
        return output;
    }
    
    saxonAttack() {
        let randomIndexSaxon = Math.floor(Math.random()*this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomIndexSaxon];

        let randomIndexVic = Math.floor(Math.random()*this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomIndexVic];
        
        let output = randomViking.receiveDamage(randomSaxon.strength);

        if(randomViking.health <= 0) {
                this.vikingArmy.splice(randomIndexVic, 1);
            }
        
        return output;
    }
    
    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        }
        else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
