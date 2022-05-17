let nhapMang = prompt("Nhap mang ky tu co -");
let arr = nhapMang.split("");
console.log(arr);

for(i = 0; i < arr.length; i++){
    if(arr[i] === "-"){
        arr[i] = "_";
    }
}
console.log(arr.join(""))