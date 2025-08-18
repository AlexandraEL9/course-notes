// hash table implementation

class HashTable{
    constructor(size){
        // stores the size of the hash table
        // oftena method like:
        // this.data = new Array(size) - where values are stored
        this.size = size; // just generate hash
    }
    // calculate value of hash
    calculateHash(value) {
        let hash = 0; // initialize hash value to 0
        value = value.toString(); // convert value to string
        if(typeof value === 'string' || value instanceof String) {
            for (let i = 0; i <value.length; i++) {
                hash = (hash + value.charCodeAt(i) * i) % this.size;
            } 
        }  else {
            hash = value % this.size;
        } 
        return hash; 
    }
}

// hash table usage examples
