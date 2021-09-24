let arr= [1, 
    true, 
    1.1,
    "string",
    null,
    [1, 2, 3, 4, 5],
    function fn() {
        console.log("Hello i am a function inside an array0")
    }];
    
    console.log("extract 3 from array 2array", arr[arr.length-1][3]);
    
    function fn() {
        console.log("I am a function0");
        return 10;
    }
    
    console.log("function0", fn);
    let rVal = fn();
    console.log("rVal", rVal);