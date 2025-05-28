// Array Types
const numbers: number[] = [1, 2, 3, 4, 5];

// Object Types
type Person = {
    firstName: string;
    lastName: string;
    age: number;
};
const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};


// Union Types
type StringOrNumber = string | number;
const demoString: StringOrNumber = `Hello, I'm a string!`;
const demoNumber: StringOrNumber = 42;

// Intersection Types
type NameAndAge = {firstName: string} & {age: number}
const person2: NameAndAge = {
    firstName: "Jane",
    age: 30
}

// Tuple Types
const tuple: [string, number] = ['Test',58]

// Enum Types
enum Colour {
    Rd = 'red',
    Gn = 'green',
    Bu = 'blue'
}
const faveColour: Colour = Colour.Gn
// example as a colour pallette
enum ColourPalette {
  red = '#FF0000',
  green = '#00FF00',
  blue = '#0000FF'
}

const faveColour2: ColourPalette = ColourPalette.red;


// Function Types
//function add(a, b) {
    //return a + b;
//}                      // doesn't like as type not specified- throws error

function add2(a: number, b: number): number {
    return a + b;
}

add2(3, 4); // returns 7

// fat arrow function
const add3 = (a: number, b: number): number => {
    return a + b;
}


// Function with optional parameters
const greeting = (name: string, age?: number): string => {

    return age ? 'Hello, ' + name + '. You are ' + age + ' years old.' : 'Hello, ' + name + '.';
}

greeting('Alice', 30); // returns 'Hello, Alice. You are 30 years old.'

// Default Parameters
const greet = (name: string, greeting: string = 'Hello'): string => {
    return `${greeting}, ${name}!`;
}
greet('Bob'); // returns 'Hello, Bob!'
greet('Bob', 'Hi'); // returns 'Hi, Bob!'

