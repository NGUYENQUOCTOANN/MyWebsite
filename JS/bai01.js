function daoNguocChuoi(chuoi) {
    return chuoi.split('').reverse().join('');
}

let chuoi_dau_vao = "hello";
let kq = daoNguocChuoi(chuoi_dau_vao);
console.log(`Kết quả %s`, kq);