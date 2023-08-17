// let n = "name";
// let a = "age";

// const user = {
//     [n]: "Mike",
//     [a]: 30,
//     [1 + 4]: 5,
// };

// console.log(user);

// function makeObj(key, val){ // 객체를 만들어지는 암시
//     return { // 객체를 리턴(=반환)
//         [key] : val
//     }
// }

// const obj = makeObj("나이", 33); // 어떤게 키가 될지도 모르는 객체를 만들 때 유용

// console.log(obj);
//---

// const user = {
//     name: "Mike",
//     age: 30,
// };

// const user2 = user;
// user2.name = "Tom";

// console.log(user);
// console.log(user2); // 이렇게 작성하면 안됨. 복제가 제대로 이루어지지 않았음

// {name: 'Tom', age: 30}
// {name: 'Tom', age: 30} 
// user와 user2의 이름을 둘다 받아옴. 모두 하나의 객체를 받아옴 

// 복사를 할 때는 Object.assign()를 사용해야 함

// const user = {
//     name: "Mike",
//     age: 30,
// };

// const user2 = Object.assign({}, user); // {}의 값이 user애 들어가면서 복제를 이룸
// user2.name = "Tom";

// console.log(user);
// console.log(user2);

// 유저의 key값

// const user = {
//     name: "Mike",
//     age: 30,
// };

// const result = Object.keys(user);

// console.log(result);

// ['name', 'age']
// 배열로 반환

// const user = {
//     name: "Mike",
//     age: 30,
// };
    
// const result = Object.values(user);
    
// console.log(result);

// values로 만들면 배열로 값이 출력
// ["Mike", 30]

// Object.entries

// const user = {
//     name: "Mike",
//     age: 30,
// };
        
// const result = Object.entries(user);
        
// console.log(result);

// [Array(2), Array(2)]
// 0 : (2) ['name', 'Mike']
// 1 : (2) ['age', 30]
// length : 2

let arr = [
    ['mon', '월'],
    ['tue', '화']
]

const result = Object.fromEntries(arr);

console.log(result);

// 배열 안에 배열이 2개