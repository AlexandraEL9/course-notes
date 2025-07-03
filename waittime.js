//FUNCTION minimumTotalWaitingTime(durations):
    //1. SORT durations in ascending order
      // → This ensures shorter sessions go first
    
   // 2. INITIALIZE totalWaitingTime = 0
    //3. INITIALIZE currentWait = 0

    //4. FOR each patient starting from the second one (index 1) TO end:
        //a. ADD the duration of the previous patient to currentWait
        //b. ADD currentWait to totalWaitingTime

    5. //RETURN totalWaitingTime

    //our HTMLOptGroupElement// 
let durations = [3, 2, 1, 2, 6]; // doesn't work!
let durations = [5, 1, 4];
function totalWaitTime(durations){
    let totalTime = 0;
    let firstTime = durations[0];
    let lastTime = durations[durations.length - 1];
    
    for(let i = 0; i < durations.length; i++) {
        totalTime += durations[i];
    }
    totalTime = totalTime + firstTime - lastTime;
    return totalTime;
}
console.log(totalWaitTime(durations));

// boon 
//thinking - 3
// 0 + (1) + (1+2) + (1+2+2) + (1+2+2+3) = 17 
// what need to do ^^
function waitingTimes(arr) {
    arr.sort(); // 1,2,2,3,6
    arr.pop();  // 1,2,2,3
    let patientWaitingTimes = []
    let totalWaitingTimes = 0 
    for (let i = 0; i < arr.length; i++) {
        patientWaitingTimes.push(arr[i])
        for (let i = 0; i < patientWaitingTimes.length; i++ ) {
        totalWaitingTimes += patientWaitingTimes[i];
        }
    } 
    return totalWaitingTimes
 
}

queries = [5, 1, 4] // 1, 4 ,5  
console.log(waitingTimes(queries))
//patient 1 = 0
// thinking - 1 
// p1 = 0 mins
// p2 = 3 mins
// p3 = 5 mins
// p4 = 6 mins
// p5 = 8 mins
// p6 = 14 mins
// thinking - 2
// 0 + (3) + (3+2) + (3+2+1) + (3+2+1+2) = 22

//Abbie's group
let finalTime = 0;

function waitingTime (array) {

 if (array[1] === undefined){
            return 0;
        };

    for (let i=0; i < array.length - 1; i++){
        finalTime = (finalTime + array[i]) + finalTime;
    }
    return finalTime;
};

console.log(waitingTime([3, 2, 1, 2, 6]));