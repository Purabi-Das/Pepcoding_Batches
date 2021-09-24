let arr = [1,2, 3, 4, 5];

// defination
function smaller(x) {
    return x * x;
}

function cuber(x) {
    return x * x * x;
}

// function can passed as an argument
// implementation map js -> pre-existing-array map
// it will apply the cv function to all the elements of an array and return the newArr

function bigger(arr, cb) {
    let newArr= [];
    for(let i = 0; i < arr.length; i++) {
        let sqVal = cb(arr[i]);
        newArr.push(sqVal);
    }
    return newArr;
}

let sqArr = bigger(arr, smaller);
console.log(sqArr);

function bigger(arr, cb) {
    let newArr= [];
    for(let i = 0; i < arr.length; i++) {
        let qbVal = cb(arr[i]);
        newArr.push(qbVal);
    }
    return newArr;
}

let qbArr = bigger(arr, cuber);
console.log(qbArr);

