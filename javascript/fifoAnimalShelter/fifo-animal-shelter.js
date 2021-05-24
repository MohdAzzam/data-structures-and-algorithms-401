class AnimalShelter {
    constructor() {
        this.dog = new Array();
        this.cat = new Array();

    }
    enqueue(animal) {
        animal = animal.toLowerCase();
        if (animal === 'cat' || animal === 'dog') {
            if (animal === 'cat') {
                this.cat.push({ type: animal });
            }
            if (animal === 'dog') {
                this.dog.push({ type: animal });
            }
        } else {
            return 'Should Add Dog Or Cat Queue';
        }

    }
    dequeue(pref) {
        pref = pref.toLowerCase();
        if ((pref === 'cat' && this.cat.length > 0) || (pref === 'dog' && this.dog.length > 0)) {
            if (pref === 'cat') {
                this.cat.shift();
                return this;
            }
            if (pref === 'dog') {
                this.dog.shift();
                return this;
            }
        } else {
            return null;
        }
    }
}
module.exports = AnimalShelter;
