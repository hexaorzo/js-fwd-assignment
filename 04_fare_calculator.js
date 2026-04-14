const base = Number(prompt("base ="));
const distance = Number(prompt("distance ="));
const minutesLate = Number(prompt("minutesLate ="));
const seed = Number(prompt("seed ="));

let fare = base + 7 * distance;

if (minutesLate > 15) 
    fare += 20;
if (distance > 10) 
    fare += Math.floor((fare * 10) / 100);
if (seed % 2 === 1) 
    fare -= seed;
else fare += seed;
const finalFare = Math.ceil(fare / 5) * 5;
alert(finalFare);