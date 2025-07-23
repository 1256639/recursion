function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge (left, right) {
    const result = [];
    let a = 0;
    let b = 0;

    //compare elements from left/right and push the smallest one
    while (a < left.length && b < right.length) {
        if (left[a] < right[b]) {
            result.push(left[a]);
            a++;
        } else {
            result.push(right[b]);
            b++;
        }
    }

    return result.concat(left.slice(a).concat(right.slice(b)));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));