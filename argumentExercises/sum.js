function sum() {
    let sumNum = 0;
    for ( i = 0; i < arguments.length; i++); {
        sumNum += arguments[i];
    }

    return sumNum
}


function sum1(num1, ...othernums) {
    let total = num1
    othernums.forEach(function(ele) {
        total += ele;
    });
    return total;
}


