function solve() {
    let newHero = {
        fighter: function(name) {
            let hero = {};
            hero.name = name;
            hero.health = 100;
            hero.stamina = 100;
            hero.fight = function() {
                this.stamina -= 1;
                console.log(`${this.name} slashes at the foe!`);
            }
            return hero;
        },

        mage: function(name) {
            let hero = {};
            hero.name = name;
            hero.health = 100;
            hero.mana = 100;
            hero.cast = function(spell) {
                this.mana -= 1;
                console.log(`${this.name} cast ${spell}`);
            }
            return hero;
        }
    };

    return newHero;
}

let create = solve();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);