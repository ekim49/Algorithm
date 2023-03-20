function solution(spell, dic) {
    const target = spell.sort().join('');
    const sortedDic = dic.map((word) => word.split('').sort().join(''));
    return sortedDic.includes(target) ? 1 : 2;
}
