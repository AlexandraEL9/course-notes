// Implementation of sorting techniques

//BUBBLE SORT
// step through the list and compare adjacent elemnts and swaps where needed until all in correct order.

// create 
const bubbleSort = (arr) => {
    // helper function to swap elements in array
    const swap = (i, j) => ([arr[i], arr[j]] =[arr[j], arr[i]]);
    const n = arr.length
    var swapped = true;
    var x = -1;

    //loop until no swaps occur
    while (swapped){
        swapped = false;
        x = x + 1;

        //compare adjacent elements
        for (let i = 1; i < n - x; i++){
            if (arr[i - 1] > arr[i]) {
                swap(i - 1, i);
                swapped = true;
            }
        }
    }
    return arr;
};

// testing the function
//const testArray = [64, 34, 25, 12, 22, 11, 90];
//console.log("b Original array:", testArray);
//const sorted = bubbleSort([...testArray]);
//console.log("b Sorted array: ", sorted);

// SELECTION SORT

// divide array into two parts
// find the smallest element and put it at the bebinning
// then the next elemnt amd put in 2nd position in sorted side

const selectionSort = (arr) => {
    // loop throuth each position in the array
    for (let i = 0; i < arr.length; i++) {
        var min = i; // assume current position has minimum value
        // look through remaining unsorted portion to find actual min
        for (let j = i + 1; j < arr.length; j++){
            //select smallest value bu updating minimum index
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // place min value infront of the sorted end of the array
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }
    return arr;
};

// testing
//const testArray2 = [64, 34, 25, 12, 22, 11, 90];
//console.log("s Original array:", testArray2);
//const selectionSorted = selectionSort([...testArray2]);
//console.log("s Sorted array: ", selectionSorted);

// INSERTION SORT
// sort array in ascending order
// takes each element and inserts into correct position
const insertionSort = (arr) => {
    // start from 2nd element
    for (let i = 0; i < arr.length; i++){
        const cursor = arr[i];
        var pos = i;

        // move cursor back until we find the correct position
        // keep shifting larger elements to the right
        while (pos > 0 && arr[pos - 1] > cursor){
            arr[pos] = arr[pos - 1];
            pos = pos - 1;
        }
        arr[pos] = cursor;
    }
    return arr;
}

//const testArray3 = [64, 34, 25, 12, 22, 11, 90];
//console.log("i Original array:", testArray3);
//const insertionSorted = insertionSort([...testArray3]);
//console.log("i Sorted array: ", insertionSorted);

// TIMING EXPERIMENT

//generate random numbers for testing
// random int between 0 and 9999
const sample = () => Math.floor(Math.random() * 10000);

// number of times to run each test
const sampleSize = 100;

const timeit = (sampleSize, testFunc) => {
    var total = 0;

    // run the test function sampleSize
    for (let i = 0; i < sampleSize; i++){
        // create fresh random array
        const array = Array.from({length: 1000}, (_) => sample);
        const start = performance.now();
        testFunc(array);
        const end = performance.now();
        // calculate duration
        const duration = (end - start)/ 1000;
        total += duration;
    }
    return total;
};

// test each sorting function
//BUBBLE
const bubbleTimeit = timeit(sampleSize, bubbleSort);
console.log(`bubble sort run ${sampleSize} time in: ${bubbleTimeit} seconds\n`);
//SELECTION
const selectionTimeit = timeit(sampleSize, selectionSort);
console.log(`selection sort run ${sampleSize} time in: ${selectionTimeit} seconds\n`);
//INSERTION
const insertionTimeit = timeit(sampleSize, insertionSort);
console.log(`insertion sort run ${sampleSize} time in: ${insertionTimeit} seconds\n`);
//CONSOLE RESULTS
//bubble sort run 100 time in: 0.03037219999999997 seconds
//selection sort run 100 time in: 14.468651400000002 seconds
//insertion sort run 100 time in: 0.030838399999993275 seconds

