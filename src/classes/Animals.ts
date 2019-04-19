import { AnimalGroup } from '../constants/AnimalGroup';
import { Habitat } from '../constants/Habitat';
import { Sound } from '../constants/Sound';
import { InterfaceAnimals } from './InterfaceAnimals';

// Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly
export abstract class Animals implements InterfaceAnimals {

    readonly name: string;
    readonly group: AnimalGroup;
    readonly sound: Sound;

    // if a constructor is protected, it means that the class cannot be instantiated outside 
    // of its containing class, but can be extended
    protected constructor(theName: string, theGroup: AnimalGroup) {
        this.name = theName;
        this.group = theGroup;
    }

    // Methods within an abstract class that are marked as abstract do not contain an implementation 
    // and must be implemented in derived classes.  
    abstract getHabitat(habitat: Habitat): void;

    makeSound(sound: Sound): void {
        console.log(`${this.name} makes ${this.sound}.`);
    };
}