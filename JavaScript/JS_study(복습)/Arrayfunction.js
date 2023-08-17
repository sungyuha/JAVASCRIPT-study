const { number } = require("prop-types");

// 일반 적인 함수
function prinMyName(name) {
    console.log(name);
}

prinMyName('Max');
// 결과로 Max가 출력
// 화살표 함수에 해당 하는 것은 prinMyName이라는 const(상수)로 저장하는 것

// 화살표 함수
const prinMyName = (name, age) => {
    console.log(name, age);
}

prinMyName('Max', 28);

// 또 다른 화살표 함수
const multiply = (number) => {
    return number * 2;
}
// 어떤 값을 곱하고, 인수로 number를 갖음
// 그리고 number*2를 반환 / 출력 함수는 console.log()에 multiply(2)를 인수로 전달
console.log(multiply(2));
// 4

// 또 다른 화살표 함수 코드 간결하게
const multiply2 = number => number * 2;
console.log(multiply2(2));