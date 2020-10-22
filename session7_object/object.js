// let o_empty = {};
// let myInfo = {
// 	name: 'Kien',
// 	age: 19,
// 	school: 'Thang Long University',
// };
// console.log(myInfo);
// myInfo.favs = ['Music', ' Movies', ' LOL'];
// console.log(myInfo);

// myInfo.age++;
// console.log(myInfo);

// for (const key in myInfo){
// 	// console.log(key +": "+ myInfo[key]);
// 	let value = myInfo[key];
// 	console.log(`${key}: ${value}`);
// }

//Tạo 1 mảq chứa thôq tin của 5 điện thoại
//1 điện thoại là 1 object chứa 3 thôq tin: Tên, Giá, Hãng

let smartphones = [
	{
		name: "Vsmart Aris Pro",
		price: 9e6+9e5+9e4,
		brand: "Vsmart",
	},
	{
		name: "Realme 7",
		price: 6e6+9e5+9e4,
		brand: "Xiaomi",
	},
	{
		name: "Samsung Galaxy Note 10+",
		price: 16e6+4e5+9e4,
		brand: "Samsung",
	},
	{
		name: "iPhone 11 Pro Max 64GB",
		price: 33e6+9e5+9e4,
		brand: "Apple",
	},
	{
		name: "Vsmart Aris",
		price: 7e6+4e5+9e4,
		brand: "Vsmart",
	},
];

//in ra
// for (let i = 0; i < smartphones.length; i++) {
// 	const list= smartphones[i];
// 	console.log(`${i+1}`);
// 	for(const key in list){
// 		let value = list[key];
// 		console.log(`${key}: ${value}`);
// 	}
// 	console.log('==============================');
// }
//print(smartphones);

//2.người dùng nhập thêm 1 điện thoại mới,
// cũng gồm 3 thông tin trên => in lại danh sách

// let newname =prompt('Hãy Thêm 1 điện thoại mới');
// let newprice=Number(prompt('Giá của chiếc điện thoại này là?'));
// let newbrand=prompt("Của hãng nào vậy?");

// let newphone ={};
// newphone.name=newname;
// newphone.price=newprice;
// newphone.brand=newbrand;
// smartphones.push(newphone);

//in ra
// for (let i = 0; i < smartphones.length; i++) {
// 	const list= smartphones[i];
// 	console.log(`${i+1}`);
// 	for(const key in list){
// 		let value = list[key];
// 		console.log(`${key}: ${value}`);
// 	}
// 	console.log('==============================');
// }
// print(smartphones);

//cho đoạn code in ra vào function
function print(lists) {
	for (let i = 0; i < lists.length; i++){
		const list = list[i];
		console.log(`${i + 1}`);		//thứ tự của kết qủa tìm kiếm trả về
		for (const key in list){
			let value = list[key];
			console.log(`${key}: ${value}`);		//Hiển thị kết quả tìm kiếm phù hợp
		}
		console.log('=============================');
	}
}

//3.người dùng nhập vào giá, in ra các điện thoại
// có giá lớn hơn
let searchPrice = Number(prompt("Nhập Giá"));
let searchResults =[];
for (let i = 0; i < smartphones.length; i++) {
	const list = smartphones[i];		//khai báo list
	if (list.price > searchPrice){	//Nếu giá của điện thoại trong ds lớn hơn giá ng dùq tìm kiếm
		searchResults.push(list);		
	}
}

//in ra
if (searchResults.length >0){
	console.log(`Có ${searchResults.length} đt thỏa mãn:`);
	// for (let i = 0; i < searchResults.length; i++){
	// 	const list = searchResults[i];
	// 	console.log(`${i + 1}`);		//thứ tự của kết qủa tìm kiếm trả về
	// 	for (const key in list){
	// 		let value = list[key];
	// 		console.log(`${key}: ${value}`);		//Hiển thị kết quả tìm kiếm phù hợp
	// 	}
	// 	console.log('=============================');
	// }
	print(searchResults);
}else {
		console.log('Không có điện thoại thỏa mãn');
}

//Cho người dùng nhập vào tên, in ra các điện thoại
// có tên chứa nội dung ng dùng nhập (không phân biệt
// hoa thường)
let searchName = Number(prompt("Nhập tên điện thoại muốn tìm"));
searchResults =[];
for (let i = 0; i < smartphones.length; i++) {
	const list = smartphones[i];
	if (list.name.toLowerCase().includes(searchName.toLowerCase())){
		searchResults.push(list);
	}
}

//in ra
