const shuffleIt  = (arr, ...rest) => {
  for(let i=0; i<rest.length; i++) {
    [arr[rest[i][0]],arr[rest[i][1]]] = [arr[rest[i][1]],arr[rest[i][0]]];
  }
  return arr;
} 

//Testy przeszło, nawet te 100 losowych... :D 