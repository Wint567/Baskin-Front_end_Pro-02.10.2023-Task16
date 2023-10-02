function createSumFunction() {
    let total = 0;
  
    return function (value) {
      if (typeof value === 'number') {
        total += value;
      } else {
        console.log("error");
    }
      return total;
    };
}
  
const sum = createSumFunction();
  
console.log(sum(3));
console.log(sum(5)); 
console.log(sum(20));
  