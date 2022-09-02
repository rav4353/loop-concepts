// Print N numbers in sequence

var input = 1;
while (input <= 10) {
 console.log(input);
 input++;
}



// Print reverse of a number

let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);



// Print first N even numbers

var i,n=10;

for(i=1;i<=n;i++)
{
  console.log(2*i);
}



// Print N odd numbers

var n = 20;

for(var i = 1; i <= n; i = i + 2)
{
    console.log(i);
}



// Check number is Armstrong or not


var n = 153;
let temp = n;
let p = 0;

while (n > 0) {
 
    let rem = n % 10;
    p = (p) + (rem * rem * rem);
    n = Math.floor(n / 10);
}
 
if (temp == p) {
    console.log("Yes. It is Armstrong No.");
}
else {
    console.log("No. It is not an Armstrong No.");
}


// Factorial

const number = 14;
const factorial = number => {
   let res = 1;
   for(let i = number; i > 1; i--){
      res *= i;
   };
   return res;
};
console.log(factorial(number));



// Prime or Not

var numbers = 7;
var i = 1;
var count = 0;

for(i=1; i<=numbers; i++)
{
 if(numbers % i == 0)
  count++;
}

if(count == 2)
 console.log(numbers +" is a prime number");
else
 console.log(numbers +" is not a prime number");



// Average

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(average);



// Prime number within range

function prime(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(prime(10));


// Print Fibonacci series


var fibon=6, firstNum = 0, secondNum = 1;

var next;

for ( var i = 0; i < fibon; i++)
{

console.log(firstNum);

sum = firstNum + secondNum;

firstNum = secondNum;

secondNum = sum;

}



// Factorial

function factorialize(factNum) {
  var result = factNum;
  if (factNum === 0 || factNum === 1) 
    return 1; 
  while (factNum > 1) { 
    factNum--;
    result *= factNum;
  }
  return console.log(result);
}
factorialize(5);