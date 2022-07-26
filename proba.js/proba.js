// let arr1 = [357, 337, 344, 402, 376, 398, 304, 368, 656, 382, 310, 354, 387, 391, 366, 376, 316, 349, 392, 386, 222];


 let arr1 = [];


// let arr1Correct = [357, 337, 344, 402, 376, 398, 304, 368, 356, 382, 310, 354, 387, 391, 366, 376, 316, 349, 392, 386];


// console.log(arr1);

// let arr2 = [325, 335, 310, 354, 318, 337, 328, 335, 337, 355, 318, 339, 347, 351, 335, 348, 325, 332, 354, 344];

// random number generator 
function randomNumber(x) {
    return Math.floor(Math.random() * x) + 1;
}

// random number for an array long
function randomArrayLong(y) {
    return Math.floor(Math.random() * y ) + 1;
}

// for loop to push random numbers into an array
for(let i = 0; i < randomArrayLong(15); i++) {
    arr1.push(randomNumber(100));
};



function SumAndDivide(arr) {

    // log out the random array
    console.log(`Our array is:\n[${arr}]`);

    // sort from smallest to largest and log it 
     arr.sort((a,b) => a-b);
    //arr.sort((a,b) => console.log( a - b));
    SetTime('Sorting array from smallest to largest', arr, 1000);
    

    // variables
    let arr1Sum = 0;
    let arrMedian;
    let arrQ1;
    let arrQ3;
    let interquartile;
    
    // using for loop summarizing the numbers from array to a variable and divide the length of array to get median 
    for(let item of arr ) {
        arr1Sum = arr1Sum + Number(item);
    }
    SetTime('Summarize the array numbers', arr1Sum, 2000);


    // Median for array
    function Median(arr) {
        if(arr.length % 2 === 0) {
            arrMedian = (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
            return arrMedian;
        } else {
            arrMedian = (arr[(arr.length - 1) / 2]);
            return arrMedian; 
        }
    };

    Median(arr1);

    SetTime('Median for the array', arrMedian, 3000);

    // lower Quarter 
    function lowerQ (arr) {
        if((arr.length / 4) % 1 !== 0) {
            arrQ1 = (arr[ (Math.floor(arr.length / 4) + (Math.ceil(arr.length / 4 ) - 1 )  ) / 2]);
            return arrQ1;
        } 
        else {
            arrQ1 = arr[ (arr.length / 4) ];
            return arrQ1;
        }
    };
    // function call
    lowerQ(arr1);

    SetTime('Lower Quarter is:', arrQ1, 3500);

    // Upper Quarter
    function upperQ (arr) {
        if((arr.length / 4) % 1 !== 0) {
            arrQ3 = (arr[ (Math.floor((arr.length * 3 )/ 4) + (Math.ceil((arr.length  * 3) / 4 ) - 1 )   ) / 2]);
            return arrQ3;
        }
        else {
            arrQ3 = arr[ ( (arr.length * 3) / 4) ];
            return arrQ3;
        }
    };
    // function call
    upperQ(arr1);

    SetTime('Upper Quaerter is:', arrQ3, 3700);

    // interquartile  ( upper quarter - lower quarter)

    interquartile = arrQ3 - arrQ1;
    
    SetTime('Interquartile is', interquartile, 3900);
    
};







// call SumAndDivide function and pass arr1 
SumAndDivide(arr1);



// setTimout function to console.log out the result

function SetTime(sentence, value, time) {
    setTimeout(
        ()=> console.log(`\n${sentence}:\n${value}`), time
    );
}