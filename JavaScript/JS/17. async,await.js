/*async function getName() { // async 키워드를 붙이면 항상 promise를 반환
    return "Mike";
}

// console.log(getName());

// Promise {<fulfilled>: 'Mike'}

getName().then((name) => {
    console.log(name); // name이 return 됬으니
});*/
// 그래서 함수를 호출하고 then 사용 가능

/* Mike */
/*
async function getName() {
    // return Promise.resolve('Tom');
    throw new Error("err..");
}

/*getName().then((name) => {
    console.log(name);
});*/
// Tom
// 함수 내부에서 예외가 발생하면 rej 상태의 값이 반환 됨
/*
getName().catch((err) => {
    console.log(err);
});
*/
/*
Error: err..
    at getName (17. async,await.js:18:11)
    at 17. async,await.js:27:1
*/

// await

/*function getName(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
};

async function showName() {
    const result = await getName('Mike'); 
    // await 키워드 옆에는 프로미스가 옴
    // 그 프로미스가 처리 될 때까지 기다림
    console.log(result);
}
// 그래서 위의 코드는 1초 후에 Mike가 찍힘

console.log("시작");
showName();*/

/*const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

console.log("시작");
async function order() {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
    console.log("종료");
}
order();*/

// rej 일 경우
/*const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res("2번 주문 완료");
            rej(new Error("err.."));
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};*/

/*console.log("시작");
async function order() {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
    console.log("종료");
}
order();*/

// try..catch

/*console.log("시작");
async function order() {
    try {
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    } catch (e) {
    console.log(e); // 에러가 발생하면 이 코드에서 알 수 있음
    }
    console.log("종료");
}
order();*/
/*
시작
1번 주문 완료
Error: err..
    at 17. async,await.js:107:17
종료
*/

const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // rej(new Error("err.."));
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// Promise.all
console.log("시작");
async function order() {
    try {
        const result = await Promise.all([f1(), f2(), f3()]); // 프로미스 함수 내부에는 배열로 넣어줌
        console.log(result);
    } catch (e) {
        console.log(e);
    }
    console.log("종료");
}
order();

/*
시작
undefined
undefined
(3) ['1번 주문 완료', '2번 주문 완료', '3번 주문 완료']
종료
*/