function vogais (Str){
 const vowels ='aeiouAEIOU';
 const chars = Str.split('');
 let count = 0

 chars.forEach(char => {
    if (vowels.includes(char)) {
        count++;
    }
 });
}
console.log(vogais('hello'))