let input = process.argv.slice(2,process.argv.length);

let caracter = '\x07';
for (i = 1; i<= input.length; i++) {
  let x = Number(input[i]);
  if (! isNaN(x)){
    if (x >= 0) {
      setTimeout(() => (process.stdout.write(caracter)), x * 1000);
    }  
  }
  }
