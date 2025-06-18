function handleOperation(value) {
    try {
        console.log(nonExistentVariable)
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.error("ReferenceError: A variable is not defined.");
        }
    }
}
handleOperation(1);
// Output: ReferenceError: A variable is not defined.
console.log("You passed the test!");
  