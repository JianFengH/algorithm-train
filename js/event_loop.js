console.log(1);

setTimeout(() => {
  console.log(2);

  new Promise((resolve, reject) => {
    console.log(5);
  });
});

console.log(3);

new Promise((resolve, reject) => {
  console.log(4);
});

// 1 3 2 4 5