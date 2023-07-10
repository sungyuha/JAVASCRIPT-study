// 구조분해할당
// 원소나 프로퍼티를 하나만 가져와서 변수에 저장

/*const numbers = [1,2,3];
[num1, num2] = numbers;
// 변수에 이름을 선택하고 이것을 nombers 배열에 할당
console.log(num1, num2);
// 출력함수에 num1과 num2를 전달해서 실행하ㅕㄴ 결과값으로 1과 2를 볼 수 있는데 배열에서 2개를 가져옴*/

const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);
// 구조분해할당
// 배열에서 특정 원소나 객체에서 특정 속성을 추출하는 편한 방법이 있음