import { AnimalGroups } from '../constants/AnimalGroups';
import { Habitat } from '../constants/Habitat';

// Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly
export abstract class Animals {

    public readonly name: string;
    public readonly group: AnimalGroups;

    // if a constructor is protected, it means that the class cannot be instantiated outside of its containing class, but can be extended
    protected constructor(theName: string, theGroup: AnimalGroups) {
        this.name = theName;
        this.group = theGroup;
    }
    public introduction(): string {
        return `Animal name is: ${this.name} and belongs to this animal group: ${this.group}.`
    }

    abstract getHabitat(habitat: Habitat): string;
}