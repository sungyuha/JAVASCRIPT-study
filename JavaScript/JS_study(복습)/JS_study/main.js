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