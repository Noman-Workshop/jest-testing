const isPalindrome = (name) => {
  name = name.toString();
  let len = name.length;
  for (let i = 0; i < len / 2; i++) {
    if (name[i] !== name[len - i - 1]) return false;
  }
  return true;
}

module.exports = {
  isPalindrome
}