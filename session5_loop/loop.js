// for (let index = 0; index < 3; index++) {
// 	// console.log("Hello");
// 	console.log(index);
// }

//BT1
//in 1->10
// for (let index = 1; index < 11; index++) {
// 	console.log(index);
// }

//in số lẻ 0->10
//dùq if
// for (let index = 0; index < 10; index++) {
// 	if (index%2!=0){
// 		console.log(index);
// 	}
// }
//ko dùng if
// for (let index = 1; index < 10; index+=2) {
// 	console.log(index);
// }

//in số chẵn 0 -> 10
//dùq if
// for (let index = 0; index < 11; index++) {
// 	if (index%2==0) {
// 		console.log(index);
// 	}
// }
//ko dùq if
// for (let index = 0; index < 11; index+=2) {
// 	console.log(index);
// }

//in từ 10 ->0
// for (let index = 10; index >-1 ; index--) {
// 	console.log(index);
// }

//Tính tổq từ 0->10
// var sum=0
// for (let index = 0; index <= 10; index++) {
// 	sum=sum+index;
// }
// console.log(sum);

//Tổq số lẻ 0->n
let n=Number(prompt("Nhập số n")); //n dùq chuq
let s=0	//s dùq chuq
// for (let index = 1; index <= n; index+=2) {
// 	s=s+index;
// }
// console.log("Tổq số lẻ từ 0 -> "+n+" là: "+s);

//Tính s=1/1+1/2+1/3+...+1/n
// for (let index = 1; index <= n; index++) {
// 	s=s+1/index;
// }
// console.log(s);

//Tính s=1/(1*2)+1/(2*3)+...+1/((n+1)*n)
// for (let index = 1; index <= n; index++) {
// 	s=s+(1/((index+1)*index));
// }
// console.log(s);

//Tính s=1/2+2/3+3/4+...+(n+1)/n
for (let index = 1; index <= n; index++) {
	
}