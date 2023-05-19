/* 
1. 자바스크립트에서 This는 어떤 객체를 가리키는 키워드
2. This가 가리키는 객체는 상황에 따라서 다름 
*/

// ** this는 함수를 호출한 객체이다 

// 1. 전역 객체 일 때 this
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

/* 
한가지 예외사항! 
최 상단에 'use strict'를 써서 엄격 모드를 활성화 시키면
main으로 함수를 호출하면 this값이 undefined 
this값은 window로 가지고 싶으면 window.main으로 
*/

// 2. 객체의 메소드

const object = {
    name: "별코딩",
    main: function () {
        // 메소드는 객체의 속성으로 쏙 넣어진 함수를 의미
        /* this는 object를 가리키고 있기 매문에 name에 접근 가능
        console.log(this.main);이 됨 */
        console.log(this);
    },
};

// object 객체의 메소드로서 main함수 호출
// 그래서 this는 object가 됨
// 객체에 다른 속성을 접근할 때 굉장히 유용함
object.main();

// 객체 밖에 
function main2 () {
    console.log(this);
}

const object2 = {
    name: "별코딩",
    // 객체의 구성원으로 포함시켜줘도 동일하게 this는 object2 객체를 포함 시킴
    main2,
};

// 객체 밖이나 안이나 object2를 메인으로 호출하면 this는 object2를 가리킴
object2.main2();

// 3. Bind : 새로운 함수를 반환

function main3() {
    // this값은 bind 안에 넣어둔 인자 값이 출력 됨
    console.log(this);
}

// 함수 뒤에 bind를 할당
// bind의 인자로 원하는 객체를 할당
const mainBind = main3.bind({name: "Hello"}); // bind는 새로운 함수를 반환
mainBind();
// bind의 주의점!! bind를 또 할 수 없음