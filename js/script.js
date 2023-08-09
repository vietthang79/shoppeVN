// const decrementBtns = document.querySelectorAll('.decrement-btn');
const incrementBtns = document.querySelectorAll('.increment-btn');
const quantityValues = document.querySelectorAll('.quantity-value');

decrementBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let value = parseInt(quantityValues[index].textContent);
    if (value > 1) {
      value--;
      quantityValues[index].textContent = value;
    }
  });
});

incrementBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    let value = parseInt(quantityValues[index].textContent);
    value++;
    quantityValues[index].textContent = value;
  });

// function chia(soA, soB) {
//  return soA % soB == 0 ? `so '${soA}' chia het cho so '${soB}'` :`so '${soA}' khong chia het cho so '${soB}'`;
// }
// console.log(chia(10,2))
// console.log(chia(11,2))

// function S_hcn (dai,rong){
//   return dai*rong;
// }
// console.log(S_hcn(10,20));
// console.log(S_hcn(13,20))

// function checkChuoi(string) {
//   const maDoc = "script";
//   const validate = string.length >= 5 && string.length <= 20 && string != maDoc;
//   if (validate) {
//     console.log(`Chuoi '${string}' hop le`);
//   } else {
//     console.log(`Chuoi '${string}' khong hop le`);
//   }
// }
// checkChuoi("asdasdasdasdasdasd");
// checkChuoi("stng");
// checkChuoi("script");
// checkChuoi(2);
// checkChuoi("asdasdads");
// checkChuoi("xinchao");
// checkChuoi("javascript");

// //lab2

// const arrayNum = [5, 6, 4, 3, 2, 5, 7, 8, 9];
// arrayNum.push(5);
// arrayNum.push(9);
// arrayNum.push(1);

// // console.log(arrayNum[1],arrayNum[3],arrayNum[5])

// // arrayNum[2]=60;
// // console.log(arrayNum.length)

// // arrayNum.splice(6, 3);
// // console.log(arrayNum);

// // arrayNum.splice(0, 3);
// // console.log(arrayNum);
// for (var i = 0; i < arrayNum.length; i++) {
//   console.log(`Giá trị tại vị trí thứ ${i} là ${arrayNum[i]}`);
// }

// function chia6(a) {
//   const result = [];
//   for (var i = 0; i < a; i++) {
//     if ( i % 6 == 0 ) {
//       result.push(i);
//       console.log(`${i}`);
//     }
//   }
// }
// chia6(50)

// function mChian(n, m) {
//   const result = [];
//   for (var i = 0; i < n; i++) {
//     if (i % m == 0) {
//       result.push(i);
//       console.log(i);
//     }
//   }
// }
// mChian(10, 4);

// function congMang(arr, n) {
//   const mangA = [];
//   for (var i = 0; i < arr.length; i++) {
//     mangA.push(arr[i] + n);
//   }
//   return mangA;
// }
// console.log(congMang([1, 2, 3], 1));

// function xuatTinNhan(tinNhan, soLan) {
//   for (var i = 0; i < soLan; i++) {
//     console.log(tinNhan);
//   }
// }
// xuatTinNhan('xin chao', 10)

// function tinhTong(n) {
//   let tong = 0;
//   for (var i = 1; i < n; i++) {
//     tong += i;
//   }
//   return tong;
// }
// console.log(tinhTong(5))

// function soChia2va3 (n){
//   let tong = 0;
//   for(var i =1; i < n; i ++){
//     if(i % 2 == 0 && i % 3 == 0){
//       tong += i;
//     }
//   }
//   return tong;
// }
// console.log(soChia2va3(20))

// function tinhTongChiaHet(so, a, b) {
//   let tong = 0;
//   for (var i = 1; i < so; i++) {
//     if (i % a == 0 && i % b == 0) {
//       tong += i;
//     }
//   }
//   return tong;
// }

// console.log(tinhTongChiaHet(20, 2, 3))
