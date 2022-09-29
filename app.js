// const title = document.querySelectorAll(".hello h1"); 
// 똑같은 클래스 사용할때 전체 가지고 오고 싶으면 꼭 querySelectorAll -> 배열의 형태로 출력 됨
// 아니면 querySelector 만 사용시 첫 번째만 가지고 옴

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){ 
        h1.className = ""; 
        // = 면  해당 되는 값을 className 값으로 변경
    } else {
        h1.className = "clickedClass";
        // string을 두 번 사용하면 에레 발생할 확률이 높아짐
    }
}

h1.addEventListener("click", handleTitleClick);