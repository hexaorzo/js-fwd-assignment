const N = Number(prompt("N ="));
const K = Number(prompt("K ="));

function isPalindrome(value)
{
	const original = value;
	let rev = 0;
	let cur = value;
	while (cur > 0)
	{
		rev = rev * 10 + (cur % 10);
		cur = Math.floor(cur / 10);
	}
	return original === rev;
}

let answer = -1;
for (let x = 0; x <= 100000; x++)
{
	const i = N + x;
	if (i % K !== 0) continue;
	if (!isPalindrome(i)) continue;
	answer = x;
	break;
}

alert(answer);
