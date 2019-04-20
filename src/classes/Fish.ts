import { AnimalGroup } from '../constants/AnimalGroup';
import { Sound } from '../constants/Sound';
import { Legs } from '../constants/Legs';

export class Dolphin {

    group: AnimalGroup.FISH;
    sound: Sound.DolphinSound;
    legs: Legs.FishNrOfLegs;

    // this constructor is using a parameter property that creates and initializes the 'name' member,
    // and since it's readonly, it cannot be changed after the contructor is exectued
    constructor(readonly name: string) {
    }

    makeSound(): string {
        return `${this.name} makes ${this.sound}.`
    }



}