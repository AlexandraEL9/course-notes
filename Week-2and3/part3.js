//arrays

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// remember indexing starts at 0
// so fruit[0] is the first element, fruit[1] is the second, etc.
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry
console.log(fruits.length); // 3
console.log(fruits[fruits.length - 1]); // cherry
console.log(fruits[fruits.length - 2]); // banana
console.log(fruits[fruits.length - 3]); // apple

// Add an element to the end of the array
fruits.push("orange");

//remove from end
fruits.pop();

// add to the beginning
fruits.unshift("kiwi");

// remove from the beginning
fruits.shift();

//slice
// returns a shallow copy of a portion of an array into a new array object
console.log(fruits.slice(2)); // returns a new array with elements from index 2 to the end
console.log(fruits.slice(1, 3)); // returns a new array with elements from index 1 to index 3 (not including index 3)
// the start in inclusive, the end is exclusive.

// splice
// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// the first argument is the index at which to start changing the array
// the second argument is the number of elements to remove
// the third argument is the element to add
const numbers1 = [1, 2, 3, 4, 5];
numbers1.splice(2, 1); // removes the element at index 2
console.log(numbers1); // returns [1, 2, 4, 5]
numbers1.splice(2, 0, 3); // adds the element 3 at index 2
console.log(numbers1); // returns [1, 2, 3, 4, 5]


//OBJECTS
const person = {
    name: "Alex",
    age: 40,
    city: "Manchester",
    hasChildren: false,
    isStudent: true,
    hobbies: ["reading", "gaming", "cooking"],
};

// access info in an object
console.log(person.name); // Alex

// different example
const invisibleWomen = {
    title: 'Invisible Women',
    subtitle: 'Exposing the gender bias women face every day',
    author: 'Caroline Criado-Perez',
    year: 2019,
    // nested object
    publisher: {
        name: 'Chatto & Windus',
        country: 'UK',
        city: 'London',
    },
    otherBooks: [ 'book1', 'book2', 'book3' ],
}

console.log(`${invisibleWomen.title}: ${invisibleWomen.subtitle} - ${invisibleWomen.author} (${invisibleWomen.year})`);
// returns: Invisible Women: Exposing the gender bias women face every day - Caroline Criado-Perez (2019)

console.log(invisibleWomen.publisher.name)
// returns: Chatto & Windus
console.log(invisibleWomen.publisher.country)
// returns: UK

console.log(invisibleWomen.otherBooks[0])
// returns: book1

// FOR LOOPS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let i = 1; i +10; i++) {
    console.log(i);
}

// how it interacts with arrays
const fruits1 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}

// or
for (let fruit of fruits1) {
    console.log(fruit);
}

// While loops
// repeats so long as the condition is true
//let countdown = 10;
//while (countdown > 0) {
    //console.log(countdown);
    //countdown -= 1; // countdown = countdown - 1;
//}
//console.log("Blast off!");
// while condition code
//returns 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// stop when my random num generator = 5
while (num!==5) {
    num = Math.ceil(Math.random() * 10) + 1;
    console.log(num);
}
