import { Dog } from "./classes/Dog";
import { Dolphin } from "./classes/Fish";

let dog = new Dog("Bobby");
console.log(dog.name);
console.log(dog.introduction());
console.log(dog.getHabitat());

let dolphine = new Dolphin("Goofy");
console.log(dolphine);
console.log(dolphine.name);
dolphine.name = "Abba";
console.log(dolphine.name);
