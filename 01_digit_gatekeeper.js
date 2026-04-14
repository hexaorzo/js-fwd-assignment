const L = Number(prompt("L ="));
const R = Number(prompt("R ="));
const K = Number(prompt("K ="));

function isPrime(n) 
{
	if (n < 2) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;

	const limit = Math.floor(Math.sqrt(n));
	for (let i = 3; i <= limit; i += 2) 
    {
		if (n % i === 0) return false;
	}
	return true;
}

function hasNoZeroDigit(n) 
{
	let x = n;
	while (x > 0) 
    {
		if (x % 10 === 0) return false;
		x = Math.floor(x / 10);
	}
	return true;
}

function digitSum(n) 
{
	let x = n;
	let sum = 0;
	while (x > 0) 
    {
		sum += x % 10;
		x = Math.floor(x / 10);
	}
	return sum;
}

function countNumbers(L, R, K) 
{
	let count = 0;
	const start = L % K === 0 ? L : L + (K - (L % K));
	for (let x = start; x <= R; x += K) 
    {
		if (!hasNoZeroDigit(x)) continue;
		if (!isPrime(digitSum(x))) continue;
		count++;
	}
	return count;
}

const result = countNumbers(L, R, K);
alert(result);
