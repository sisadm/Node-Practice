// let arr1 = [357, 337, 344, 402, 376, 398, 304, 368, 656, 382, 310, 354, 387, 391, 366, 376, 316, 349, 392, 386, 222];


 let arr1 = [1, 2, 3, 4, 5];


// let arr1Correct = [357, 337, 344, 402, 376, 398, 304, 368, 356, 382, 310, 354, 387, 391, 366, 376, 316, 349, 392, 386];


// console.log(arr1);

// let arr2 = [325, 335, 310, 354, 318, 337, 328, 335, 337, 355, 318, 339, 347, 351, 335, 348, 325, 332, 354, 344];







function SumAndDivide(arr) {

    // log out the random array
    console.log(`Our array is:\n[${arr}]`);

    // sort from smallest to largest and log it 
    arr.sort((a,b) => a-b);
    SetTime('Sorting array from smallest to largest', arr, 1000);
    

    // using for loop summarizing the numbers from array to a variable and divide the length of array to get median 
    let arr1Sum = 0;
    let arr1Median;
    let arrQ1;
    
    //console.log(`no value variable : ${arr1Sum}`);
    for(let item of arr ) {
        arr1Sum = arr1Sum + Number(item);
    }
    SetTime('Summarize the array numbers', arr1Sum, 2000);


//    setTimeout ( ()=> console.log(`Summarize the array numbers: ${arr1Sum}`), 1700);
    arr1Median = (arr) => {
        if(arr.length % 2 === 0) { // when array lenght is even
            return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2;
        } 
        else {
            return (arr[(arr.length - 1) / 2]);
        };
    };

    SetTime('Median for the array', arr1Median(arr1), 3000);
};

// lower Quarter 





// call SumAndDivide function and pass arr1 
SumAndDivide(arr1);



// setTimout function to console.log out the result

function SetTime(sentence, value, time) {
    setTimeout(
        ()=> console.log(`\n${sentence}:\n${value}`), time
    );
}