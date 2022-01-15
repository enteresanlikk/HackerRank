const weekdayText = weekdays => {
    if(typeof weekdays != 'object') {
        throw new Error('weekdays must be array');
    }
    return index => {
        if(index < 0 || index > weekdays.length - 1) {
            throw new Error('Invalid weekday number');
        }
        return weekdays[index];
    }
}

const getText = weekdayText('Mon Tue Wed Thu Fri Sat Sun');

console.log(getText(5));

