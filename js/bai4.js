var a = 3;
var b = 4;
var c = 5;

if (a==b && a !=c){
    console.log('Tam giác cân')
}
else if (a==b && a ==c){
    console.log('Tam giác đều')
}
else if (a*a + b*b == c*c){
    console.log('Tam giac vuông')
}
else{
    console.log('Tam giác không vuông, không cân, không đều')
}