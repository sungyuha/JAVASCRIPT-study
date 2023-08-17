// const title = document.querySelectorAll(".hello h1"); 
// 똑같은 클래스 사용할때 전체 가지고 오고 싶으면 꼭 querySelectorAll -> 배열의 형태로 출력 됨
// 아니면 querySelector 만 사용시 첫 번째만 가지고 옴

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = ("clicked");
     // toggle은 h1의 ClassList에 clicked class가 이미 있는지 확인해서 만약 있다면, toggle이 cliked를 제거해줌
    // 만약, h1의 classList에 clicked가 존재하지 않는다면 toggle은 clicked를 classList에 추가 해줌
    if (h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    h1.classList.toggle(clicked);
}    
h1.addEventListener("click", handleTitleClick);