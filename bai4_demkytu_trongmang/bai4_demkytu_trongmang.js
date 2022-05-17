let kyTu = prompt("Nhap vao mot chuoi ky tu");
let count = 0;
for(i = 0; i < kyTu.length; i++){
    console.log(kyTu[i]);
    count += 1;
}
alert(`Chuoi cua ban nhap vao co ${count} ky tu`);