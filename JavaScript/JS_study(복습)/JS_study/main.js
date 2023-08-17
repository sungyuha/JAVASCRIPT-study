/*
ES2015에서 도입된 클래스는 생성자의 기능을 대체함. class 표현식을 사용하면, 
생성자와 같은 기능을 하는 함수를 훨씬 더 깔끔한 문법으로 정의
*/

/*
- ES2015 Class 문법
JavaScript Class 는 ECMAScript 6을 통해 소개되었습니다.
ES2015의 Class는 기존 prototype 기반의 상속을 보다 명료하게 사용할 수 있도록 문법을 제공합니다. 
이를 Syntatic Sugar라고 부르기도 합니다.

JavaScript는 이 프로토타입(prototype)을 기반으로 상속을 흉내내도록 구현해 사용합니다.
*/

class TV{
    name = '';
    price = 0;
    size = '';
    // 생성자 : 클래스에 있는 속성값을 초기화 시켜주는 기능
    constructor(name, price, size) { // 값을 받아올 수 있게 매개변수로 받아옴
        // 이 클래스 안에 있는 속성값을 호출
        this.name = name,
        this.price = price,
        this.size = size;
    };
};

// super : 키워드를 통해 부모 클래스의 메소드에 직접 접근 가능

class Melon {
    getColor() {
        return "제 색깔은 초록색입니다.";
    }
}

class WaterMelon extends Melon {
    getColor() {
    return super.getColor() + " 하지만 속은 빨강색입니다.";
    }
}

const waterMelon = new WaterMelon();
waterMelon.getColor(); // 제 색깔은 초록색입니다. 하지만 속은 빨강색입니다.

/* 
super 키워드의 동작 방식
- 생성자 내부에서 super를 함수처럼 호출하면, 부모 클래스의 생성자가 호출됩니다.
- 정적 메소드 내부에서는 super.prop과 같이 써서 부모 클래스의 prop정적 속성에 접근할 수 있습니다.
- 인스턴스 메소드 내부에서는 super.prop과 같이 써서 부모 클래스 prop 인스턴스 속성에 접근할 수 있습니다.
*/

class Person {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        // 내가 보고 있는 인스턴스를 가르킴
        return `제 이름은 ${this.name}입니다.`;
    }
}

class Student extends Person {
// 분해 대입 , rest에는 객체가 들어감
// 나머지 속성을  ...rest
    constructor({ grade, ...rest }) {
        // 부모 클래스의 생성자를 호출할 수 있습니다.
        super(rest);
        console.log(rest); //{ name: '윤아준', age: 19 }
        this.grade = grade;
    }
    introduce() {
        // 부모 클래스의 `introduce` 메소드를 호출할 수 있습니다.
        return super.introduce() + ` 저는 ${this.grade}학년입니다.`;
    }
}

//this가 가르키는 것이 다를수 있다.
const p = new Person({ name: "신하경", age: 20 });
p.introduce(); //this는 p

const q = new Person({ name: "신하경", age: 20 });
q.introduce(); // this는 q

const s = new Student({ grade: 3, name: "윤아준", age: 19 });
s.introduce(); // 제 이름은 윤아준입니다. 저는 3학년입니다.
