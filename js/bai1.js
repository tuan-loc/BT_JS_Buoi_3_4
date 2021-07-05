var a = 3;
var b = 5;
var c = 4;

if (a>b && a>c){
    if (b>c) {
        console.log('Thứ tự 3 số là:', a, b, c)
    }
    else{
        console.log('Thứ tự 3 số là:', a, c, b)
    }
}
else if ( b>a && b>c){
    if (a>c){
        console.log('Thứ tự 3 số là:', b, a, c)
    }
    else{
        console.log('Thứ tự 3 số là:', b, c, a)
    }
}
else{
    if (a>b) {
        console.log('Thứ tự 3 số là:', c, a, b)
    }
    else{
        console.log('Thứ tự 3 số là:', c, b, a)
    }
}