const staircase = n => {
    for(let i=1; i<=n; i++) {
        let str = '';
        for(let j=n-i; j>0; j--) {
            str += ' ';
        }
        for(let j=0; j<i; j++) {
            str += '#';
        }
        console.log(str);
    }
}

staircase(6)