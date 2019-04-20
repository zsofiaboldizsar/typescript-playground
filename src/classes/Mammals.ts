import { Habitat } from '../constants/Habitat';
import { InterfaceAnimals } from './InterfaceAnimals';

// Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly
export abstract class Mammals implements InterfaceAnimals {

    readonly group: string;
    readonly sound: string;

    // if a constructor is protected, it means that the class cannot be instantiated outside 
    // of its containing class, but can be extended
    protected constructor(readonly mammal: InterfaceAnimals) {
        this.group = mammal.group;
        this.sound = mammal.sound;
    }

    // Methods within an abstract class that are marked as abstract do not contain an implementation 
    // and must be implemented in derived classes.  
    abstract getHabitat(habitat: Habitat): void;

}