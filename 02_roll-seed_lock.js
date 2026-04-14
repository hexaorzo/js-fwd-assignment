const N = Number(prompt("N ="));
const seed = Number(prompt("seed ="));

let current = N;

for (let step = 0; step < 3; step++)
{
	if (current % 2 === 0)
	{
		current = current / 2 + seed;
	}
	else
	{
		current = current * 3 - seed;
	}
}

const isThreeDigit = current >= 100 && current <= 999;
const middleDigit = Math.floor(current / 10) % 10;
const isMatch = isThreeDigit && middleDigit === seed;

alert(`${isMatch ? "YES" : "NO"}, ${current}`);
