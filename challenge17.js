function compareTriplets(a, b) {
    // Write your code here
    let aPoints = 0;
    let bPoints = 0;
    
    a.forEach((number, index) => {
        if (number > b[index]) {
            aPoints++;
        } else if (number < b[index]) {
            bPoints++;
        }
    })  
    
    return `${aPoints} ${bPoints}` 
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]))
