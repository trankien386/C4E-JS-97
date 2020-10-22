function helloWorld() {
	alert('Hello world!');
	console.log('Looo');
}

let h2DOM = document.getElementById('title');
//cach 1
// h2DOM.addEventListener('click', function () {
// 	alert('Clicked H2');
// });

//cach 2
h2DOM.addEventListener('click', helloWorld);

//
// function welcome(){
// 	let inputDOM = document.getElementById('inputDOM');
// 	// console.dir(inputDOM);
// 	// console.log(inputDOM.value);
// 	alert('Hello ' + inputDOM.value);
// }

function signIn() {
	let inputDOM = document.getElementById('inputDOM');
	let inputPass = document.getElementById('inputPass');
	if (inputDOM.value === 'admin' && inputPass.value === '123456') {
		alert('Dang nhap thanh cong');
		window.open("https://dantri.com.vn","_self");
		//window.location = 'https://dantri.com.vn';
		//window.location.href = 'https://dantri.com.vn';
		//ko back lai trang truoc duoc
		//window.location.replace = 'https://dantri.com.vn';
	}else{
		alert('Sai ten hoac mat khau');
	}
}

//Pressing Enter will trigger button
function enterLogin(e, t) {
	// console.log(e);
	// console.log(t);
	if (e.key === 'Enter') {
		//for signIn function
		// signIn();
		//for addPhone function
		addPhone();
	}
}

//Tao 1 mang danh sach dien thoai
let listPhone =[];

//Nhap ten dien thoai, cho ra danh sach
function addPhone() {
	//Lay gia tri nhap vao tu nguoi dung
	let inputPhone = document.getElementById('inputPhone'); 
	//trim() xoa dau cach o dau va cuoi gia tri
	let phoneName = inputPhone.value.trim();
	//Xoa danh sach ban dau
	inputPhone.value = '';
	//Kiem tra input cua nguoi dung
	if (phoneName === '') {
		alert('Nhap ten dien thoai');
		//dừng addPhone()
		return;
	}
	// let listPhone = document.getElementById('listPhone');
	
	// listPhone.innerHTML += `
	// 	<li>${inputPhone.value}</li>
	// `

	//
	listPhone.push(phoneName);
	displayListPhones(listPhone);
}

//Hien thi danh sach dien thoai
// function displayListPhones(phones) {
// 	let listPhoneDOM = document.getElementById('listPhone');
// 	listPhoneDOM.innerHTML='';
// 	for (let i = 0; i < listPhone.length; i++) {
// 		const phoneName = listPhone[i];
// 		listPhoneDOM.innerHTML += `<li>${phoneName}</li>`;
// 	}
// }

//Tim kiem dien thoai
function searchPhone() {
	let txtSearchDOM = document.getElementById('txtSearch');
	let search = txtSearchDOM.value;
	let result = listPhone.filter(function(v){
		return v.toLowerCase().includes(search.toLowerCase());
	});
	displayListPhones(result);
}

function displayListPhones() {
	let searchResultDOM = document.getElementById('searchResult');
	for (let i = 0; i < listPhone.length; i++) {
		const searchResult = listPhone[i];
		searchResultDOM.innerHTML += `<li>${searchResult}</li>`;
	}
}