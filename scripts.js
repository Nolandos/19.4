const average = (...args) => {
 	let sum = 0;
  	args.forEach(arg => sum += arg); 
  	console.log(sum/[...args].length);
};

average(1); // 1
average(1, 3); // 2
average(1, 3, 6, 6); // 4