// Promise : 자바스크립트 비동기 처리에 사용되는 객체

/*
new Promise((reselve, reject) => {
    if(성공) resolve(정보);
    if(실패) reject(이유);
})
 */

/*const getDate = () => {
    // resolve, reject 중 하나는 무조건 사용해야 함
    return new Promise((res, rej) => {
        res(2);
    });
};

console.log(getDate());*/

const getDate = () => {
    return new Promise((res, rej) => {
        // 에러를 반환
        rej("error!");
    });
};

getDate()
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

    // error!

// 프로미스에서 then 방식을 자주 사용하지 않음