//console.log('js loaded');

// 다른 개발자가 만들어 놓은 객체
/* const user = {
    name : "Mike",
    age : 30,
};

// 내가 작업 (위와 하단이 많이 떨어져있어서 추가 작업을 할 경우)
// user.showName = function(){}; -> 말도 안돼는 메시지 출력
const showName = Symbol('show Name');
user[showName] = function() {
    console.log(this.name);
};

user[showName]();

// 사용자가 접속하면 보는 메시지
for (let key in user) { // 객체의 프로퍼티를 순회하면서 
    console.log(`His ${key} is ${user[key]}.`);
}

// 반환값
/* Mike
test.js:18 His name is Mike.
test.js:18 His age is 30. */

/* let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

// 숫자를 제외하고 글자만 출력

let newList = [];
for(let i=0;i<list.length;i++){
    newList.push(list[i].slice(4));
}

console.log(newList);

// 금칙어 : 콜라

function hasCola(str){
    if (str.indexOf("콜라")){
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

hasCola("와 사이다가 짱이야!"); // -1 if는 -1 사용X
hasCola("무슨소리, 콜라가 최고"); // 
hasCola("콜라"); // 0 if 0은 false이기 때문에 금칙어가 있습니다 못들어감

// 바른 코드

// 금칙어 : 콜라

function hasCola(str){
    if (str.indexOf("콜라") > -1 ){
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

hasCola("와 사이다가 짱이야!");
hasCola("무슨소리, 콜라가 최고");
hasCola("콜라");

// 금칙어 : 콜라
// includes
// 문자가 있으면 true
// 없으면 false 반환

function hasCola(str){
    if (str.includes("콜라") > -1 ){
        console.log("금칙어가 있습니다.");
    } else {
        console.log("통과");
    }
}

hasCola("와 사이다가 짱이야!");
hasCola("무슨소리, 콜라가 최고");
hasCola("콜라");
*/

// forEach

/*let arr = ["Mike", "Tom", "Jane"];

arr.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});*/

// find / findIndex

/*let arr = [1, 2, 3, 4, 5];

const result = arr.find((item) => {
    return item % 2 === 0;
});

console.log(result); */

// 반환값 
// 2

// find / findIndex

/*let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

const result = userList.findIndex((user) => {
    if (user.age < 19) {
        return true;
    } 
    return false;
});

console.log(result);*/

// 반환값 -> 2

/*const arr = [1, 2, 3, 4, 5, 6];

const result = arr.filter((item) => {
    return item % 2 === 0;
});

console.log(result);*/

// 반환값 -> (3) [2, 4, 6]

// arr.map()

/*let userList = [
    {name: "Mike", age: 30},
    {name: "Jane", age: 27},
    {name: "Tom", age: 10},
];

let newUserList = userList.map((user, index) => {
    return Object.assign({}, user, {
        id: index + 1,
        isAdult: user.age > 19,
    });
});

console.log(newUserList);*/

/* 반환값
0: {name: 'Mike', age: 30, isAdult: true}
1: {name: 'Jane', age: 27, isAdult: true}
2: {name: 'Tom', age: 10, isAdult: false}
length: 3
[[Prototype]]: Array(0)
*/

// join, split

/*let arr = ["안녕", "나는", "철수야"];

let result = arr.join("-");

console.log(result);*/

// 반환값 -> 안녕-나는-철수야

// split

/*const users = "Mike, Jnae, Tom, Tony";

const result = users.split(",");

console.log(result);*/

// 반환값 -> (4) ["Mike", "Jnae", "Tom", "Tony"]

// Array.isArray()

/*let user = {
    name : "Mike",
    age : 30
};

let userList = ["Mike", "Tom", "Jane"];

console.log(typeof user);
console.log(typeof userList);*/
// 어느것이 객체이고 배열인지 구분 불가능

// 반환값 -> object, object
// ---

// Array.isArray()

/*let user = {
    name : "Mike",
    age : 30,
};

let userList = ["Mike", "Tom", "Jane"];

console.log(Array.isArray(user));
console.log(Array.isArray(userList));*/

// 반환값
/*false
true*/

/*
arr.sort()
배열 재정렬
주의! 배열 자체가 변경됨
인수로 정렬 로직을 담은 함수를 받음
*/

/*let arr = [1, 5, 4, 2, 3];

arr.sort();

console.log(arr);*/
/* 반환값 -> (5) [1, 5, 4, 2, 3] */


/*let arr = ["a", "b", "c", "d", "e"];

arr.sort();

console.log(arr);*/
/* 반환값 -> (5) ["a", "b", "c", "d", "e"] */

/*let arr = [27, 8, 5, 13];

arr.sort();

console.log(arr);*/
/* 반환값 -> (5) [13, 27, 5, 8] , 문자열로 읽어서 */

let arr = [27, 8, 5, 13];

// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

arr.sort((a, b) => { // 함수를 인수로 받음
    console.log(a, b);
    return a - b; // a랑 b를 비교해서 a가 적으면 앞으로 보냄
});

console.log(arr);
