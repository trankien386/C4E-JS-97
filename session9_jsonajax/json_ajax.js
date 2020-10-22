//JSON

//AJAX
let http = new XMLHttpRequest();
http.onreadystatechange = function () {
	// console.log(this);
	if (this.readyState===4 && this.status===200){
		// console.log(this.responseText);
		let data= JSON.parse(this.responseText);
		// console.log(data);
		console.log(`Today: ${data.date}`);
		console.log(`Temperature: ${data.temperature} C`);
		console.log(`Humidity: ${data.humidity}`);
	}	
}

http.open('GET', 'https://weather-data-demo.herokuapp.com/get-weather-today');
http.send();
