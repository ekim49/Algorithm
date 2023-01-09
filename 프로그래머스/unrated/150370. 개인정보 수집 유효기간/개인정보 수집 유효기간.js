function solution(today, terms, privacies) {
    const [todayYear, todayMonth, todayDay] = today.split('.');
    const realTodayDate = new Date(todayYear, todayMonth, todayDay);
    
    let resultDate = [];
    let answer = [];
    
    privacies.forEach((privacy, idx) => { 
        let [privacyYear, privacyMonth, privacyDay] = privacy.split(' ')[0].split('.');
        const privacyTerm = privacy.split(' ')[1]; 
        
        terms.forEach((term, idx) => {
            const letter = term.split(' ')[0];
            const duration = term.split(' ')[1];
            
            if (letter === privacyTerm) {
                let month = Number(privacyMonth) + Number(duration)
                privacyMonth = month;
                if (Number(privacyMonth) > 12) {
                    privacyMonth = Number(privacyMonth) - 12;
                    privacyYear++;
                }
                
                privacyDay = Number(privacyDay) - 1;
                if (Number(privacyDay) === 0) {
                    privacyDay = 28;
                    privacyMonth--;
                }
                resultDate.push(`${privacyYear}.${privacyMonth}.${privacyDay}`);
            }
        });
    })
    
    resultDate.forEach((date, idx) => {
        const [year, month, day] = date.split('.');
        const realDate = new Date(year, month, day);
  
        if (realDate - realTodayDate < 0) {
            answer.push(idx + 1);
        }
    })
    return answer;
}