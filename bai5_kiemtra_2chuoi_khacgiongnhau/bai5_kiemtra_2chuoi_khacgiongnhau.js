let arr = [1, 12, 14, 13, 15, 22, 34, 52, 53, 10];
let newArr =[];
let check = false;
document.write(`<br>${arr}`);
function nhapMang(){
    let num = +document.getElementById("num").value;
    newArr.push(num);
    console.log(newArr);
}

function kiemTra(){
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < newArr.length; j++){
            if(arr[i] === newArr[j]){
                check = true;
                break;
            }
        }
    }
    if(check === true){
        console.log("Mang moi nhap thuoc chuoi");
    }else{
        console.log("Mang moi nhap khong thuoc chuoi tren")
    }
}