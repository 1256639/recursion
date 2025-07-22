function fibs(number) {
    const result = [];
    for (let i = 0; i < number; i++) {
        if (i === 0) {
            result.push(0);
        } else if (i === 1) {
            result.push(1);
        } else {
            result.push(result[i - 2] + result[i - 1]);
        }
    }
    return result;
}

function fibsRec(number) {
    console.log("This was printed recursively");
    
    if (number <= 0) {
        return [];
    }
    if (number === 1) {
        return [0];
    }
    if (number === 2) {
        return [0, 1];
    }

    const seq = fibsRec(number - 1);
    return [...seq, seq[seq.length - 1] + seq[seq.length - 2]];
}

console.log(fibs(8));
console.log(fibsRec(8));
