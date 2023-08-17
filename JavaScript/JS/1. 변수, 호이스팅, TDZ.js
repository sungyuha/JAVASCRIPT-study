function add () {
  // Block-level scoped
}

//if () {
  // Block-level scoped
//}

for( let i=0; i<10; i++ ){
  // Block-level scoped
}

// 스코프 

const age = 30;

if ( age > 19 ) {
    var txt = '성인';
}

console.log(txt); // '성인'


function add( num1, num2 ) {
    var result = num1 + num2;
} 

add ( 2, 3 );

console.log(result);