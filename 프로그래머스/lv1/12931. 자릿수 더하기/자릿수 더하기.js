function solution(n) {
   return n.toString().split('').map(el => Number(el)).reduce((a, b) => a + b, 0);
}