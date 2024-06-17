function kiemTraChanLe(so){
    if(so % 2 === 0){
        return "Even";
    } else{
        return "Odd";
    }
}
let soCanKiemTra = 3;
let kq = kiemTraChanLe(soCanKiemTra);
console.log(`Kết quả là:%s`, kq);