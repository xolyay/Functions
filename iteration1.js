function sum(numberOne, numberTwo) {
    let result;
    if (numberOne > numberTwo) {
        result = numberOne
    } else {
        result = numberTwo
    }
    return result
}

console.log(sum(10, 40));