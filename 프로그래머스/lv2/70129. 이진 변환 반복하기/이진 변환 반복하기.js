function solution(s) {
  let zeroCntTotal = 0;
  let stepCnt = 0;

  while (s !== '1') {
    let zeroCount = (s.match(/0/g) || []).length;
    zeroCntTotal += zeroCount;
    s = s.replaceAll('0', '');
    s = s.length.toString(2);
    stepCnt++;
  }

  return [stepCnt, zeroCntTotal];
}