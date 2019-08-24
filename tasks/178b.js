function f178b(n){				
	let count = 0;
	for(let i = 3; i <= n; i+=3){
		if(i%5){
			count++;
		}
	}
	return count;
} 
console.log(f178b(15));