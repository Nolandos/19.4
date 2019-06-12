const sum = (arr) => {
  let total = 0; 
  arr.forEach(item => total += item);
  console.log(total);
}

var test = [[1,2,3,4,5,6,7,8,9,10],[71,-548,12.3,83,-47,-1.7,-892,58,31415,2718,-38]];

sum(test[0]);

sum(test[1]);

//Tutaj mi wyskakuje błąd na stronie codewars, nie rozumiem o co im dokładnie chodzi :/