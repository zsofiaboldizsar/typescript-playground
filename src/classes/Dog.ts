import { Animals } from './Animals';
import { AnimalGroup } from '../constants/AnimalGroup';
import { Habitat } from '../constants/Habitat';
import { Sound } from '../constants/Sound';

// Dog is a derived class(subclass) from the Animal base class(superclass)
export class Dog extends Animals {

    // readonly properties must be initialized at their declaration or in the constructor
    readonly legs: number;
    sound: Sound.MammalsSound;

    constructor(name: string, group: AnimalGroup, nrOfLegs: number) {
        super(name, group);
        this.legs = nrOfLegs;
    }
    introduction(): string {
        return `Dog name is: ${this.name}, belongs to this animal group: ${this.group} and has ${this.legs}.`
    }
    getHabitat(habitat: Habitat.HOME): void {
        console.log(`${this.name} lives in ${habitat}.`);
    }
}