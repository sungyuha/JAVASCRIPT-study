// Generator 함수는 iterable 객체를 반환하는 특별한 형태의 함수

// generator 함수 선언하기
function* gen1() {
    // ...
    }
    
    // 표현식으로 사용하기
    const gen2 = function* () {
        // ...
    }
    
    // 메소드 문법으로 사용하기
    const obj = {
        * gen3() {
        // ...
        }
    }

    // Generator 함수는 호출되어도 즉시 실행되지 않고, 대신 함수를 위한 Iterator 객체가 반환
    // Iterator의 next() 메서드를 호출하면 Generator 함수가 실행되어 yield 문을 만날 때까지 진행하고, 해당 표현식이 명시하는 Iterator로부터의 반환값을 반환
    // yield* 표현식을 마주칠 경우, 다른 Generator 함수가 위임(delegate)되어 진행

    /**
     * Generator 함수를 사용할 때 주의점!!
     * Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있음
     */