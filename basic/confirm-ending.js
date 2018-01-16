const confirmEnding = (string, target) => {
  const start = string.length - (target.length);
  if(string.substr(start, string.length) == target) {
    return true;
  } else {
    return false;
  }
  return string;
}

console.log(confirmEnding("Javascript", "t"));