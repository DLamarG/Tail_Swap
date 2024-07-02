function tailSwap(s) {
    let ss = s[0];
    let sss = s[1];
    let ssss = ss.split(':')[0];
    let sss$sss = ss.split(':')[1];
    let ssssSS = sss.split(':')[0];
    let SSS = sss.split(':')[1];
    return [`${ssss}:${SSS}`,`${ssssSS}:${sss$sss}`];
   }

console.log(tailSwap(['abc:123', 'cde:456']))
console.log(tailSwap(['a:12345', '777:xyz']))