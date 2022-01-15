const diagonalDifference = arr => {
    let left = 0;
    let right = 0;
    for(let i=0; i < arr.length; i++) {
        for(let j=0; j < arr[i].length; j++) {
            if(i == j) {
                left += arr[i][j];
            }

            if(i+j == arr.length - 1) {
                right += arr[i][j];
            }
        }
    }
    return Math.abs(left - right);
}

console.log(diagonalDifference([
    [1,2,3],
    [4,5,6],
    [9,8,9]
]));