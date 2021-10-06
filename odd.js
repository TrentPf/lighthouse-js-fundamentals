function isOdd(num){
  if (num % 2 === 1){
    return(true);
  }
  else{
    return(false);
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log("1 is odd: " + isOdd(1));
