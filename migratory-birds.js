function migratoryBirds(arr) {
    let values = arr.reduce((acc, a) => {
        let index = acc.findIndex(x => x.index == a);
        if(index === -1) {
            acc.push({
                index: a,
                count: 1
            });
        } else {
            acc[index].count++;
        }
        return acc;
    }, []);

    values = values.sort((a, b) => {
        return a.count > b.count ? -1 : 0;
    })

    let max = values[0].count;
    let maxValues = values.filter(v => v.count == max);

    maxValues = maxValues.sort((a, b) => {
        return a.index < b.index ? -1 : 0;
    })

    return maxValues[0].index;
}

console.log(migratoryBirds('1 2 3 4 5 4 3 2 1 3 4'.split(' ')));