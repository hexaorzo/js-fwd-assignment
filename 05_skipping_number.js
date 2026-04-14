const N = 100
const seed = 3

const divisor = seed + 2;
let m = 0;
let sum = 0;

while (sum < N) 
{
	m += 1;
	if (m % divisor !== 0)
		sum += m;
}

console.log(m);
console.log(sum);