const breakingRecords = scores => {
    let minimum = +scores[0];
    let maximum = +scores[0];
    let minCount = 0;
    let maxCount = 0;
    for(let i=0; i<scores.length; i++) {
        let score = +scores[i];

        if(score < minimum && i != 0) {
            minimum = score;
            minCount++;
        }

        if(score > maximum && i != 0) {
            maximum = score;
            maxCount++;
        }
    }

    return [maxCount, minCount];
}

console.log(breakingRecords('12 24 10 24'.split(' ')));
console.log(breakingRecords('10 5 20 20 4 5 2 25 1'.split(' ')));
console.log(breakingRecords('3 4 21 36 10 28 35 5 24 42'.split(' ')));