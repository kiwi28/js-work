var row = 8;
var str = '';

for (var j = 0; j < row; j++) {
    if (j % 2 === 0) {
        str += '#';
    } else {
        str += '  '; //cu 2 spatii in loc de unul arata mai bine in consola
    }
}

var strSplit = str.split("");
var arrRev = strSplit.reverse();
var strJoin = arrRev.join("");

for (var i = 0; i < row; i++) {
    if(i % 2 === 0){
        console.log(str);
    } else {
        console.log(strJoin);
    }
}
