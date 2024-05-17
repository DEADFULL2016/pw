function Pangrama(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowercaseStr = str.toLowerCase();

    for (let char of alphabet) {
        if (lowercaseStr.indexOf(char) === -1) {
            return false;
        }
    }

    return true;
}
console.log(Pangrama('w'))