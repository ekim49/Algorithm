function solution(numbers) {
    // generate all permutations
    const digits = numbers.split('');
    const visited = new Array(digits.length).fill(false);
    const numberSet = new Set();
    
    function dfs(current) {
        if (current.length) {
            // convert each permutation sting -> number
            numberSet.add(parseInt(current));
        }
        
        if (current.length === digits.length) return;
        
        for (let i = 0; i < digits.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs(current + digits[i]);
                visited[i] = false;
            }
        }
    }
    
    dfs(''); 
    
    // check each number if it is prime number
    function isPrime(number){
        if (number < 2) return false;
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) return false;
        }
        return true;
    }
    
    // count primes inside the Set
    let count = 0;
    for (let num of numberSet) {
        if (isPrime(num)) count++;
    }
    
    return count;
}