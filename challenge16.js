function sortArr(arr) {
    return arr.sort((a, b) =>  a - b)
}

function findMedian(arr) {
    // Write your code here
    const orderArray = sortArr(arr);

    const middle =  ((orderArray.length - 1) / 2).toFixed(0);

    return arr[middle];
}

console.log(findMedian([0, 1, 2, 4, 6, 5, 3]))
