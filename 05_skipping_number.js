const N = Number(prompt("N = "));
const seed = Number(prompt("seed = "));

const divisor = seed + 2;
let m = 0;
let sum = 0;

while (sum < N) 
{
	m += 1;
	if (m % divisor !== 0)
		sum += m;
}

alert(`${m}, ${sum}`);