function contarLetrasEmString(string) {
    let count = 0;

    for (let caracter of string) {
        if (caracter.match(/[a-zA-Z]/)) {
            count++;
        }
    }

    return count;
}

console.log(contarLetrasEmString('oi'));