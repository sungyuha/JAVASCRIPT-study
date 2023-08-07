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
main();
