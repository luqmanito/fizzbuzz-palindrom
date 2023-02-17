function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, ''); // menghilangkan karakter non-alphanumeric dan underscore
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
// Contoh penggunaan
console.log(isPalindrome('Radar')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('Hello, world!')); // false
