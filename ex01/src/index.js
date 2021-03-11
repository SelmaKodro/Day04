function main(numOne, numTWo){
    var quotient;
    if(numTWo === 0){
    quotient = 'Divide by 0! Cannot divide by zero'
    } else {

        quotient = numOne/numTWo;
    }
    return quotient;
}
console.log(main(15,3));
console.log(main(25,5));
console.log(main(420,10));
console.log(main(55,0));
module.exports.main