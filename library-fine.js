const libraryFine = (d1, m1, y1, d2, m2, y2) => {
    const returnDate = new Date(`${y1}/${m1}/${d1}`);
    const dueDate = new Date(`${y2}/${m2}/${d2}`);

    const maxYear = new Date('3000/12/31');

    if(isNaN(returnDate.getTime()) || returnDate.getTime() > maxYear.getTime()) {
        throw new Error('return date invalid.');
    }

    if(isNaN(dueDate.getTime()) || dueDate.getTime() > maxYear.getTime()) {
        throw new Error('due date invalid.');
    }

    let price = 0;
    if (y1 == y2) {
        if(m1 == m2) {
            if(d1 > d2) {
                price = 15 * (d1 - d2);
            }
        } else if(m1 > m2) {
            price = 500 * (m1 - m2);
        }
    } else if(y1 > y2) {
        price = Math.pow(10, 4) * (y1 - y2);
    }

    return price;
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));
console.log(libraryFine(14,7,2018,5,7,2018));
console.log(libraryFine(28,2,2015,15,4,2015));