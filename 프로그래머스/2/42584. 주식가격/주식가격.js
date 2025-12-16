function solution(prices) {
  const n = prices.length;
  const answer = Array(n).fill(0);
  const stack = []; // stores indices

  for (let i = 0; i < n; i++) {
    // If price drops, resolve previous prices
    while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
      const prevIndex = stack.pop();
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  // Prices that never dropped
  while (stack.length) {
    const index = stack.pop();
    answer[index] = n - 1 - index;
  }

  return answer;
}