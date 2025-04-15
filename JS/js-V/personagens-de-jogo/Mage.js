const Character = require("./Character");

class Mage extends Character {
    constructor(name, LifePts, attackPts, defensePts, magicPts) {
        super(name, LifePts, attackPts, defensePts)
        this.magicPts = magicPts
    }

    attack(targetCharacter) {
        targetCharacter.LifePts -= (this.attackPts + this.magicPts) - targetCharacter.defensePts
    }

    heal(targetCharacter) {
        targetCharacter.LifePts += this.magicPts * 2
    }    
}


module.exports = Mage
