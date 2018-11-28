function countLetters(str){
    
    //split, join and convert the string to lower case
    str = str.split(' ').join('').toLowerCase();

    //intitialize an empty onject
    let object = {};

    //loop over the string to make arrays
    for(let i = 0; i < str.length; i++){
        var current = str[i];
        if(!object[current]){
            object[current] = [];
        }
        object[current].push(i);
    }

    // loop to join
    // for(var i = 0; i < object[current].length; i++)
    for(var key in object){
        // console.log(object[key].join(' :) '))
        object[key] = object[key].join(', ');
    }
    
    return object;
}
console.log(countLetters("Lighthouse in the house"));