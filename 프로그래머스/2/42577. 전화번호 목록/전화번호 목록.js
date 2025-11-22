function solution(phone_book) {
    // sort -> prefix 관계가 있을 법한 것들을 찾기 위해
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}