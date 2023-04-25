function checkSNT(n) {
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
const array = [7, 1, 4, 5, 6, 2, 3];
const result = array.sort().filter((item) => checkSNT(item));
console.log(result);
