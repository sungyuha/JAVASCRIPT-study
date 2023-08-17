/*const pr = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve('OK');
        reject(new Error("err...."));
    }, 1000);
});

console.log("시작");
pr.then(result => {
    console.log(result);
})
    .catch(err => {
    console.log(err);
    }).finally(()=> {
    console.log("끝");
    });
*/
/* 
시작
Error: err....
    at 16.promise.js:4:16
끝
*/

// 총 3개의 상품을 주문
/*const f1 = (callback) => {
    setTimeout( function () {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

const f2 = (callback) => {
    setTimeout( function () {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

const f3 = (callback) => {
    setTimeout( function () {
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

console.log('시작');
f1(function () {
    f2(function () {
        f3(function () {
            console.log("끝");
        });
    });
});
*/
// callback hell 

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
/*
// 프로미스 체이닝 (Promise chaining)
console.log("시작");
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log) // 에러 처리
    .finally(() => {
        console.log("끝");
    });
*/
/*
시작
1번 주문 완료
2번 주문 완료
3번 주문 완료
끝
*/
/*
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
            rej("XXX");
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
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log) // 에러 처리
    .finally(() => {
        console.log("끝");
    });
*/
    /*
시작
1번 주문 완료
xxx
3번 주문 완료
끝
*/

// 각 주문의 시간이 다름

// 동시에 코드 진행 -> 비동기
/*
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
            rej("XXX");
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
*/
/*
// Promise.all
Promise.all([f1(), f2(), f3()]).then((res) => {
    //배열로 받음, 위의 3개인 f1(), f2(), f3()이 완료되어야 then이 실행
    console.log(res);
});
*/
/*console.log("시작");
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log) // 에러 처리
    .finally(() => {
        console.log("끝");
    });
*/

/*
undefined 는 message에 값이 없어서
(3) ['1번 주문 완료', '2번 주문 완료', '3번 주문 완료']
*/

console.time("x");
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("x")
});

/*
undefined 는 message에 값이 없어서
(3) ['1번 주문 완료', '2번 주문 완료', '3번 주문 완료']
x: 
3008.608154296875 ms
*/