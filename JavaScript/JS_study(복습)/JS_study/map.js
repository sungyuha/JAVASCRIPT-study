// 출처: https://www.youtube.com/watch?v=pC9WmjSh7D4

const log = console.log;

// 함수형 패턴 - 맵
/**
 * map -> HOC 고차함수
    -> 배열의 각각의 원소들마다 주어진 어떤 함수를 적용을 시켜주고,
    그 함수에서 반환 된 결과를 담은 새로운 배열로 변형을 시켜주는 프로세싱을 '맵핑'이라고 함
 * 자바스크립트에 이 패턴을 사용한다고 했을때는 Array 객체의 프로토타입 중에 map이라는 매소드가 있음
 * 맵 내부에서 콜백함수들이 실행됨 -> 맵핑 function이라고 함
 */

/**
 * 내장된 생성자 중 iterable 객체를 만들어내는 생성자! 
 * String
 * Array
 * TypedArray
 * Map
 * Set
*/
// 반복 가능한 객체(iterable object) 혹은 줄여서 iterable이라고 부름
iterable.map((item) => {
    // 맵 내부에서 콜백함수들이 실행됨, 이 것을 맵핑 function이라고 함
    // 맵핑 function을 배열의 원소마다 하나씩 적용 시켜줌
});

// 예제1
const arr = [15, 30, 100];

const mapped = arr.map((value) => { // 변수에 map핑
    // toFixed() 메서드는 숫자를 고정 소수점 표기법(fixed-point notation)으로 표시
    // 반환 값 : 고정 소수점 표기법을 사용하여 나타낸 수를 문자열로 바꾼 값
    return value.toFixed((2));
});

log(mapped);
/**
 * map을 사용할때 장점!!
 * 1. 가독성 -> for loop, while loop 사용 X
 * 2. index를 통해서 원형배열에 접근 할 필요가 없음 -> arr[1], arr[0] X
 * 3. 원형배열 수정 X
 */