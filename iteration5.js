const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let count = 0;
    for (let index = 0; index < param.length; index++) {
        if (typeof param[index] === 'string') {
            count += param[index].length
        } else {
            count += param[index]
        }
    }
    return count
}

console.log(averageWord(mixedElements));