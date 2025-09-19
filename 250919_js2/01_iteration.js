// while > 특정 조건(boolean) 혹은 종료 조건을 일단 명시하지 않고 반복하다가 중간에 if 등으로 break.

//for는 횟수를 정하고 반복
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += 1;
}
console.log("sum", sum);

for (let i = 3; i < 50; i += 3) {
  console.log(i);
}

//let은 재할당이 불가능하지만 block scope로 i는 {}안에서만 사용, 밖에서는 모름

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

for(let i = 0; i<10;i++){
    if(i%2){
        continue;
    }
    console.log("i = ",i);
}

let result = 1;
for (let i = 1; i<=50; i++){
    if (result >= 1000) //{}가 1줄이면 생략도 가능.
        break;
    result *= i;

}
console.log(result);

for(;;){ //무한반복문, 종료식을 생략할 경우
    break;
}