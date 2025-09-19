const arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr2.push((i + 1) * 9);
}
console.log(arr2);

for (let i = 0; i < arr.length; i++) {
  arr[i] /= 100;
}
console.log(arr);

//for of. > index사용 없이 array자체를 탐색하는 경우

for (const v of arr) {
  console.log(v); //v는 한번의 반복에만 존재하고 소멸.
//   v += 10; //영향없음
} //헷갈릴까봐 const 권장!

for (let i = 0; i < 10; i++) {
  console.log(i);
  i += 10; //영향받음
}

for(let i =1; i<=5; i++){
    console.log("*".repeat(i));
}

const matrix = [];
for(let i =1; i<=5; i++){
    const row = [];
    for(let j =1; j<=5; j++){
        row.push("*");
    }
    matrix.push(row);
}
console.log(matrix);