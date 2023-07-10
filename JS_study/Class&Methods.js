// 프로퍼티 - 클래스와 객체 추가되는 변수
// 메소드 - 클래스와 객체에 추가되는 함수같은 것
// 즉, 메소드는 값으로 함수를 저장하는 프로퍼티
// 프로퍼티와 생성자함수를 설정하는 this

// 차세대 자바스크립트에서는 프로퍼티를 설정할 때 아래 구문을 사용
// ES6
/*constructor () {
    this.myProperty = 'value'
}*/
// ES7
//myProperty = 'value'

class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
        // this키워드를 사용해서 프로퍼티 gender에 접근
    }
}

class Person extends Human {
        name = 'Max';
        // this없이 name을 호출하면 되고, 원하면 gender=femalie로 설정하면 됨
        gender = 'female';

    prinMyName = () => {
        console.log(name);
    }
}

const person = new Person();
person.prinMyName();
person.printGender();