//BT1
// let x=Number(prompt("Hãy nhập 1 số"));

// if (x>10){
//    console.log(x+" lớn hơn 10");
// }else if (x<10){
//    console.log(x+" nhỏ hơn 10");
// }else{
//    console.log("Số bạn nhập bằng 10");
// }

//BT2
// let w=Number(prompt("Hãy nhập cân nặq của bạn (Kg)"));
// let h=Number(prompt("Hãy nhập chiều cao của bạn (m)"));

// let bmi=w/Math.pow(h,2);

// if (bmi<18.5){
// 	console.log("Cơ thể bị thiếu cân");
// }else if (bmi<24.9){
// 	console.log("Bạn có 1 thân hình cân đốii");
// }else if (bmi<29.9){
// 	console.log("Hơi thừa cân");
// }else if (bmi<34.9){
// 	console.log("BÉOOOOOOO PHÌ");
// }else{
// 	console.log("Béo phì nguy hiểm");
// }

//BT3
// let m=Number(prompt("Tháng mà bạn muốn"));

// if (m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12){
// 	console.log("Tháq "+m+" có 31 ngày" );
// }else if (m==4 || m==6 || m==9 ||m==11) {
// 	console.log("Tháq "+m+" có 30 ngày");	
// }else if (m==2){
// 	console.log("Tháq "+m+" có 28 hoặc 29 ngày");
// }else{
// 	console.log("Tháq sai");
// }

//BT3 - Dùq switch

// switch (m) {
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 		console.log("31");
// 		break;
// 	case 2:
// 		console.log("28 or 29");
// 		break;
// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 		console.log("30");
// 		break;
// 	default:
// 		console.log("Nhầm r");
// 		break;
// }