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