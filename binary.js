let num = 20;
let binary = "";
let result = "";
while(num > 0){
    binary += num%2;
    num = Math.floor(num/2);
}
let index = binary.length - 1;
while(index >= 0){
    result += binary[index];
    index--;
}
console.log(result);