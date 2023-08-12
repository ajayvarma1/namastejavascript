/**
 * using clouser i will achive curring functionality
 * 
 */

function sum(num1){
    return function(num2){
        // if(!num2) {
        //     return num1;
        // }
        // return sum(num1 + num2);

        return !num2 ? num1 : sum(num1 + num2);
    }
}

const totalSum = sum(1)(2)(3)(4)();

console.log(totalSum)