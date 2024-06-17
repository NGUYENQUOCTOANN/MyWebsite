function kiemTraNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let soCanKiemTra = 7;
let kq = kiemTraNguyenTo(soCanKiemTra);
console.log(`Kết quả: %s`, kq);
