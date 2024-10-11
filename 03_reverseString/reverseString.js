const reverseString = function(string) {
    const arr = Array.from(string);
    //console.log(arr);
    let revarr = [];
    for(let i =arr.length-1; i>=0; i--){
        revarr.push(arr[i]);
    }
    return revarr.join("");
    
        
        
    }
    


reverseString("vishal");




// Do not edit below this line
module.exports = reverseString;
