function solve() {
    'use strict';

    const ERROR_MESSAGES = {
        INVALID_NAME_TYPE: 'Name must be string!',
        INVALID_NAME_LENGTH: 'Name must be between between 2 and 20 symbols long!',
        INVALID_NAME_SYMBOLS: 'Name can contain only latin symbols and whitespaces!',
        INVALID_MANA: 'Mana must be a positive integer number!',
        INVALID_EFFECT: 'Effect must be a function with 1 parameter!',
        INVALID_DAMAGE: 'Damage must be a positive number that is at most 100!',
        INVALID_HEALTH: 'Health must be a positive number that is at most 200!',
        INVALID_SPEED: 'Speed must be a positive number that is at most 100!',
        INVALID_COUNT: 'Count must be a positive integer number!',
        INVALID_SPELL_OBJECT: 'Passed objects must be Spell-like objects!',
        NOT_ENOUGH_MANA: 'Not enough mana!',
        TARGET_NOT_FOUND: 'Target not found!',
        INVALID_BATTLE_PARTICIPANT: 'Battle participants must be ArmyUnit-like!',
        //additional
        INVALID_ALIGNMENT: 'Alignment must be good, neutral or evil!'
    };
    // your implementation goes here
    const getNextId = (function () {
        let id = 0;
        return function () {
            id += 1;
            return id;
        };
    }());

    const VALIDATOR = {
        //Is there a difference between declaring propName: function(x){...} and just funcName(x){...}?
        //functons called internally
        checkNumRange: function (num, min, max, err) {
            if (typeof num !== 'number' || num < min || num > max) {
                throw Error(err);
            }
        },
        checkName: function (str) {
            if (typeof str !== 'string') {
                throw Error(ERROR_MESSAGES.INVALID_NAME_TYPE);
            }
            this.checkNumRange(str.length, 2, 20, ERROR_MESSAGES.INVALID_NAME_LENGTH);
            const reg = new RegExp(/[^A-Za-z ]/);
            if (reg.test(str)) {
                throw Error(ERROR_MESSAGES.INVALID_NAME_SYMBOLS);
            }
        },
        checkMana: function (man) {
            if (typeof man !== 'number' || man < 1 || !Number.isInteger(man)) {
                throw Error(ERROR_MESSAGES.INVALID_MANA);
            }
        },
        checkEffect: function (eff) {
            if (typeof eff !== 'function' || eff.length > 1) {
                throw Error(ERROR_MESSAGES.INVALID_EFFECT);
            }
        },
        checkAlignment: function (ali) {
            const values = ['good', 'neutral', 'evil'];
            if (values.indexOf(ali) === -1) {
                throw Error(ERROR_MESSAGES.INVALID_ALIGNMENT)
            }
        },
        checkCount: function (cou) {
            // another bool check for integer (cou % 1) === 0)
            if (typeof cou !== 'number' || cou < 0 || !Number.isInteger(cou)) {
                throw Error(ERROR_MESSAGES.INVALID_COUNT);
            }
        }
    }
    class Spell {
        constructor(name, manaCost, effect) {
            VALIDATOR.checkName(name);
            VALIDATOR.checkMana(manaCost);
            VALIDATOR.checkEffect(effect);
            this._name = name;
            this._manaCost = manaCost;
            this._effect = effect;
        }
        get name() {
            return this._name;
        }
        get manaCost() {
            return this._manaCost;
        }
        get effect() {
            return this._effect;
        }
    }

    class Unit {
        constructor(name, alignment) {
            VALIDATOR.checkName(name);
            VALIDATOR.checkAlignment(alignment);
            this._name = name;
            this._alignment = alignment;
        }
        get name() {
            return this._name;
        }
        get alignment() {
            return this._alignment;
        }
    }

    class ArmyUnit extends Unit {
        constructor(options) { //name, alignment, damage, health, speed, count
            super(options.name, options.alignment);
            VALIDATOR.checkNumRange(options.damage, 0, 100, ERROR_MESSAGES.INVALID_DAMAGE);
            VALIDATOR.checkNumRange(options.health, 0, 200, ERROR_MESSAGES.INVALID_HEALTH);
            VALIDATOR.checkNumRange(options.speed, 0, 100, ERROR_MESSAGES.INVALID_SPEED);
            VALIDATOR.checkCount(options.count);
            this._id = getNextId();
            this._damage = options.damage;
            this._health = options.health;
            this._speed = options.speed;
            this._count = options.count;
        }
        get id() {
            return this._id;
        }
        get damage() {
            return this._damage;
        }
        get health() {
            return this._health;
        }
        get speed() {
            return this._speed;
        }
        get count() {
            return this._count;
        }
    }

    class Commander extends Unit {
        constructor(name, alignment, mana) {
            super(name, alignment);
            VALIDATOR.checkMana(mana);
            this._mana = mana;
            this._spellbook = [];
            this._army = [];
        }
        get mana() {
            return this._mana;
        }
        get spellbook() {
            return this._spellbook;
        }
        get army() {
            return this._army;
        }
    }
    //Cuki
    //elements in btmData are private
    //addCommanders - commanders list not shadowed by commanders argument due to same name
    const battlemanagerData = {
        commanders: []
    }
    const battlemanager = {

        getCommander: function (name, alignment, mana) {
            return new Commander(name, alignment, mana);
        },
        getArmyUnit: function (options) {
            return new ArmyUnit(options);
        },
        getSpell: function (name, manaCost, effect) {
            return new Spell(name, manaCost, effect);
        },
        addCommanders: function (...commanders) {
            battlemanagerData.commanders.push(...commanders);
            return this;
        },
        addArmyUnitTo: function (commanderName, armyUnit) {
            const comIndex = battlemanagerData.commanders.findIndex(c => c.name === commanderName);
            if (comIndex > -1) {
                battlemanagerData.commanders[comIndex].army.push(armyUnit);
            }
            else {
                throw 'Commander not found!';
            }
            return this;
        },
        addSpellsTo: function (commanderName, ...spells) {
            try {
                spells.forEach(s => {
                    VALIDATOR.checkName(s.name);
                    VALIDATOR.checkMana(s.manaCost);
                    VALIDATOR.checkEffect(s.effect);
                });
            } catch (error) {
                throw Error(ERROR_MESSAGES.INVALID_SPELL_OBJECT);
            }
            //Cuki
            battlemanagerData.commanders.find(c => c.name === commanderName).spellbook.push(...spells);
            return this;
        },
        findCommanders: function (query) {
            if (query.length > 1) {
                console.log('two params');
                return battlemanagerData.commanders
                    .filter(c => c.name === query.name)
                    .filter(c => c.alignment === query.alignment)
                    .sort((ca, cb) => ca.name.localeCompare(cb.name));
            }
            else if (query.hasOwnProperty('name')) {
                console.log('only name');
                return battlemanagerData.commanders
                    .filter(c => c.name === query.name)
                    .sort((ca, cb) => ca.name.localeCompare(cb.name));
            }
            else if (query.hasOwnProperty('alignment')) {
                console.log('only alignment');
                return battlemanagerData.commanders
                    .filter(c => c.alignment === query.alignment)
                    .sort((ca, cb) => ca.name.localeCompare(cb.name));
            }
            // console.log('+++++++++++++++++++++ SEARCH ++++++++++++++++++++++');
            // console.log(query.name, query.alignment);
            // console.log(result);

            //.filter(com => Object.keys(query).every(prop => query[prop] === com.prop)) //Cuki's old solution, not work in Mocha

        },
        findArmyUnitById: function (id) {

        },
        findArmyUnits: function (query) {

        },
        spellcast: function (casterName, spellName, targetUnitId) {

        },
        battle: function (attacker, defender) {

        }
    };

    return battlemanager;
}

module.exports = solve;