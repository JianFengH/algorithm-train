console.log(1);

setTimeout(() => {
  console.log(2);

  new Promise((resolve, reject) => {
    console.log(5);
    resolve();
  }).then(() => {
    console.log(9);
  });

  console.log(7);
});

console.log(3);

new Promise((resolve, reject) => {
  console.log(4);
  resolve();
}).then(() => {
  console.log(8);
});

console.log(6);

// 1 3 4 6 8  
// 2 5 7 9