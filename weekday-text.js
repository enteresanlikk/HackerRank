const weekdayText = weekdays => {
    return index => {
        if(index < 0 || index > weekdays.length - 1) {
            throw new Error('Invalid weekday number');
        }
        return weekdays[index];
    }
}

const getText = weekdayText('Mon Tue Wed Thu Fri Sat Sun'.split(' '));

console.log(getText(5));

