// promise를 사용하고 있는 비동기 함수를 동기 함수처럼 사용할 수 있게 해주는 도구인 async와 await
// promise 사용에시. 서버에서 데이터를 가져오는 경우

// await - 쉽세 이야기해서 then의 개념
/*const user = await getUser();

const father = await getFather(user.id);

const grandFather = await getgrandFather(father.id);*/

/* arrow function의 표현 방식
async 키워드를 피라미터 앞에 
const func = async() => { ... } */

/* 
일반 function의 표현 방식
일반 함수의 경우는 async를 function 앞에 작성
async function func() { ... }
*/

const func = async() => {
    const user = await getUser();
    const father = await getFather(user.id);
    const grandFather = await getgrandFather(father.id);
    // async & await 사용하면 비동기 작업이 가능
}