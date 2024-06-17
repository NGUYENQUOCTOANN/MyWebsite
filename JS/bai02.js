function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        let a = 0;
        let b = 1;
        for (let i = 2; i <= n; i++) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}
let n = 5;
let kq = fibonacci(n);
console.log(`Kết quả:%s`, kq);