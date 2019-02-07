// ?? never, enum, excess property errors, 

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

let greeter = new Greeter("world");
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