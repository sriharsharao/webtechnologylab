

function rangeBetween(a, b) {
    var arr = new Array();
    for (var i = 0; a <= b; i++)
        arr[i] = a++;
    return arr;
}
var a = rangeBetween(-4, 7);
console.log(a);

function move(a, first, second) {
    var temp;
    temp = a[first];
    a[first] = a[second];
    a[second] = temp;
    return a;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));