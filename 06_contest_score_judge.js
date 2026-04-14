const a = Number(prompt("Enter a:"));
const b = Number(prompt("Enter b:"));
const c = Number(prompt("Enter c:"));

let score = 3 * a + b - 2 * c;

if (a + b + c > 50)
	score -= 10;

if (score < 0)
	score = 0;

const stats = score >= 60 ? "PASS" : "FAIL";

alert(`${score}, ${stats}`);
