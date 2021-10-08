const numbersSum = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let count = 0;
    for (let index = 0; index < param.length; index++) {
        count = count + param[index];
    }
    return count
}

console.log(sumAll(numbersSum));