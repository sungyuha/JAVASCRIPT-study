// const title = document.querySelectorAll(".hello h1"); 
// 똑같은 클래스 사용할때 전체 가지고 오고 싶으면 꼭 querySelectorAll -> 배열의 형태로 출력 됨
// 아니면 querySelector 만 사용시 첫 번째만 가지고 옴

const title = document.querySelector("div.hello:first-child h1");
// 조건에 맞는 첫 번째를 요소를 가져옴

/*ㅜconst title = document.querySelector("#hello");
const title = document.getElementById("hello");*/ 
// 위의 둘의 코드는 같은 것

// console.log(title);

// title.style.color = "blue";

function handleTitleClick(){
    // console.log("title was clicked!");
    title.style.color = "blue";
}

function handleMouseEnter(){
    tilte.innerText = "mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseEnter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);