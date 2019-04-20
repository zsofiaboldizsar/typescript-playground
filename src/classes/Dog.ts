import { Mammals } from './Mammals';
import { AnimalGroup } from '../constants/AnimalGroup';
import { Habitat } from '../constants/Habitat';
import { Sound } from '../constants/Sound';
import { Legs } from '../constants/Legs';

// Dog is a derived class(subclass) from the Animal base class(superclass)
export class Dog extends Mammals {

    // readonly properties must be initialized at their declaration or in the constructor
    readonly legs: Legs.MammalsNrOfLegs;
    private name: string;
    sound: Sound.DogSound;

    constructor(name: string) {
        super({
            group: AnimalGroup.MAMMALS,
            sound: Sound.DogSound
        });
    }
    introduction(): string {
        return `Dog name is: ${this.name}, belongs to this animal group: ${this.group}.`
    }
    getHabitat(habitat: Habitat): void {
        if (this.sound) {
            habitat = Habitat.HOME;
            console.log(`${this.name} lives in ${habitat}.`);
        }
    }

    // get dogName(): string { return this.name };

    // set dogName(newName: string) { this.name = newName };
}