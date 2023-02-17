function isAPalindrome(str: string): boolean {
    str = str.toLowerCase().replace(/[\W_]/g, ''); // regex menghilangkan karakter non-alphanumeric dan underscore
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Contoh penggunaan
  console.log(isAPalindrome('Radar')); // true
  console.log(isAPalindrome('kasur rusak')); // true
  console.log(isAPalindrome('Hello, world!')); // false
  