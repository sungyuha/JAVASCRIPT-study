/*class Person {
    name = 'Max' // 프로퍼티 : 클래스에 정의한 변수
    call = () => {} // 메소드 : 클레스에 정의한 함수
}

// 클래스는 키워드로 정의, 프로퍼티와 메소드를 가질 수 있음
// 프로퍼티랑 메소드를 추가할 때는 new 키워드로 클래시의 인스턴스를 생성
// 클래스는 생성자 함수는 만드는 가장 편한 방법
// 클래스를 가지고 자바스크립트 객체를 생성할 수 있음
// 클래스 상속 가능
// 다른 클레스에 있는 프로퍼티와 메소드를 상속하면 잠재적으로 새로운 프로퍼티와 메소드를 추가

// 프로토타입
class Person {
    // 가장 간단한 프로퍼티의 형태는 생성자 함수를 추가
    // 어떤 클레스를 추가해서 클래스의 객체를 생성할 때마다 실행 됨
    constructor() {
        this.name = 'Max';
        // this키워드로 프로퍼티를 설정
    }
    prinMyName() {  // 메소드 추가
        console.log(this.name);
        // 출력 함수에 생성한 이 this.name을 전달
    }
}
const person2 = new Person();
person2.prinMyName();
// 이 클래스를 new Person() 메소드를 사용해서 상수 person에 저장하고 person.printMyName을 실행
// 결과 값 : Max
*/
// *클래스는 상속 가능
class Human {
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
        // person클래스는 extend 키워드를 사용해서 human클래스를 상속받아 확장 할 수 있음
    }
}

class Person extends Human {
    // 다른 클래스를 확장하고 생성자를 실행한다면, 생성자 함수 안에 super() 메소드를 추가해야 함
    constructor() {
        super();
        this.name = 'Max';
        // this키워드로 프로퍼티를 설정
        this.gender = 'female';
    }
    prinMyName() {
        console.log(this.name);
        // 출력 함수에 생성한 이 this.name을 전달
    }
}
const person = new Person();
person.prinMyName();
// 프로퍼티와 메소드를 상속해서 Person 클래스에서도 사용 가능
person.printGender();