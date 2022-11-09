/*function* fn() {
    yield 1;
    yield 2;
    yield 3;
    return "finish";
}

const a = fn();*/

/* a
fn {<suspended>} */

/*a.next(); // next를 호술하면 가장 가까운 yield문을 만날 때까지 실행되고 데이터 객체를 반환
1
{value: 1, done: false}*/

/*function* fn() {
    try {
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        return "finish";
    } catch (e) {
        console.log(e);
    }
}

const a = fn();
*/

// for of

function* fn() {
    yield 4;
    yield 5;
    yield 6;
}

const a = fn();
