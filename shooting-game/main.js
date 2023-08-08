// 캔버스 셋팅
// 게임 창 캔버스 변수
let canvas;
// 최종적으로 이미지를 그려주는 것을 도와주는 변수
let ctx;

// 캔버스 
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")

// 캔버스 사이즈
canvas.width=400;
canvas.height=700;

// HTML에 붙여줌
document.body.appendChild(canvas);

// 이미지 가져오기
let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;

// 우주선 좌표
let spaceshipx = canvas.width/2-32;
let spaceshipy = canvas.height-64;

function loadImage() {
    // 게임 캔버스 배경화면
    backgroundImage = new Image();
    backgroundImage.src="images/background.jpg";

    // 우주선 아이콘
    spaceshipImage = new Image();
    spaceshipImage.src="images/spaceship.png";

    // 게임 총알
    bulletImage = new Image();
    bulletImage.src="images/bullet.png";

    // 게임 적군
    enemyImage = new Image();
    enemyImage.src="images/enemy.png";

    // 게임 오버
    gameOverImage = new Image();
    gameOverImage.src="images/gameover.png";
}

// 방향키를 누르면
function setupKeyboardListener() {
    // 이벤트 읽어오는 함수
    document.addEventListener("keydown", function(event){ // 매개변수 event 들어옴
        // keydown이벤트가 발생하면 호출
        console.log("무슨 키가 눌렸어?", event.key);
    })
}

// 이미지 보여주는 함수
// render는 ui를 그려주는 걸 표헌함
function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipx, spaceshipy);
}

function main() {
    // 이미지 호출
    render()
    // console.log("Animation call Frame function");
    // 애니메이션처럼 프레임을 여러번 호출
    requestAnimationFrame(main)
}

// 함수 호출
loadImage();
setupKeyboardListener();
main();

// 방향키를 누르면
// 우주선의 xy 좌표가 바뀌고
// 다시 render 그려준다