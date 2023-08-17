const numbers = [1, 2, 3];

// 모든 원소의 값들이 두 배가 되는 배열을 만들고 싶으면
// doubleNumArray라는 객체를 만들고 여기에 배열 함수를 사용해야 함
// 새로운 배열은 doubleNumArray에 저장
const doubleNumArray = numbers.map((num) => { // num은 매개변수
    // 배열의 각 원소에서 이 함수가 실행 됨
    return num * 2;
});
// map은 내장된 배열 메소드
// map() 함수는 예전 값을 새 값으로 반환
// map(은 새로은 배열로 반환

console.log(numbers); // 이전 배열은 변경되지 않음
console.log(doubleNumArray); // 새 배열의 원소들은 값이 두 배가 됨

// **배열 관련 함수들은 각 원소들에서 실행 되는 함수들을 갖고 있음
