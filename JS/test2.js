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

/*let arr = [27, 8, 5, 13];

// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

arr.sort((a, b) => { // 함수를 인수로 받음
    console.log(a, b);
    return a - b; // a랑 b를 비교해서 a가 적으면 앞으로 보냄
});

console.log(arr);*/

/* arr.reduce() 
인수로 함수를 받음
(누적 계신값, 현재값) => { return 계산값 };
*/

// 배열의 모든 수 합치기
// let arr = [1, 2, 3, 4, 5];
// for, for of, forEach

//const result = arr.reduce((prev, cur) => { // prev : 현재까지 누적된 계산값, cur: 현재 값
//   return prev + cur;
// }, 0); // 처음 누산값 : 0

// console.log(result);

// 반환값 : 15

// 나이를 판단해서 이름을 출력하기

/* let userList = [
    {name : "Mike", age: 30},
    {name : "Tom", age: 10},
    {name : "Jane", age: 27},
    {name : "Sue", age: 26},
    {name : "Harry", age: 42},
    {name : "Steve", age: 60},
];

let result = userList.reduce((prev, cur) => {
    if(cur.age > 19){
        prev.push(cur.name);
    }
    return prev;
}, []); // 초기값 : []

console.log(result); */

// 반환값 : 0: "Mike", 1: "Jane", 2: "Sue", 3: "Harry", 4:  "Steve"

/*let userList = [
    {name : "Mike", age: 30},
    {name : "Tom", age: 10},
    {name : "Jane", age: 27},
    {name : "Sue", age: 26},
    {name : "Harry", age: 42},
    {name : "Steve", age: 60},
];

let result = userList.reduce((prev, cur) => {
    return( prev += cur.age);
}, 0);

console.log(result);*/

// 반환값 : 196

// 이름이 3개인 사람 출력
/* let userList = [
    {name : "Mike", age: 30},
    {name : "Tom", age: 10},
    {name : "Jane", age: 27},
    {name : "Sue", age: 26},
    {name : "Harry", age: 43},
    {name : "Steve", age: 60},
];

let result = userList.reduce((prev, cur) => {
    if(cur.name.length === 3){
        prev.push(cur.name);
    }
    return prev;
}, []);

console.log(result); */

/* let user = ['Mike', 'Tom', 'Jane'];
let [user1, user2, user3] = users;

console.log(user1); // 'Mike'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane'*/

/*let str = "Mike-Tom-Jane";
let [user1, user2, user3] = str,split('-'); // 문자열로 ['Mike', 'Tom', 'Jane']

console.log(user1); // 'Mike'
console.log(user2); // 'Tom'
console.log(user3); // 'Jane*/

/*function showName(name) {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

showName('Mike', 'Tom');*/
// 2
// 'Mike'
// 'Tom'

/*function showName(...names){
    console.log(names);
}

showName(); // []
showName('Mike'); // ['Mike']
showName('Mike', 'Tom'); // ['Mike', 'Tom']*/

/* 
- 나머지 매개변수
- 전달 받은 모든 수를 더해야함
*/
// +- : 할당 연산자
/*function add(...numbers) {
    let result = 0;
    numbers.forEach((num => result += num));
    console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);*/

/* 
- 나머지 매개변수
- user 객체를 만들어 주는 생성사 함수를 생성
*/

/*function User(name, age, ...skills) {
    this.name = name;
    this.age = age;
    this.skill = skills;
}

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "Js", "React");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);*/

/*let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1, ...arr2]; // ...arr1 -> 1,2,3

console.log(result); // [1, 2, 3, 4, 5, 6]*/

/*let arr1 = [1,2,3];
let arr2 = [...arr]; // [1,2,3]

let user = {name: 'Mike', age:30};
let user2 = {...user};

user2.name = "Tom";

console.log(user.name) // "Mike"
console.log(user.name) // "Tom"*/

/*
전개 구문
arr1 을 [4,5,6,1,2,3] 으로 
*/

/*let arr1 = [1,2,3];
let arr2 = [4,5,6];

arr1 = [...arr2, ...arr1];

console.log(arr1);*/

let user = {name: "Mike"};
let info = {age: 30};
let fe = ["JS", "React"];
let lang = ["Korea", "English"];

user = { // user는 객체
    ...user,
    ...info,
    skills: [...fe, ...lang],
};

console.log(user);