// // Print N numbers in sequence

// var input = 1;
// while (input <= 10) {
//  console.log(input);
//  input++;
// }



// // Print reverse of a number

let rev = 0;
let num = 123;
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


var n = 456;
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

const number = 6;
const factorial = number => {
   let res = 1;
   for(let i = number; i > 1; i--){
      res *= i; //res = res * i;
   };
   return res;
};
console.log(factorial(number));



// Prime or Not

var numbers = 12;
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






// Factorial

var i, no, fact;
fact = 1;
no = 6;
for(i = 1; i <= no; i++) {
  fact = fact * i;
}
console.log("Factorial: " + fact);



// Reverse a number

var revno  = 12345;
var reverse = 0;

while(revno != 0) {
  reverse = (reverse*10) + (revno % 10);
  revno = parseInt(revno/10);
}

console.log(reverse);



// Sum of digits

var sumNumber = 12345;
var sum = 0;

while(sumNumber != 0) {
  sum = sum + sumNumber % 10;
  sumNumber = parseInt(sumNumber/10);
}

console.log(sum);


//prime number with range

for (var counter = 0; counter <= 15; counter++) {

  var notPrime = false;
  for (var i = 2; i <= counter; i++) {
      if (counter%i===0 && i!==counter) {
          notPrime = true;
      }
  }
  if (notPrime === false) {
              console.log(counter);
  }
}

// Fibonacci series

var a = 0, b = 1;
console.log(a)
console.log(b)
for (var i = 0; i<=5; i++) {
  var tempo = a + b;
  console.log(tempo);
  a = b;
  b = tempo;
}


//456

var sumnum = 456;
var sum = 0;

while(sumnum != 0){
  sum += sumnum % 10;
  sumnum = parseInt(sumnum/10);
}

console.log(sum);

//
