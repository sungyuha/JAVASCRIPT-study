/* 
화살표 함수 (기본)

** JS에서 함수를 정의하는 방법!!
1) fuction 키워드를 이용하는 일반 함수 방법
2) 화살표 함수를 사용하는 방법

일반 함수 VS 화살표 함수 차이점
-> 일반 함수 : 함수 선언식과 함수 표현식

function 키둬를 사용하는 일반 함수는
'함수 선언식, 함수 표현식'으로 함수 정의 가능

*/

/* 
1. 함수 선언식 : 자바스크립트에서 함수를 선언하는 가장 기본적인 방법
-> 함수 선언식은 필수 적으로 함수로 이름을 정의해야 함
단, 함수 선언식은 익명 함수를 만들 수 없음
*/
function main() {
    console.log("hello")
}

// 함수 선언식으로 작성 된 함수는 호이스팅이 가능!
// 호이스팅 : 함수의 코드를 최상단으로 끌어올리는 것을 의미
main()

/*
1-2. 함수 표현식 : 함수를 하나의 표현 안에서 정의하는 것
// 익명 함수를 만들기 위해선? -> 함수 표현식을 사용!
함수 표현식으로 표현하면 이름이 없는 함수인 익명 함수
*특징 : 호이스팅이 안됨
*/

// 익명 함수를 main이라는 변수에 할당
const main = function() {
    console.log("hello")
}

// 할당을 해줬기 때문에 변수 이름을 함수 이름으로 사용 가능! 그래서 함수로 호출 가능

/*
2. 화살표 함수
- 화살표 함수는 ES6에 등장한 문법
- 함수를 정의할 때 사용하는 또다른 문법
*/

const main = () => {
    console.log("hello")
}

main()

// 예제 활용!
// 예제 1 일반 함수
function add(a, b) {
    return a + b
}

add()
// 예쩨 2 화살표 함수 
const add = (a, b) => a + b; // 코드 블럭 안에 코드가 하나라면 return 생략 가능!!

add()

// 예제 2 화살표 함수 : 코드가 한 줄만 있어서 더 간결하게 입력 가능!
const main2 = () => console.log("hello")

main()

// 예저3 일반함수
function print(text) { //text라는 하나의 매개변수를 받아서 
    // 그대로 콘설에 출력해줌
    console.log(text)
}

print("hi")

// 예제3 활살표 함수
// 매개변수가 하나라면 소괄호 생략가능!
const print = text => console.log(text)

// 만약에 매개변수가 2개라면 소괄호 생략 불가능!!
// const print = (text1, text2) => console.log(text1)

print("hi")

// 예제4 매개변수가 하나도 없는 화살표 함수
// 매개변수가 하나도 없을때도 소괄호 생략 불가능!!
const print2 = () => console.log(text)

print2("hi")