// 객체
const obj = {
  // 키: 값
  key1: 1234,
  1: 1234, // 값은 중복되도 괜찮음
  1: 1235, // 키가 중복될 경우에는?
  // 숫자의 경우에는 문자열로 변환되어서 키로 들어가는 것
  // 가장 최신으로 작성한 내용이 덮어씌우기를 함
  // ...rest -> 이걸로 default한 다음에
  // 추가로수정하고자하는키 : 값 해서 테크닉이 있음. (덮어씌우기)
  // 다른변수를 키값으로 삼는다던가 x. 함수 등을 키로 쓸 순 없음.
};

console.log(obj);
console.log(obj.key1); // 변수명명 규칙을 준수했을 경우 (알파벳과 $_로 시작하고, 중간에 공백없을 것)
console.log(obj[1]); // 숫자로 시작하거나 공백을 포함하는 경우
console.log(Object.keys(obj)); // 키들의 배열
console.log(Object.values(obj)); // 값들의 배열
console.log(Object.entries(obj)); // [키, 값]의 배열
// for in.

// Array
// 0개 이상의 데이터 묶음 -> 0개 이상 -> [] 빈 배열.
const arr = [1, 2, 3];
// CRUD...
// for of.
console.log(arr);
arr.length = 0; // 길이 -> arr.length -> 길이.
console.log(arr); // length를 0으로 하면 지워진다

//Map
//object?
const dataobj = {
  name: "kim",
  job: "programmer",
  age: 100,
};

// for (const v of dataobj){
//     TypeError: dataobj is not iterable
for (const v of Object.entries(dataobj)) {
  console.log(v);
}

const map = new Map();
map.set("name", "lee");
map.set("job", "engineer");
map.set("age", 1000);
console.log(map);
console.log(map.get("age"));
console.log(map.get("carrer"));
console.log(map.has("name"));
console.log(map.size);
for ( const v of map){
    console.log(v);
}

const map2 = new Map([["a","a"]]);
console.log(map2);

// Set
const set = new Set();
// set > 키 = 값.
// key > map이나 set은 호출할 key가 존재, 해싱을 거침 > 중복을 허용하지 않음

