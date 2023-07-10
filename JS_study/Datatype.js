// 참조형 및 원시형 데이터 타입

const number = 1;
// 기본형
// number, string, boolean -> 기본 자료형 자료 타입
// 재할당 하거나 변수를 다른 변수를 저장할 때마다 값을 복사
const num2 = number;
console.log(num2);

// 객체와 배열은 참조형 자료 타입

const person = {
    name: 'Max'
};
const secondPerson = person;

// 1. 객체 person을 생성했고, name 프로퍼티를 갖음 
// 2. secondPerson을 생성한 다음 값으로 person을 할당

person.name = 'Maun';
console.log(secondPerson);
// 3. 츨력함수에 secondPerson 전달
// 4. 찻 번째 person과 같은 값을 출력하는데, 사실 객체 person을 복사한 것은 아니고,
// 5. 대신, 객체 person은 메모리에 저장되어 있고, 상수 person에는 메모리에 있는 주소를 가리키는 포인터를 저장
// 6. 그래서 person을 secondPerson에 할당하면 초인터가 복사 됨
// 7. 복사 된 것을 가진 다음에 person.name을 Maun로 변경하면 
// 8. Max가 출력 되는것이 아닌, person을 복사해서 secondPerson에 저장했기 때문에 이름이 변경 되지 않음
// 9. 8번과 같은 이유는 단지 포인터를 복사했고, person아 가리키는 메모리에 있는 동일한 객체를 가리키기 때문

// **객체와 배열이 참조형 자료 타입
// 만약 재할당한다면, 값이 아닌 포인터를 복사하는 것이고, 진짜로 복사하고 싶다면, 새로운 객채를 생성해서 전체 객체를 복사하는 것이 아니라 프로퍼티를 복사햐여 함

const person = {
    name: 'Max'
};

const secondPerson2 = {
    ...person
};

person.name = 'Maun';

console.log(secondPerson2);