const findLongestWord = (str) => {
  var arrOfStr = str.split(' ');
  //Create an array breaking up every space
  var longestStr = '';
  //temporary placeholder for longest string
  for(var i=0; i<arrOfStr.length; i++) {
    if(longestStr.length<arrOfStr[i].length) {
      longestStr = arrOfStr[i];
    }
  }
  //iterate through the array and cpmpare longest string with current string
  str = longestStr;
  return str;
}

console.log(findLongestWord("This is longest word "));