
function isFibonacci(input){
  let sequenceFibonacci = [0, 1];
  
  for (let i = 2 ; sequenceFibonacci.at(-1) < input ; i++){
    sequenceFibonacci[i] = sequenceFibonacci[i-2] + sequenceFibonacci[i-1];
  }
  if (sequenceFibonacci.find(value => value === input) !== undefined){
    return console.log(`${input} is present in Fibonacci sequence`);
  }
  console.log(`${input} is not present in Fibonacci sequence`);
}

isFibonacci(8)