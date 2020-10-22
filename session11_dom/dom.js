let h1DOM = document.getElementById('dom');
// console.dir(h1DOM);
// console.log(h1DOM.innerHTML);
h1DOM.innerHTML = "Hello world!";

let titles = document.getElementsByClassName('title');
console.dir(titles);

for (let i = 0; i < titles.length; i++) {
	const DOM = titles[i];
	DOM.innerHTML = 'Hellow World!';
}

let divDOM = document.getElementById('content');
divDOM.innerHTML = '<h1>The H1 moi</h1>';

///////////////////////////////////////////////////////////

let ulDOM = document.getElementById('phones');
ulDOM.innerHTML = '<li>iPhone SE</li>';

let phones = [
	'iPhone SE',
	'iPhone XS',
	'iPhone X'
];

ulDOM.innerHTML=''; //xóa giá trị sẵn có

for (let i = 0; i < phones.length; i++) {
	const phoneName= phones[i];
	ulDOM.innerHTML += `<li>${phoneName}</li>`;
}

////////////////////////////////////////////////

phones = [
	{
		name: 'God',
		price: 10e99,
		img: ''
	},
	{
		name: 'iPhone SE',
		price: 14e6+9e5+9e4,
		img: ''
	}
]

let listDOM = document.getElementById('phone-list');

listDOM.innerHTML='';

for (let i = 0; i < phones.length; i++) {
	const phone = phones[i];

	listDOM.innerHTML += `
	<tr>
		<td>${i+1}</td>
		<td>${phone.name}</td>
		<td>${phone.price}</td>
		<td>
			<img src='${phone.img}' alt=''>
		</td>
	</tr>
	`;
}

