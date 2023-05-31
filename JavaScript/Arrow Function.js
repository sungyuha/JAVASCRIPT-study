// 1. 일반 함수의 this - Object 객체
/*const object = {
    // name 속성으로는 별코딩 문자열
    name: '별코딩',
    // main이라는 메소드, 메소드는 객체인 함수를 속성으로 넣어진 것
    main: function () {
        // 함수를 어떻게 호출하냐에 따라 this값이 바뀜
        // this는 함수를 호출한 객체가 됨
        console.log(this);
    },
};

const object2 = {
    name: '다른 객체',
    main: object.main,
}

// object.main();
object2.main();*/


// 일반 함수가 가지는 this 값은 함수가 선언 된 위치랑 전혀 관련이 없음
// 무저건 함수가 호출 된 방법에 따라서 this값이 결정 됨
function main() {
    console.log(this);
}

const object = {
    name: '별코딩',
    main: main,
};

const object2 = {
    name: '다른 객체',
    main: main,
};

object.main(); // object
object2.main(); // object2

// 2. 화살표 함수의 this
// 화살표 함수는 자신만의 this를 가지고 있지 않음
const object3 = {
    name: '별코딩',
    main: function () {
        console.log(this);
    },
    mainArrow: () => {
        // window를 그대로 가져와서 this값으로 사용하개 됨
        console.log(this);
    }
};

// window가 호출 됨
/* 화살표 함수는 일반 함수와는 다르게 자신만의 this를 가지지 않음
신을 감싸고 있는 스코프로 올라가서 찾게 됨. 그렇게 찾게 된 tihs를 그대로 가져와서 사용하게 됨
*/
object3.mainArrow();
