/* let item1='god1'; */
/* let item2='god2'; */
/* let item3='god3'; */
/* let item4='god4'; */

/* let menu = []; */
/* console.log(menu); */

/* let menu=['God']; */
/* console.log(menu); */

/* let menu =['God 1','GOd 2', 'GOd 3'] */
/* console.log(menu); */

//Initialize an array named movies containing the titles of some of your favorite movies
/* let mfm=['Batman Begins','The Dark Knight','The Dark Knight Rises','Inception','Interstellar']; */
/* console.log(mfm); */

/* let newMovie=prompt('Your new favorite movie'); */
/* mfm.push(newMovie); */
/* console.log(mfm); */

/* let i=prompt('Choose a number (0-4) to show one of my favorite movies'); */
/* console.log(mfm[i]); */

/* let i=0; */
/* let movieTitle=prompt('What movies you want to in my list?'); */
/* mfm[i]=movieTitle; */

/* let i=prompt('Pick you lucky number (Only 0-4)'); */
/* let movieTitle=prompt('What movies you want to replace in my list?'); */
/* mfm[i]=movieTitle; */
/* console.log(mfm); */

/* let i=prompt('Pick your deathly number'); */
/* let n=prompt('How many is left?'); */
/* mfm.splice(i, n); */
/* console.log(mfm); */

/////////////////////////////////////////
/* let newItem=prompt('Who is that?'); */
/* menu.push(newItem); */
/* console.log(menu); */

/* let i=2; */
/* console.log(menu[i]); */

/* console.log(menu[1]); */

/* let i=1; */
/* let item='Another God'; */
/* menu[i]=item; */
/* console.log(menu[i]); */

/* console.log(menu); */

/* menu.splice(0, 1); */
/* console.log(menu); */

/* let n=menu.length; */
/* console.log(n); */

/* for(let i=0;i<menu.length;i++){ */
/*    menu[i]=menu[i].toUpperCase(); */ 
/* } */
/* console.log(menu); */

/* let n=Number(prompt('Enter a number')); */
/* /1* console.log(n); *1/ */

/* if (n){ */
/*    console.log('Is Number'); */
/* }else{ */
/*    console.log('Not a number'); */
/* } */

// let n;
// while (true){
//    n=Number(prompt('Enter a number'));
//    if (n){
//       //n is valid
//       break; 
//    }
// }
// console.log(n);

//Cho mảq gồm chiều cao(cm) của 5 người
let heighs=[150,155,170,145,180];


//in ra chiều cao từng người
// for (let i=0;i<heighs.length;i++){
// 	const height=heighs[i];
// 	console.log(`${i+1}: ${heighs[i]}`);
// }
// console.log(heighs[0]);
// console.log(heighs[1]);
// console.log(heighs[2]);
// console.log(heighs[3]);
// console.log(heighs[4]);

//Tính chiều cao truq bìh của 5 người
// let sum=0;
// for (let i=0;i<heighs.length;i++){
// 	sum+=heighs[i];
// }
// let a=sum/heighs.length;
// console.log(a);

//Dựa vào chiều cao truq bìh, in ra những người cao hơn trung bìh
// for (let i = 0; i < heighs.length; i++) {
// 	if (heighs[i]>	a){
// 		console.log(heighs[i]);
// 	}
// }

//in ra người cao nhất, thấp nhất
// let max=heighs[0];
// for (let i = 0; i < heighs.length; i++) {
// 	const height = heighs[i];
// 	if (height>max){
// 		max=height;
// 	}
// }
// console.log(max);

//5.
// for (let i = 0; i < heighs.length - 1; i++) {
// 	for (let j = i+1; j < heighs.length; j++) {
// 		if (heighs[i]>heighs[j]) {						//giảm dần => > -> <
// 			let temp=heighs[i];
// 			heighs[i]=heighs[j];
// 			heighs[j]=temp;
// 		}
// 	}
	
// }
// console.log("Tang dan:");
// for (let i = 0; i < heighs.length; i++) {
// 	const height = heighs[i];
// 	console.log(`${i+1}: ${height}`);
// }

//6. Có bn người cao dưới 160cm? In ra chiều cao của người đó
// // let count=0;
// let a=[];

// for (let i = 0; i < heighs.length; i++) {
// 	const height = heighs[i];
// 	if (height<160) {
// 		// console.log(height);
// 		//count++;
// 		a.push(height);
// 	}
// }
// if (a.length>0) {
// 	console.log(`Có ${a.length} người ${a}`);
// }else{
// 	console.log('ko có ai cao dưới 160cm');
// }

//Nhập 1 số >=8, nhỏ hơn thì nhập lại
// let n =Number(prompt('Nhập 1 số >=8'));
// while (n < 8){
// 	n =Number(prompt('Nhập lại 1 số >=8'));
// }

//Nhập 1 số >=8 và <=10, sai nhập lại
// let n=Number(prompt('Nhập 1 số lớn hơn 8 và nhỏ hơn 10'));
// while (n<8 || n>10){
// 	n=Number(prompt('Nhập lại'));
// }

//Nhập mật khẩu có độ dài >=8 kí tự
// let p=String(prompt('Nhập 1 mật khẩu có hơn 8 kí tự'));
// while (p.length<8){
// 	p=prompt('Nhập lại');
// }

//Nhập mật khẩu hơn hoặc bằq 8 kí tự, chứa 1 kí tự @
// let p=prompt('Nhập 1 mật khẩu hơn hoặc bằq 8 kí tự, chứa 1 kí tự @');

// while (p.length<8 || p.indexOf('@')<0) {
// 	p=prompt('Nhập lại');
// }

// while (!(p.length>=8 && p.indexOf('@')>=0)) {
// 	p=prompt('Nhapj lai');
// }
// console.log(p);

//nhập 1 số, tìm tất cả các ước của số đó -> kiểm tra xem có phải số nguyên tố ko
// let n=parseInt(prompt('Nhập 1 số bất kì'));

// let uoc=[];
// for (let i = 0; i <= n/2; i++) {		//có thể dùng n/2 thay cho n
// 	if (n % i ==0) {
// 		uoc.push(i);
// 	}
// 	if (uoc.length>1) {
// 		break;
// 	}
// }
// console.log(`${n} có nhữq ước là: ${uoc}`);

// if (uoc.length ===2) {
// 	console.log('snt');
// }else{
// 	console.log('nsnt');
// }

//Fibonacci
