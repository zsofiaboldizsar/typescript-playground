// ?? never, enum, excess property errors, return result > -1, Difference between the static and instance sides of classes, You’ll notice that in the class when we refer to one of the members of the class we prepend this.. This denotes that it’s a member access.
// super() to execute the constructor of the base class, what is member in Typscript (they are public by default)?
// static properties: static accesses through prepending the name of the class

// Classes 
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "hello " + this.greeting;
    }
}
let greeter: Greeter; // we’re using Greeter as the type of instances of the class Greeter
greeter = new Greeter("world");
console.log(greeter.greet());

class Vegetable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

let carrot = new Vegetable("carrot");
console.log(carrot.name);

function greeter2(person: string) {
    return "Hello " + person;
}
let user = "Zsofi";
console.log(greeter2(user));


class Student {
    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter3(person: Person) {
    console.log("Hello " + person.firstName + " " + person.lastName);
}
let user3 = new Student("Zsofi", "Boldi");
greeter3(user3);

// Data types

let isDone: boolean = false;
let color: string = "blue";
let list: Array<number> = [1, 2, 3];
//Tuple type
let tupleList: [string, number];
tupleList = ["hello", 1];
console.log(tupleList[0].substr(1));
// Opt-out type checking with any, and let the values pass through compile-time checks
let unsureOfType: any = 4;
unsureOfType = "hello";
let anyArray: Array<any> = [1, "string", true];

//void is the opposite of any
(function logOUt(): void {
    console.log("I dont return any value, but log this message out.")
})();

// object
// declare function create(obj: object | null): void;
// create({ prop: 0 }); //OK
// create(null); //Ok
// this throws an error as string is given as argument
// create("Zsofi"); 

// Type assertion
let someString = "I am a string.";
let someStringLength = (someString as string).length;

// Variable declarations
function f(condition: boolean, x: number) {
    if (condition) {
        let x = 100;
        return x;
    }
    return x;
}
console.log(f(false, 0));
console.log(f(true, 0));

// Blocked-scope variable capturing
function theCityThatNeverSleeps() {
    let getCity;
    if (true) {
        let city = "Budapest";
        getCity = function () {
            return city; // we capture city within its environment
        }
    }
    return getCity();
}

// let creates a new scope per iteration in for loops, not only introing a new var to the env
for (let i; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100 * i);
}

// variable declarations with const => have the same scoping rules as let, but you cant reassign to them

// destructuring 
const myArray = [1, 2];
let [first, second] = myArray;
[first, second] = [second, first];

function d([two, three]: [number, number]): void {
    console.log(two);
    console.log(three);
}
d([2, 3]);

// ...rest operator
function r([first, ...rest]): void {
    console.log(first);
    console.log(rest);
}
r([1, 2, 3, 4]);

// obj destructuring without declaration
let o = {
    a: "zsofi",
    b: 35,
    c: "student"
};
let { a, b } = o;
({ a, b } = { a: "Isti", b: 44 });

// ...spread operator
let firstArray = [1, 2];
let secondArray = [3, 4];
let bothAndMore = [0, ...firstArray, ...secondArray, 5];
console.log(bothAndMore);

// ...spread with objects - properties that come later in the spread object overwrite properties that come earlier.
let mySpreadObj: object = { a: "Zsofi", b: "Atti", m() { } };
let newSpreadObj = { ...mySpreadObj, a: "Kinga" };
console.log(newSpreadObj);

// methods are not taken over when you spread instances of an obj
class C {
    a = "first";
    m() { };
    b = "hello"
}
let newC = new C();
let clone = { ...newC };
console.log(clone);

// Interfaces = structural subtyping describing the shapes JS objects can take
interface LabelledValue {
    label: string;
}

function labelledObject(obj: LabelledValue) {
    console.log(obj.label);
}
let labelO = { a: "Zsofi", label: "this is the label", c: 15 };
console.log(labelledObject(labelO));

// describe a function type with an interface
interface searchFunction {
    (source: string, substring: string): boolean;
}

let mySearch: searchFunction;
mySearch = function (source: string, substring: string) {
    let result = source.search(substring);
    console.log(result);
    return result > -1;
}
console.log(mySearch("hello", "lo"));

// index signature describes the types we can use to index into the object, along with the corresponding return types when indexing
// There are two types of supported index signatures: string and number
interface StringArray {
    [index: number]: string;
}
let myStringArray: StringArray;
myStringArray = ["Zsofi", "Kinga"];
console.log(myStringArray[0]);

// Classes - inheritance feature: classes inherit properties and methods from base classes

// Animals is the base class (superclass)
class Animals {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`)
    }
}
// Dog is a derived class, a subclass of Animals
class Dog extends Animals {
    bark() {
        console.log("Woof woof");
    };
}
let myDog = new Dog();
myDog.bark();
myDog.move(10);

// readonly, protected, private, public

class Family {
    readonly name: string;
    readonly members: number;
    protected constructor(theName: string) {
        this.name = theName;
    }
    public sayHello() {
        console.log(`Say hello to ${this.name}.`)
    }
}

// let myFamily = new Family("Hopps"); - throws error as contstructor is protected


// Accessors: getters and setters
// accessors require you to set the compiler to output ECMAScript 5 or higher. 
// Downlevelling to ECMAScript 3 is not supported. 
// The below throws an error:

// let passcode = "secret passcode";

// class Employee {
//     firstName: string;
//     lastName: string;
//     private fullName: string;
//     constructor(firstName: string, lastName: string) {
//         this.fullName = this.firstName + " " + this.lastName;
//     }
//     get fullNameEmployee(): string {
//         return this.fullName;
//     }

//     set updatedFullName(updatedName: string) {
//         if (passcode && passcode == "secret passcode") {
//             return this.fullName = updatedName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// Functions
const myAdd = (x: number, y: number): number => { return x + y };

// Optional and default-initialized params
// If a default-initialized parameter comes before a required parameter, users need to explicitly pass undefined to get the default initialized value.
const myFullName = (firstName: string, lastName?: string): string => {
    if (lastName) {
        return firstName + lastName;
    }
    else {
        return firstName;
    }
};

const myFullNameDefault = (firstName: string, lastName = "Boldizsar"): string => {
    return firstName + " " + lastName;
};

// Rest parameters are treated as a boundless number of optional parameters.
const buildName = (firstName: string, ...restOfName: string[]): string => {
    return firstName + " " + restOfName.join(".");
}
console.log(buildName("Joseph", "Samuel", "Lucas", "MacKinzie"));

// This
let hello = (thing: string): void => {
    console.log(this + "says hello " + thing);
};
hello.call("Zsofi", "world"); // => [object Object]says hello world

const person = {
    person: "Zsofi",
    hello(thing) {
        console.log(this.person + " says hello " + thing);
    }
};
person.hello("world");

// Arrow functions capture the "this" where the function is created rather than where it is invoked

