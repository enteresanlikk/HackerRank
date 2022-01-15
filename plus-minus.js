const plusMinus = arr => {
    const numberCount = arr.length;

    const negativeCount = arr.filter(n => n < 0).length;
    const zeroCount = arr.filter(n => n == 0).length;
    const positiveCount = arr.filter(n => n > 0).length;

    console.log([
        (positiveCount/numberCount).toFixed(6),
        (negativeCount/numberCount).toFixed(6),
        (zeroCount/numberCount).toFixed(6)
    ].join('\n'))
}

plusMinus([1,1,0,-1,-1]);
plusMinus([-4, 3, -9, 0, 4, 1]);