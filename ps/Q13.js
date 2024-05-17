function Armstrong(n) {
    const numString = n.toString();
    const numDigits = numString.length;
    let sum = 0;

    for (let digit of numString) {
        sum += Math.pow(parseInt(digit), numDigits);
    }

    return sum === n;
}
console.log(Armstrong(154))