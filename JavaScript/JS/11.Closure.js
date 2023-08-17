/*function makeAddr(x) {
    return function(y) { // y를 가지고 있고, 상위함수인 makeAddr 의 x에 접근 가능
            return x + y;
    }
}

const add3 = makeAddr(3);
console.log(add3(2)); // 5 -> add3 함수가 생성 된 이후에도 상위함수인 makeAddr 의 x 에 접근 가능. 이런것을 '클로저'라고 함

const add10 = makeAddr(10);
console.log(add10(5)); // 15
console.log(add13(1)); // 4 */

/*function fn(){
    console.log(3)
}

setTimeout(fn, 3000);
// 3초 후에 로그를 찍어줌
// setTimeout 은 두 개의 매개변수를 받음
// 일정 시간이 지난 뒤 실행하는 함수 fn
// 3000 -> 3s. 즉 3초

// 위의 코드는 하단의 코드와 동일
setTimeout(function(){
    console.log(3)
}, 3000);*/

/*function showName(name){
    console.log(name);
}

setTimeout(showName, 3000, 'Mike');
// showName -> 함수, 3000 -> 시간, 'Mike' -> 인수*/

/*function showName(name){
    console.log(name);
}

const tId = setInterval(showName, 3000, 'Mike');*/

// delay = 0 ?

/*setTimeout(function(){
    console.log(2)
}, 0);

console.log(1);*/

// setInterval, clearInterval

/*let num = 0;

function showName(){
    console.log(`안녕하세요, 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5) {
        clearInterval(tId);
    }
}

const tId = setInterval(showName, 1000);*/

const mike = {
    name: "Mike",
};

const tom = {
    name: "Tom",
};

function showThisName(){
    console.log(this.name); // 여기서 this는 window를 가리킴
}

/*showThisName();
showThisName.call(mike);*/
// 함수로 call을 사용하고 this로 사용할 객체를 넘기면 해당 함수가 주어진 객체 메소드 인 것처럼 사용할 수 있음
/* call의 첫 번째 매개변수는 this로 사용할 값이고 매개변수가 있으면 그 매개변수로 호출하는 함수로 전달 됨*/
// showThisName.call(tom); // tom

function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(mike, 1999, 'singer');
// this로 사용할 mike 를 전달, 첫 번재 매개변수인 생년, 직업을 전달
console.log(mike);