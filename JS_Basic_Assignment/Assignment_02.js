/* Sum of Numbers (Loop) 
• Write a func on that takes an integer n and returns the sum of all 
numbers from 1 to n. Use a loop to solve this. 
 Example: sum(5) should return 15. */
 let n = 5;
 let sum = 0;
for(let i=1;i<=5;i++)
    sum+=i;
console.log("Sum is: "+sum);
/* Object Proper es 
• Create an object represen ng a book with proper es: tle, author, and 
year. Write a func on that takes this object and prints each property in 
the format: "Title: [ tle], Author: [author], Year: [year]". */
console.log("\n");
function printbook(book){
    console.log("Titile: "+ book.title + " Author: "+book.title+ " Year: "+ book.title);
 }
 const books = [
     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
     { title: "1984", author: "George Orwell", year: 1949 },
     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
   ];
 
 books.forEach(printbook);

/* Array Reversal 
• Write a func on that takes an array of numbers and returns a new array 
with the elements in reverse order. Use a loop to accomplish this. 
• Example: reverseArray([1, 2, 3]) should return [3, 2, 1]. */
console.log("\n");
function ReverseArray(ar, n){
    for(let i = n; i>=0; i--)
      console.log(ar[i]);
}

let arr = [1,2,3,4,5];
ReverseArray(arr,arr.length);

/* Count Occurrences (1D Array) 
• Create a func on that takes an array of strings and returns an object 
where each key is a string and its value is the count of occurrences in the 
array. 
• Example: countOccurrences(['apple', 'banana', 'apple']) should return      
{ apple: 2, banana: 1 }.  */

function countOccurrences(arr){
    let occurrences = {};
    for(let item of arr){
        occurrences[item] = (occurrences[item] || 0 )  +1;
    }
    return occurrences;
}

function print(obj){
    for(let key in obj){
        console.log(key+": "+obj[key]);
    }
}

let fruits = ["apple","banana","apple","lichu","banana","lichu","lichu"];
print(countOccurrences(fruits));
/* Mul plica on Table (2D Array) 
• Write a func on that generates a mulplica on table (as a 2D array) for a 
given number n up to n × n. Return the 2D array. 
• Example: mul plica onTable(3) should return [[1, 2, 3], [2, 4, 6], [3, 6, 
9]]. */

function multiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= n; i++) {
      let row = [];
      for (let j = 1; j <= n; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
    return table;
  }
  
  function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i].join(" "));
    }
  }
  
  let x = 4;
  printArray(multiplicationTable(x));
  
/* Average of Array (1D) 
• Create a func on that takes an array of numbers and returns the 
average. Use a loop to calculate the sum and then compute the average. 
• Example: average([1, 2, 3, 4, 5]) should return 3. */

function avg_ar(arr,n){
  let sum = 0;
   for(let i = 0; i<n ; i++){
     sum+=arr[i];
   }
   return sum/n;
}
let m = [2,3,4,10,6];
let xy = avg_ar(m,m.length);

console.log("Average value: "+xy);
/* Flatten an a 2D Array 
• Write a function on that takes a 2D array and flattens it into a 1D array. Use 
loops to achieve this. 
• Example: flatten([[1, 2], [3, 4]]) should return [1, 2, 3, 4]  */

function flatten(arr){
        let result= [];
        for(let i=0;i<arr.length;i++){
          for(let j=0;j<arr[i].length;j++){
            result.push(arr[i][j]);
          }
        }
        return result;
}


let array = [[1, 2], [3, 4], [4, 5]];

let flatten_array = flatten(array);
console.log("Flatten Array: "+ flatten_array); 


