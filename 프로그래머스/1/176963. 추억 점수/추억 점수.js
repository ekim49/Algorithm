function solution(name, yearning, photo) {
    // { may: 5, kein: 10, kain: 1, radi: 3 } 로 재정의
    const nameYearningMap = name.reduce((acc, name, index) => {
      acc[name] = yearning[index]
      return acc
    }, {})

    const result = photo.map(photoArray => {
      return photoArray.reduce((sum, person) => {
        return sum + (nameYearningMap[person] || 0) // 누적값에 현재 멤버의 그리움점수 더하거나, 없는 멤버라면 0을 더함
      }, 0)
    })

    return result;
}