function rangeBetween(a, b) {
    var arr = new Array();
    for (var i = 0; a <= b; i++)
        arr[i] = a++;
    return arr;
}
var a = rangeBetween(-4, 7);
console.log(a);

function move(a, first, second) {
    if (first < 0)
        first += a.length;
    if (second < 0)
        second += a.length;
    var temp;
    temp = a[first];
    a[first] = a[second];
    a[second] = temp;
    return a;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));

function frequency(arr) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j])
                m++;
            if (mf < m) {
                mf = m;
                item = arr[i];
            }
        }
        m = 0;
    }
    console.log(item + " ( " + mf + "times)");
}
frequency([10,10,10,10,11]);
