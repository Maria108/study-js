function swap(str) {
  let first = str[0];
  let last = str[str.length - 1];
  str[0] = last;
  str[str.length - 1] = first;
  return str;
}

swap('masha');
