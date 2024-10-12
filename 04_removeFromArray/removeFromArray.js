const removeFromArray = function(array, ...items) {
    let newArr = array;
    for(let i = array.length-1; i>=0; i--){
        if(items.includes(array[i]))
            newArr = newArr.toSpliced(i,1);
    }
            
                
    
   return newArr;
};

removeFromArray([1,2,3],3,2);

// Do not edit below this line
module.exports = removeFromArray;
