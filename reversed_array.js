let original_array = [1, 2, 3];
let reversed_array = [];
for(let i = original_array.length - 1; i >=0; i--){
    reversed_array[reversed_array.length]= original_array[i];
}
console.log(reversed_array);