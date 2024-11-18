
/*Q1: Create a function reverseWords that accepts a sentence (string) and returns a new 
sentence with each word reversed but still in its original position.  */

function reverseWords(str) {
    let words = str.split(' '); 
    let reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        let reversedWord = ''; 
        for (let j = words[i].length - 1; j >= 0; j--) {
            reversedWord += words[i][j]; 
        }
        reversedWords.push(reversedWord); 
    }

    return reversedWords.join(' '); 
}

let s = "Rakesh Chandra Barman";
let reversed = reverseWords(s);

console.log("Reversed words: " + reversed);
/* Q2: Write a function sumArray that takes an array of numbers and returns the sum of all 
elements. Use the forEach loop to achieve this*/
function sumArray(ar){
    let sum = 0;
    for(let key of ar)
        sum+=key;
    return sum;
}
let arr = [1,2,3,4,5];
console.log("SumArray is: "+sumArray(arr));
/*Q3: Using the map function, write a function squareAndSum that takes an array of numbers, 
squares each element, and then returns the total sum of the squares.*/

function squareAndSum(ar){
    let sum = 0;
    for(let i=0;i<ar.length;i++){
        ar[i]*=ar[i];
        sum+=ar[i];
    }
    return sum;
}

let array = [1,2,3,4]
let summation = squareAndSum(array);
console.log("Square Sum is: "+summation);
/* Q4: Create a function getTodayDate that returns today’s date in the format "YYYY-MM-DD" using 
JavaScript's Date object. */
function getTodayDate(){
    let today = new Date();
    let year = today.getFullYear();
    let month = (today.getMonth()+1);
    let day = today.getDate();

    return `${year}-${month}-${day}`;

}
let todayDate = getTodayDate();
console.log("Today's Date: "+todayDate);
/*Q5: Write a function filterPrimes that takes an array of numbers and returns only the prime 
numbers using the filter method.*/
function filterPrimes(numbers) {
    return numbers.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
}

// Example usage
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 3, 5, 7]
