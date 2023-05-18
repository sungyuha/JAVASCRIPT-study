/* 
1. 자바스크립트에서 This는 어떤 객체를 가리키는 키워드
2. This가 가리키는 객체는 상황에 따라서 다름 
*/

// ** this는 함수를 호출한 객체이다 

// 전역 객체 일 때 this
console.log(this); 

// 윈도우 값이 나옴. window객체는 브러우저 정보값을 가지고 있는 전역객체
// 전역적인 문맥에서 this가 접근하면 this는 window갹체가 된다.!!

if (true) {
    console.log(this); // this는 전역 객체 -> window객체를 가리킴
}

// 엄격모도 활성화
'use strict';

// 엄격모드로 동일하게 전역 객체를 가리키면 this는 window 객체가 됨
console.log(this); 

// 함수 내부의 this
function main() {
    // 함수 안에서 this에 접근. 함수를 어떻게 호출했나에 따라서 값이 달라짐
    console.log(this);
}

main(); // == window.main() 호출하는 것과 동일
// main 함수는 window 객체에 등록 된 함수이기 때문!!
