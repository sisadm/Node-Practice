let arr1 = [357, 337, 344, 402, 376, 398, 304, 368, 656, 382, 310, 354, 387, 391, 366, 376, 316, 349, 392, 386];
let arr1Correct = [357, 337, 344, 402, 376, 398, 304, 368, 356, 382, 310, 354, 387, 391, 366, 376, 316, 349, 392, 386];


// console.log(arr1);

// let arr2 = [325, 335, 310, 354, 318, 337, 328, 335, 337, 355, 318, 339, 347, 351, 335, 348, 325, 332, 354, 344];

arr1Correct.sort((a,b) => a-b);

console.log(arr1Correct);




function SumAndDivide(arr) {
    let arr1Sum = 0;
    for(let item of arr ) {
        arr1Sum = arr1Sum + Number(item);
    }
    console.log(arr1Sum);
    return arr1Sum /= arr.length;
};

//console.log(`no value variable : ${arr1Sum}`);

console.log(SumAndDivide(arr1Correct));
