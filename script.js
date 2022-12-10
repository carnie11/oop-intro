let lista = document.getElementById("lista");

class Animal {
    constructor(name, type, sound) {
        this.name = name,
        this.type= type,
        this.sound = sound
    }

    makeSound() {
        let animalSound= this.type + "en " +  this.name + "säger " + this.sound;
        return animalSound;
    }
}

class Zoo {
    constructor(name) {
        this.name = name,
        this.animals = []

    }

    addAnimal(newAnimal)
    {
    this.animals.push(newAnimal);
    }
}

let Zootropolis = new Zoo("Zootropolis");

let Maxi = new Animal ("Maxi", "Katt", "Mjau");

Zootropolis.addAnimal(Maxi);
Zootropolis.addAnimal(new Animal("Peanut", "kanin", "grr"));
Zootropolis.addAnimal(new Animal("Pucko", "hund", "iih"));


console.log("Maxi", Maxi);
console.log(Maxi.makeSound());
console.log("Zootropolis", Zootropolis);

Zootropolis.animals.map(animal => {
 lista.insertAdjacentHTML("afterbegin", "<li>" + animal.makeSound(), "</li>") ;
});