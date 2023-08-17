// 스르레드 & 레스트 연산자
// 스프레드 연산자 - 배열의 원소나 객체의 프로퍼티를 나누는데 사용
// ex) const newArray = [...oldArray, 1, 2]
/*const newObject = [...oldObject, newProp:5]
oldObject가 새로운 프로퍼티를 갖게 되면 newProp: 5로 덮어쓰여짐
-> 그래서 갖고 있는 프로퍼티가 우선권을 갖음 
=> 스프레드 연산자*/

/*Rest 연산자
함수의 인수 목록을 배열로 합치는데 사용*/

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
// 모든 원소들을 배열로 전달 받음

const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    // 이전 객체의 모든 프로퍼티 값을 복사하기 위해사 person에 스프레드 연산자를 사용
    age: 28
}

// 앞에 나온 person객체를 취해서 스프레드 연산자가 있는 newPerson에 전달 -> 스프레드 연산자
console.log(newPerson);

// Rest 연산자
/*const filter = (...agrs) => {
    return agrs.filter();
    // 배열 메소드를 filter() 처럼 사용할 수 있고, filte는 배열에서 전달되는 모든 원소들에 대해 함수를 싫행
    // 원소를 전달하고 화살표 함수를 사용해서 원소가 1과 같은지, 아닌지를 true나 false로 반환
}*/

const filter = (...arrs) => {
    return arrs.filter(el => el === 1);
    // 화살표 함수로 내장 된 filter 메소드에 전달
}

console.log(filter());
// 매개변수 (1,2,3)을 전달한 다음 실행하면, 배열로 [1]이 나오는데
// 점 3개로 레스트 연산자를 생성해서 배열을 필터링 했기 때문