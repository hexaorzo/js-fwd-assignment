# JS-Assignment

## 01. Digit Gatekeeper
Approach:
- Read `L`, `R`, and `K`, then iterate only numbers divisible by `K` (start from the first multiple of `K` inside `[L, R]`).
- For each candidate number:
	- Reject it if any digit is `0`.
	- Compute digit sum and check whether that sum is prime.
- Count all numbers that pass both checks.

Complexity:
- Time: `O(R-L)`
- Space: `O(1)`.

## 02. Roll-Seed Lock
Approach:
- Start from `N` and apply exactly 3 transformation steps:
	- If even: `current = current / 2 + seed`
	- If odd: `current = current * 3 - seed`
- After 3 steps, verify that:
	- Result is a 3-digit number.
	- Middle digit equals `seed`.
- Output `YES`/`NO` with the final value.

Complexity:
- Time: `O(1)`
- Space: `O(1)`.

## 03. Mirror Corridor
Approach:
- Search for the minimum `x >= 0` such that `i = N + x` is:
	- Divisible by `K`.
	- A palindrome.
- Check candidates in increasing order and stop at the first valid one.
- Palindrome check is done numerically by reversing digits.

Complexity:
- Time: `O(1)`
- Space: `O(1)`.

## 04. Fare Calculator
Approach:
- Start with base fare: `base + 7 * distance`.
- Apply business rules in order:
	- Late penalty if `minutesLate > 15`.
	- Distance surcharge if `distance > 10`.
	- Seed-based adjustment (subtract if odd, add if even).
- Round final fare up to the nearest multiple of 5.

Complexity:
- Time: `O(1)`.
- Space: `O(1)`.

## 05. Skipping Number
Approach:
- Maintain running sum of natural numbers while skipping values divisible by `seed + 2`.
- Increase `m` one by one until the sum reaches or exceeds `N`.
- Output final `m` and `sum`.

Complexity:
- Time: `O(m)`
- Space: `O(1)`.

## 06. Contest Score Judge
Approach:
- Compute score using formula: `score = 3*a + b - 2*c`.
- Apply rules:
	- If `a + b + c > 50`, subtract 10.
	- Clamp score to 0 if negative.
	- `PASS` if score >= 60, otherwise `FAIL`.
- Output score and status.

Complexity:
- Time: `O(1)`.
- Space: `O(1)`.

