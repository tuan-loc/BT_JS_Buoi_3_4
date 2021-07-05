var num1 = 4;
var num2 = 7;
var num3 = 9;

if (num1%2==0){
    if (num2%2==0 && num3%2==0){
        console.log('Có 3 số chẵn')
    }
    else if (num2%2==0 && num3%2!=0) {
        console.log('Có 2 số chẵn và 1 số lẻ')
    }
    else if (num2%2!=0 && num3%2==0){
        console.log('Có 2 số chẵn và 1 số lẻ')
    }
    else if (num2%2!=0 && num3%2!=0){
        console.log('Có 1 số chẵn và 2 số lẻ')
    }
}
else if(num2%2==0){
    if (num1%2==0 && num3%2==0){
        console.log('Có 3 số chẵn')
    }
    else if (num1%2==0 && num3%2!=0) {
        console.log('Có 2 số chẵn và 1 số lẻ')
    }
    else if (num1%2!=0 && num3%2==0){
        console.log('Có 2 số chẵn và 1 số lẻ')
    }
    else if (num2%2!=0 && num3%2!=0){
        console.log('Có 1 số chẵn và 2 số lẻ')
    }
}
else if(num3%2==0){
    if (num2%2==0 && num1%2==0){
        console.log('Có 3 số chẵn')
    }
    else if (num2%2==0 && num1%2!=0) {
        console.log('Có 2 số chẵn và 1 số lẻ')
    }
    else if (num2%2!=0 && num1%2==0){
        console.log('Có 2 số chẵn và 1 số lẻ')
    }
    else if (num2%2!=0 && num1%2!=0){
        console.log('Có 1 số chẵn và 2 số lẻ')
    }
}
else{
    console.log('Có 3 số lẻ')
}