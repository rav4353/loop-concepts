
var n = 456;
let temps = n;
let z = 0;

while(n>0) {
    let rem = n % 10;
    z = (z) + (rem*rem*rem);
    n = Math.floor(n/10);
}

if (temps == z) {
    console.log("its an amstrong num");
}
else{
    console.log("its not an amstrong num");
}


//vowels

