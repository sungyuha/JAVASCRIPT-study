/** 복습 */
/** 
 * 비동기 프로그래밍 : 코드를 비동기적으로 수행하는 방식
 * 어떤 작업을 비동기로 시작한다는 것은 기다리지 않고 바로 다음 작업으로 넘어가는 방식
*/

console.log('1');

// 비동기함수 : 브라우저가 제공하는 비동적인 함수
// setTimeout는 비동기함수, 두 개의 인자를 전달 받음
setTimeout(() => { // 첫 번째 인자는 콜백함수, 두 번째 인자는 지연시간을 나타내는 숫자를 전달 받음 / 멀티쓰레드
    console.log('2');
}, 3000);

/**
 * 여러가지 일을 동시에 할 수 있는 것은 web APls 덕분!
 * 브라우저의 안을 살펴보면 web APls가 있는데 자바스크립트 엔진과는 별개로 다양한 APls들을 제공해줌
 * 대표적으로 fetch와 DOM가 web APls가 제공하는 APls
 * web APls는 별도의 환경에서 실행
 * 이 환경은 멀티쓰레드 환경임!
 */

// 예제코드 실행과정!!
// 자바스크립트 엔진은 제일 상단부터 코드를 동기적으로 실행시킴
console.log("시작");

// setTimeout가 호출이 되면, web APls 환경에서 타이머가 돌아가기 시작함
setTimeout(() => { // 인자로 전달해준 콜백함수도 함께 web APls쪽으로 던져짐
    console.log('2');
}, 3000); // 시간이 지나고 web APls가 돌아가던 타이머가 완료되면 전달해줬던 콜백함수를 받아서 실행시켜줌, 그래서 3초 뒤에 2가 출력되는것

// 위의 호출은 끝나서 자바스크립트 엔진은 다음 코드로 넘어가 콘솔로그 1을 실행시킴
console.log('1');