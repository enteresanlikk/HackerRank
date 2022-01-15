const timeConversion = s => {
    const splittedData = s.split(':');
    let hours = +splittedData[0];
    const format = splittedData[2].indexOf('PM') !== -1 ? 'PM': 'AM';
    if(format == 'PM') {
        hours += 12;
    }
    splittedData[2] = splittedData[2].replace('PM', '').replace('AM', '');

    return `${hours}:${splittedData[1]}:${splittedData[2]}`;
}

console.log(timeConversion('12:01:00PM'));