function palimdromo (Str){
const reverseStr = Str.split('').reverse().join('');
return Str==reverseStr
if (Str==reverseStr) {
    console.log('é um nome palimdromo')
}
else {
    console.log('nao é')
}

}
console.log(palimdromo('sixaxis'))