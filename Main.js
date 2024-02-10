const options = {
	method: 'GET',
	headers: {
	   'X-RapidAPI-Key': 'e369948956mshe9c39e9b5ceefccp15f01ejsn276c0d7d72ef',
	   'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
 };


 const weather = (city) => {
			cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
	   console.log(response);
	   document.getElementById("temp").innerHTML = response.temp;
	   document.getElementById("feels_like").innerHTML = response.feels_like;
	   document.getElementById("humidity").innerHTML = response.humidity;
	   document.getElementById("wind_speed").innerHTML = response.wind_speed;
	   
	  
		const temp = response.temp;
		const tempDiv = document.querySelector('.tempDiv');
	if (temp < 10) {
		tempDiv.style.backgroundColor = "#22e2b8";
	} else if (temp >= 10 && temp < 20) {
		tempDiv.style.backgroundColor = "#04dd15c7";
	} else if (temp >= 20 && temp < 30) {
		tempDiv.style.backgroundColor = "#f7f91dc7";
	} else {
		tempDiv.style.backgroundColor = "#f71135";
	}
	

	// Show the card container
document.getElementById("card-container").style.display = 'block';
	})
	.catch(err => console.error(err));
 }

 document.getElementById("now").addEventListener("click", (e) => {
	e.preventDefault()
	weather(document.getElementById("city").value);
 })