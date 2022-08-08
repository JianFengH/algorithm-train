function removeDuplicateStr(str) {
  const reg = /(.)(?=.*\1)/g;
  return str.replace(reg, '');
}

// console.log(removeDuplicateStr('abdeegdcffdsfa'));

function switch_words_position(str) {
  return str.replace(/(\w+)\s(\w+)/, '$2, $1');
}

// console.log(switch_words_position('John Smith'));

function split_lines(str) {
  return str.split(/\r\n|\r|\n/);
}

// console.log(split_lines('Some text\nAnd some more\r\nAnd yet\rThis is the end'));

// http://xxx.domain.com/abc.html -> xxx
function extract_sub_domain(url) {
  const reg = /^https?:\/\/(.+?)\./;
  return reg.exec(url)[1];
}

// console.log(extract_sub_domain('http://xxx.domain.com/abc.html'));

function dynamic_inputs(str) {
  const breakfasts = ['bacon', 'eggs', 'oatmeal', 'toast', 'cereal'];
  const reg = new RegExp(`\\b(${breakfasts.join('|')})\\b`, 'g');
  return str.match(reg);
}

// console.log(dynamic_inputs('Let me get some bacon and eggs, please'));

function replace_func() {
  let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, function (match, p1, p2, p3, offset, string) {
    return [p1, p2, p3].join(' - ');
  });
  return newString;
}

// console.log(replace_func());

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

// console.log(styleHyphenFormat('borderTop'));

function f2c(x) {
  function convert(match, p1, offset, string) {
    return ((p1 - 32) * 5 / 9) + 'C';
  }
  let s = String(x);
  let test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}

// console.log(f2c('212F'));

function exec_func() {
  let myRe = /ab*/g;
  let str = 'abbcdefabh';
  let myArray;
  while ((myArray = myRe.exec(str)) !== null) {
    let msg = 'Found ' + myArray[0] + '. ';
    msg += 'Next match starts at ' + myRe.lastIndex;
    console.log(msg);
  }
}

exec_func();