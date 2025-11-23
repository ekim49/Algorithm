function solution(progresses, speeds) {
  const n = progresses.length;
  if (n === 0) return [];

  // compute days needed (integer-safe)
  const days = new Array(n);
  for (let i = 0; i < n; i++) {
    const remaining = 100 - progresses[i];
    if (remaining <= 0) {
      days[i] = 0; // already done
    } else {
      const s = speeds[i];
      days[i] = Math.floor((remaining + s - 1) / s); // ceil(remaining / s)
    }
  }

  const result = [];
  let current = days[0];
  let count = 1;

  for (let i = 1; i < n; i++) {
    if (days[i] <= current) {
      count++;
    } else {
      result.push(count);
      current = days[i];
      count = 1;
    }
  }

  result.push(count);
  return result;
}