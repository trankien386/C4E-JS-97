//nhận vào số N, trả ra tổng S =1+2+3+...+N

// function sum(N) {
// 	let sum=0;
// 	for (let i = 1; i <= N; i++) {
// 		sum=sum+i;
// 	}
// 	console.log("Tổng của dãy S là: "+sum);
// }

// let n=Number(prompt('Nhập vào 1 số'));
// // sum(n);

//Nhập vào N, trả ra giai thừa của N
// function factorial(N){
// 	let f=1;
// 	for (let i = 1 ; i <= N ; i++) {
// 		f=f*i;
// 	}
// 	console.log('Giai thừa của '+n+' là: '+f);
// }

// let n=Number(prompt('Nhập vào 1 số'));
// factorial(n);

//nhập n, trả mảng chứa các ước của n
// let n=Number(prompt('Nhập vào 1 số'));

// function divisor(N) {
// 	let divisors=[];
// 	for (let i = 1; i <= N; i++) {
// 		if (n%i == 0){
// 			divisors.push(i);
// 		}
// 	}
// 	console.log(divisors);
// }

// divisor(n);

//nhập n, trả mảng chứa số nguyên tố <= n
// let n=Number(prompt('Nhập vào 1 số'));

// function primeNumber(N) {
// 	let primeNumbers=[];
// 	// Xét xem sô nào là số nguyên to
// 	for (let i = 1; i <= N; i++) {		
// 		let testNumbers=[];
// 		//tim uoc cua 1 so nhat dinh
// 		for (let tn = 1; tn <= i; tn++) {
// 			if (i%tn == 0) {
// 				testNumbers.push(tn);
// 			}
// 		//neu uoc cua so do chi co 1 va chinh no thi no la so nguyen to
// 		if (testNumbers.length == 2 && testNumbers[0]==i || testNumbers[1]==i){
// 			primeNumbers.push(i);
// 		}
// 		}
// 	}
// 	console.log(primeNumbers);
// }

// primeNumber(n);

//nhận vào 1 mảng, tra ra tong cua mang
// function sumOfArray(arr) {
// 	let s=0;
// 	for (let i = 0; i < arr.length; i++) {
// 		const value = arr[i];
// 		s+=value;
// 	}
// 	return s;
// }

// sumOfArray([1,432,543,534534]);

// //nhan vao 1 mang va 1 so N, tra ra mang chua gia tri < so N
// //nhan vao 2 mang, tra ve 1 mang chua gia tri cua 2 mang
// function hop(arr1, arr2) {
// 	let result=[];
// 	for (let i = 0; i < arr1.length; i++) {
// 		result.push(arr1[i]);
// 	}
// 	for (let i = 0; i < arr2.length; i++) {
// 		result.push(arr2[i]);
// 	}
// 	for (let i = result.length - 1; i >= 0; i--) {
// 		let value = result[i];
// 		if (result.indexOf(value) !==i) {
// 			result.splice(i,1);
// 		}
// 	}
// 	return result;
// }
// console.log(hop([1, 2, 3,], [2, 1, 5, 5, 6, 3, 2, 1]));

//tinh n!
// function factorial(N) {
// 	if (N ===0 || N===1) {
// 		return 1;
// 	}
// 	return N * factorial(N-1);
// }
// factorial(5);
// console.log(factorial(5));

//tim so thu N cua fibonacci: 1,1,2,3,5...
// function fibonacci(N) {
// 	if (N === 1 || N===2) {
// 		return 1;
// 	}
// 	return fibonacci(N-1) + fibonacci(N-2);
// }
// console.log(fibonacci(4));

var arr=[5,7,8,9,10,2,3];
//Tim 1 so le
let oddnumber = arr.find(function (v) {
	return v%2 ===1;
});

console.log(oddnumber);

//Tim 1 so >10
let greaterthan10 = arr.find(function (v) {
	return v>10;
});

console.log(greaterthan10);

//tim cac so chan
let evennumbers = arr.