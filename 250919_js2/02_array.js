// 배열의 조건
// 1. 동일한 타입으로 묶여진 0개이상의 데이터 묶음
// 2. 인덱스를 사용하여 순서를 참조할 수 있어야 함
// 3. 길이는 최초 메모리에 배정하여 선언한 길이에 고정적

//자바스크립트 배열
//1. 0개 이상의 데이터 묶음
//2. '숫자'로 되어 있는 키의 경우 인덱스로 분류되어 사용가능
//3. 길이는 유동적이며 심지어 외부에서 변화가능한 값

console.log([1, 2, 3, 4, 5]);

const arr = [1, 3, 5, 7, 9];
console.log(arr);

//C.R.U.D > 일반적으로 데이터 다루기
//Create > 추가, 생성
//Read > 조회, 불러오기
//Update > 수정, 덮어씌우기
//Delete > 삭제
//배열.push(추가할 데이터);

const numArr = [1, 1, 1];
numArr.push(10);
console.log(numArr);
numArr.unshift(100); //맨앞에 추가
console.log(numArr);

console.log(numArr.length);
console.log("numArr[0]", numArr[0]);

let case1 = [1, 2, 3];

numArr.splice(2, 0, 64); //2번째 인덱스에 0개 삭제후 64를 삽입.
console.log(numArr);

console.log(numArr.slice(3, 5)); //끝절 포함 안함

numArr[3] = 32;
console.log(numArr);

numArr.pop(); //맨끝 삭제
numArr.shift(); //맨앞 삭제  <-> 맨앞 추가는 unshift

console.log(numArr);
