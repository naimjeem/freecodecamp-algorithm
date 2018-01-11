const palindrome = (string) => {
 string = string.toLowerCase();

 for (i = 0; i < string.length; i++) {
   string.replace(' ', '');
   string.replace(',', '');
   string.replace('-', '');
   string.replace('_', '');
   string.replace('/', '');
   string.replace(')', '');
   string.replace('(', '');
 }
 
 const copyString = string.split('').reverse().join('');

 if(copyString == string) {
   return true;
 }
 return false;
};

console.log('-----------------------------');
console.log(palindrome('ye'));
console.log('-----------------------------');
