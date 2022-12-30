const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39b4d6c4c2mshe6f13539bbee494p156757jsn0aea51cbaa89',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		//cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Kolkata")



const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39b4d6c4c2mshe6f13539bbee494p156757jsn0aea51cbaa89',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

/*const getWeather1 = (city)=>{
	cityName.innerHTML = city
	*/

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		cloud_pct3.innerHTML = response.cloud_pct
		//temp.innerHTML = response.temp
		temp3.innerHTML = response.temp
		feels_like3.innerHTML = response.feels_like
		//humidity.innerHTML = response.humidity
		humidity3.innerHTML = response.humidity
		min_temp3.innerHTML = response.temp
		max_temp3.innerHTML = response.max_temp
		//wind_speed.innerHTML = response.wind_speed
		wind_speed3.innerHTML = response.wind_speed
		wind_degrees3.innerHTML = response.wind_degrees
		sunrise3.innerHTML = response.sunrise
		sunset3.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
//}

/*submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather1(city.value)
//})

getWeather1("Kolkata")
*/



const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39b4d6c4c2mshe6f13539bbee494p156757jsn0aea51cbaa89',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
	.then(response => response.json())
	.then((response) => {


		console.log(response)

		cloud_pct4.innerHTML = response.cloud_pct
		temp4.innerHTML = response.temp
		feels_like4.innerHTML = response.feels_like
		humidity4.innerHTML = response.humidity
		min_temp4.innerHTML = response.temp
		max_temp4.innerHTML = response.max_temp
		wind_speed4.innerHTML = response.wind_speed
		wind_degrees4.innerHTML = response.wind_degrees
		sunrise4.innerHTML = response.sunrise
		sunset4.innerHTML = response.sunset
	})
	.catch(err => console.error(err));


	const options3 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '39b4d6c4c2mshe6f13539bbee494p156757jsn0aea51cbaa89',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
		.then(response => response.json())
		.then((response) => {
	
	
			console.log(response)
	
			cloud_pct5.innerHTML = response.cloud_pct
			temp5.innerHTML = response.temp
			feels_like5.innerHTML = response.feels_like
			humidity5.innerHTML = response.humidity
			min_temp5.innerHTML = response.temp
			max_temp5.innerHTML = response.max_temp
			wind_speed5.innerHTML = response.wind_speed
			wind_degrees5.innerHTML = response.wind_degrees
			sunrise5.innerHTML = response.sunrise
			sunset5.innerHTML = response.sunset
		})
		.catch(err => console.error(err));


		const options4 = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '39b4d6c4c2mshe6f13539bbee494p156757jsn0aea51cbaa89',
				'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
			}
		};
		
		
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Darjeeling', options)
			.then(response => response.json())
			.then((response) => {
		
		
				console.log(response)
		
				cloud_pct6.innerHTML = response.cloud_pct
				temp6.innerHTML = response.temp
				feels_like6.innerHTML = response.feels_like
				humidity6.innerHTML = response.humidity
				min_temp6.innerHTML = response.temp
				max_temp6.innerHTML = response.max_temp
				wind_speed6.innerHTML = response.wind_speed
				wind_degrees6.innerHTML = response.wind_degrees
				sunrise6.innerHTML = response.sunrise
				sunset6.innerHTML = response.sunset
			})
			.catch(err => console.error(err));



			const options5 = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '39b4d6c4c2mshe6f13539bbee494p156757jsn0aea51cbaa89',
					'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
				}
			};
			
			
			fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
				.then(response => response.json())
				.then((response) => {
			
			
					console.log(response)
			
					cloud_pct7.innerHTML = response.cloud_pct
					temp7.innerHTML = response.temp
					feels_like7.innerHTML = response.feels_like
					humidity7.innerHTML = response.humidity
					min_temp7.innerHTML = response.temp
					max_temp7.innerHTML = response.max_temp
					wind_speed7.innerHTML = response.wind_speed
					wind_degrees7.innerHTML = response.wind_degrees
					sunrise7.innerHTML = response.sunrise
					sunset7.innerHTML = response.sunset
				})
				.catch(err => console.error(err));



				const options6 = {
					method: 'GET',
					headers: {
						'X-RapidAPI-Key': '39b4d6c4c2mshe6f13539bbee494p156757jsn0aea51cbaa89',
						'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
					}
				};
				
				
				fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
					.then(response => response.json())
					.then((response) => {
				
				
						console.log(response)
				
						cloud_pct8.innerHTML = response.cloud_pct
						temp8.innerHTML = response.temp
						feels_like8.innerHTML = response.feels_like
						humidity8.innerHTML = response.humidity
						min_temp8.innerHTML = response.temp
						max_temp8.innerHTML = response.max_temp
						wind_speed8.innerHTML = response.wind_speed
						wind_degrees8.innerHTML = response.wind_degrees
						sunrise8.innerHTML = response.sunrise
						sunset8.innerHTML = response.sunset
					})
					.catch(err => console.error(err));
		
		
	
	

