// let n = prompt("Enter a number: ");
// (n%2==0) ? console.log("Even"):console.log("Odd");

let x = [1,2,3,4,5];

console.log("Before Push. List value is: "+x);
x.push(6);
x.push(7);
x.push(8);
console.log("After Push. List value is: "+x);
x.pop();
console.log("After pop, List value is: "+x);
x.shift();
console.log("After shift, List value is: "+x);
x.unshift(10,20,30);
console.log("After unshift , List value is: "+x);
console.log("Now we will learn slice & splice part.,,,,,,,,,,,,,,,,,,,,");

let y = x.slice(0,3);
console.log("After slice the list. List value is: "+y);

console.log("Array list: "+x);
x.splice(2,1,100);

console.log("After splice list: "+x);

console.log("------------------- Function part --------------------");

function add(){
    let x = 12;
    let y = 10;
    let sum = x+y;
    console.log(sum);
}
add();

function sub(x,y){
    let sub = x-y;
    return sub;
}

console.log(sub(12,10));

const multi = ()=>{
    let x = 10;
    let y = 12;
    let multi = x*y;
    console.log(multi);
}
multi();