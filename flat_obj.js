function recursiveFunc(entry, result, parentKey) {
  for(let i in entry) {
    let currkey = '';
    if(parentKey === '') {
      currkey = i;
    } else {
      currkey = parentKey + '.' + i;
    }
    const value = entry[i];
    if(typeof value === 'object') {
      recursiveFunc(value, result, currkey);
    } else {
      result[currkey] = value;
    }
  }
}

function flat_obj(entry) {
  const result = {};
  recursiveFunc(entry, result, '');
  return result;
}

const entry = {
  a: {
    b: {
      c: '1',
    },
    e: {
      f: {
        g: 2,
      }
    }
  }
};

console.log(flat_obj(entry));