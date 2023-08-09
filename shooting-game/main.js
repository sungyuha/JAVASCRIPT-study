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
let spaceshipX = canvas.width/2-32;
let spaceshipY = canvas.height-64;

// 발사 된 총알 아이템들을 배열에 저장
let bulletList = []; // 총알 아이템들을 저장하는 리스트

// 총알 아이템 좌표
function Bullet() {
    this.x = 0; // x는 Bullet의 함수에 속함. x값 정의
    this.y = 0; // y는 Bullet의 함수에 속함 y값 정의
    // 초기화시키는 함수
    this.init = function(){
        // 총알 아이템 발사는 우주선에서 시작
        this.x = spaceshipX + 7;
        this.y = spaceshipY;
        // x,y,init 값 저장
        bulletList.push(this);
    };

    // 총알 아이템 발사 (업데이트 함수)
    this.update = function() {
        this.y -= 7;
    }
}

function loadImage() {
    // 게임 캔버스 배경화면
    backgroundImage = new Image();
    backgroundImage.src="images/background.jpg";

    // 우주선 아이콘
    spaceshipImage = new Image();
    spaceshipImage.src="images/spaceship.png";

    // 게임 총알 아이템
    bulletImage = new Image();
    bulletImage.src="images/bullet.png";

    // 게임 적군
    enemyImage = new Image();
    enemyImage.src="images/enemy.png";

    // 게임 오버
    gameOverImage = new Image();
    gameOverImage.src="images/gameover.png";
}

// 어떤 버튼이 눌렸는지 keysDown 변수에 저장
let keysDown={}
// 방향키를 누르면
function setupKeyboardListener() {
    // 이벤트 읽어오는 함수
    document.addEventListener("keydown", function(event){ // 매개변수 event 들어옴
        // keydown이벤트가 발생하면 호출
        keysDown[event.key] = true;
        //console.log("키다운객체에 들어간 값은?", keysDown);
    });
    // 방향키를 누르고나면(버튼 클릭 후)
    document.addEventListener("keyup", function(event) {
        // 버튼 클릭 후 keysDown 값 삭제
        delete keysDown[event.key]
        //console.log("버튼 클릭후",keysDown);

        // 만약에 키를 값이 눌리면 아이템인 총알 아이템 발사
        if(event.key == " ") {
            createBullet() // 총알 아이템 생성 함수
        }
    });
}

// 총알 아이템을 발사해주는 함수
function createBullet() {
    console.log("총알 아이템생성!");
    let b = new Bullet() // 총알 아이템 생성
    // 총알 아이템들을 배열에 저장하고 호출
    b.init();
    console.log("새로운 총알아이템 리스트!", bulletList);
}

// 우주선의 xy 좌표가 바뀌고
function update() {
    //우주선이 오른쪽으로 간다 : x좌표의 값이 증가한다
    // 39(== ArrowRight) 버튼이 눌리면
    if('ArrowRight' in keysDown) {
        spaceshipX += 3; // 우주선의 속도
    } // 오른쪽

    // 우주선이 왼쪽으로 간다 : x좌표의 값이 감소한다
    // 37(== ArrowLeft) 버튼이 눌리면
    if('ArrowLeft' in keysDown) {
        spaceshipX -= 3;
    } // 왼쪽

    // 우주선의 좌표값이 무한대로 업데이트가 되는게 아닌! 경기장 안에서만 있게 하려면
    if(spaceshipX <=0 ) {
        spaceshipX = 0;
    }
    if(spaceshipX >= canvas.width-64) {
        spaceshipX = canvas.width - 64;
    }

    // 총알 아이템의 y좌표 업데이트 함수 호출
    for(let i = 0; i < bulletList.length; i++) {
        bulletList[i].update()
    }
}

// 이미지 보여주는 함수
// render는 ui를 그려주는 걸 표헌함
function render() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);

    // 총알 아이템 UI로 그려주기
    for(let i = 0; i < bulletList.length; i++) { // 총알 아이템리스트 만큼 증가
        // 총알 아이템을 그려줄건데 bulletList i번째에 있는 x값과 bulletList i번째에 있는 y값
        ctx.drawImage(bulletImage, bulletList[i].x, bulletList[i].y)
    }
}

function main() {
    update(); // 좌표값을 업데이트하고
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

// 다시 render 그려준다

/* 
총알 아이템 만들기
1) 스페이스바를 누르면 총알 아이템 발사
2) 총알 아이템 발사 == 총알 아이템 y값이 -- , 총알 아이템의 x 값은? 스페이스를 누른 순간의 우주선의 x좌표
3) 발사 된 총알 아이템들은 배열에 저장한다
4) 모든 총알 아이템들은 x,y 좌표값이 있어야 한다
5) 총알 아이템은 배열을 가지고 render 그려준다
*/