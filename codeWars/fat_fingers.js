var fatFingers = function(str) {
  if (str === null) {
    return null;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      str = str.slice(0, i).concat(str.slice(i + 1).toUpperCase());
      i = 0;
    }
    if (str[i] === 'A') {
      str = str.slice(0, i).concat(str.slice(i + 1).toLowerCase());
      i = 0;
    }
  }
  if (str.length === 1 && str.toLowerCase() === 'a') {
    return '';
  }
  return str;
};

// console.log(fatFingers('The a quick brown fox jumps over the lazy dog.'));
console.log(fatFingers('aaAAaAaaAAAa'));
