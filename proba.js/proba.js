let arr1 = [357, 337, 344, 402, 376, 398, 304, 368, 656, 382, 310, 354, 387, 391, 366, 376, 316, 349, 392, 386];

arr1.sort(function(a, b) {return a-b});

console.log(arr1);

let arr2 = [325, 335, 310, 354, 318, 337, 328, 335, 337, 355, 318, 339, 347, 351, 335, 348, 325, 332, 354, 344];

arr2.sort((a,b) => a-b);

console.log( arr2);

let arr1Sum;
for (let i = 0; i<arr1.length; i++) {
    arr1Sum =+ arr1[i];
    if(i== arr1.length) {
        arr1Sum / i;
    }
};
console.log(arr1Sum)