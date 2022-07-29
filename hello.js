const REG = /\(\)/g;
function replaceStr(str) {
  if(REG.test(str)) {
      const newStr = str.replace(REG, '');
      console.log('newStr--', newStr);
      return replaceStr(newStr);
  } else {
      console.log('str:', str);
      return str.length;
  }
}

function getMin(s) {
  // Write your code here
  const c = replaceStr(s);
  console.log('c:', c);
}

getMin('()))');