function main() {
  const reg = /^[a-z]{1,6}_?[0-9]{0,4}@hackerrank\.com$/;

  const str = 'Glebh061@hackerrank.com';
  const reg2 = new RegExp(reg);
  console.log(str, reg2.test(str));
}

main();
