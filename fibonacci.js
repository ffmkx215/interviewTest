//   this Method will memorize every iterable number 
function fibonacciMemo(position, table) {
    table = table || {};
  
    if (table[position]) return table[position];
    if (position <= 1) return 1;
  
    return table[position] = fibonacci(position - 1, table) + fibonacci(position - 2, table);
  }

//   this is base solution
function fibonacci(position){
    var a = 1, b = 0, temp;
  
    while (position >= 1){
      temp = a;
      a = a + b;
      b = temp;
      position--;
    }
  
    return b;
  }