function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }

    for(const input of name){
        if(!isNaN(input) && input !== ' ') {
            return true;
        }
    }

    return false;
}

// const digitsCheck = checkDigitsInName(['!@#']);

// console.log(digitsCheck);