const numbersAverage = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    let average = sumAll(param) / param.length;
    return average
}

console.log(average(numbersAverage));