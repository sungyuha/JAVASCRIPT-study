// 출처 : 별코딩

// 함수는 여러가지 값을 전달 받을 수 있음

/* 
콜백함수란?
1. 다른 함수의 인자로 전달 되는 함수를 '콜백함수'
2. 콜백함수는 콜백함수를 전달 받은 함수에 의해서 호출 됨
*/

// main함수는 x라는 매개변수를 받고 그대로 콘솔에 호출
/*function main(x) {
    console.log(x);
}

// main함수에 인자로 숫자를 전달
//main(1);

// main함수에 인자로 문자열 전달
//main('asd');*/


// x 매개뱐수로 sayHello가 들어감
function main(x) {
    console.log('준비작업..');
    // 콜백함수 호출
    x();
    console.log('정리작업..');
}

// 인자로 전달 될 콜백함수
function sayHello() {
    console.log("안녕");
}

main(sayHello);

/* 여기서 중요한 사실! 
1. 우리가 전달해 준 콜백함수는 콜백함수를 전달 받은 함수에 의해서 호출 받음
2. 콜백함수가 어떻게 호출 될지는 매인 함수에 달려있음
3. 콜백함수는 어떤 함수의 인자에 전달 된 함수를 말한다
*/

/* 자수 하는 실수!!
-> 함수 뒤에 소괄호를 붙이면 함수의 리턴 값이 호출 됨
    function main(x) {
        console.log(x);
    }

    // 인자로 전달 될 콜백함수
    function sayHello() {
        console.log("안녕");
    }

    main(sayHello);
    ex. main(sayHello()); -> undefined
*/

// 간결하게 화살표 함수
function main(y) {
    y();
}

main(() => {
    console.log('안녕');
});

// 배운 것을 응용!!
function greetToUese(greet) {
    const name = '별코딩';
    greet(name);
}

// 콜백함수
function greetInKorea(name) {
    // 매개변수로 받은 문자열과 님, 안녕하세요라는 한국어 인사말 콘솔에 출력
    console.log(name + '님, 안녕하세요');
}

// greetInKorea 함수 호출
greetInKorea(greetInKorea);

/*
실행과정!! 
1. greetInKorea이라는 콜백함수를 인자로 전달
2. greet은 greetInKorea이랑 같음
3.  (1) greet(name); -> 전달 해준 콜백함수를 호출할 때 콜백함수의 인자로 
    (2) 함수 내부에서 정의 한 == const name = '별코딩';
    (3) name이라는 변수를 집어 넣어줌
4. greetInKorea이 실행 될 때, name으로는 별코딩이 들어감
5. 그래서 콘솔에 별코딩님, 안녕하세요가 출력 됨
*/