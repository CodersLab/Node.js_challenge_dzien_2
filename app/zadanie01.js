function existInArray(array, elementToCheck){
    for (let q = 0; q < array.length; q++) {
        if (q>=1){
            if (q<=5){
                return q;
            }
        }
    }
}
const JohnAge = 25;
const AliceAge = (30);
const BobAge = (17);
var AgeSum = JohnAge + AliceAge;
var ageModulo = AliceAge % JohnAge;
var AgeDevide = AliceAge / BobAge;

console.log("Age sum: " + AgeSum )
console.log("age modulo: " + ageModulo)
console.log("age devide: "+ AgeDevide)

var n = 20;
var temp1;
var temp2;
var l=0;
for (let m = 0; m <= n;) {
    for (l = 0; l < 2; l++){
    if (m % 2 == 0) {
        temp1=m;
        m++;
    } else {
        temp2 = m;
        m++;
    }
    console.log(temp1 +" is Even   "+temp2+" is Odd")
}
    l=0;
}
var n=20;
var numbers=[];

for (let m =0;m<n;){
    numbers.push(m);
    m++
}
console.log(numbers);


