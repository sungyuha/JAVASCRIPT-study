const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 로그인 버튼 클릭
function onLoginBtnClick() {
    // username 유효성 검사
    const username = loginInput.value;
    if( username === "" ) {
        alert("이름을 적어주세요.");
        // username이 15글자 초과라면 경고창
    } else if( username.length > 15 ) {
        alert("15자 이상입니다.");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);