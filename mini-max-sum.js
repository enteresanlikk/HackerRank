const sum = arr => {
    return arr.reduce((acc, n) => acc + n, 0);
}

const miniMaxSum = arr => {
    arr = arr.sort();
    const min = sum(arr.slice(0, arr.length - 1));
    const max = sum(arr.slice(1, arr.length));

    console.log(`${min} ${max}`);
}

miniMaxSum([1,2,3,4,5])