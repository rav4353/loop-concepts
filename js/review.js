var n = 456;
let temp = n;
let p = 0;

while (n > 0) {
    let rem = n % 10;
    p = (p) + (rem*rem*rem);
    n = Math.floor(n/10);
}

if (temp == p) {
    console.log("amstrong no");
}
else{
    console.log("not an amstrong no");
}

const no =6;
const factorial = 1;
for(i=1; i<=no; i++){
    factorial=factorial*i;

}
