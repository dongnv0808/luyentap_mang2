let arr = ['c', 's', 'c', '2', '6', '1'];

let first = 0;
let last = arr.length-1;
while(first < last){
    let convert = arr[first];
    arr[first] = arr[last];
    arr[last] = convert;
    first++;
    last--;
}
console.log(arr.join(""));