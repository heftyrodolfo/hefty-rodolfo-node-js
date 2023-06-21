const prompt = require('prompt-sync')();

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("PlataForma");
  } else if (i % 2 === 0) {
    console.log("Plata");
  } else if (i % 7 === 0) {
    console.log("Forma");
  } else if (i % 17 === 0) {
        console.log("Forma");
  } else {
    console.log(i);
  }
}