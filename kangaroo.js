function kangaroo(x1, v1, x2, v2) {
    let max = [x1, v1, x2, v2].filter(n => n != 0).reduce((acc, n) => acc + n, 0);

    let kangaroo1Jump = 1;
    let kangaroo1 = x1;
    let kangaroo2Jump = 1;
    let kangaroo2 = x2;

    while(kangaroo1Jump == kangaroo2Jump && kangaroo1 != kangaroo2 && (max >= kangaroo1Jump || max >= kangaroo2Jump)) {
        kangaroo1 += v1;
        kangaroo1Jump++;

        kangaroo2 += v2;
        kangaroo2Jump++;
    }

    return kangaroo1 == kangaroo2 ? 'YES' : 'NO';
}

console.log(kangaroo(0,3,4,2));
console.log(kangaroo(0,2,5,3));