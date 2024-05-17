function calcularMMC(a, b) {
    return (a * b) / calcularMDC(a, b);
}

function calcularMDC(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMDC(b, a % b);
    }
}

console.log(calcularMMC(2,5))