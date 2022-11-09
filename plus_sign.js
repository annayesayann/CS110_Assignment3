let n = 4;
let currentLine = 1;
let string = "";
let i = 0;
while(currentLine <= n){
    while(i < n){
        string +='+';
        i++;
    }
    console.log(string);
    currentLine++;
}