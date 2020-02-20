document.getElementById("dateSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("dateInput").value;
  if (value === "")
    return;
  console.log(value);

  fetch("https://api.nasa.gov/planetary/apod?api_key=LcdBw3xaSgBytWetapkqfdfwkrdra9a5Lb5hpGlN&date=" + value)
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    let results = "";
    results += "<img style = 'width: 85%' src ='" + json.url + "'>";
    results += '<h2 style = "font-family: Courier New, Courier, monospace">' + json.title + "</h2>";
    results += '<p>' + json.date + "</p>";
    results += '<p id="explanation">' + json.explanation + "</p>";
    document.getElementById("results").innerHTML = results;
  })
  .catch(err => {
  	console.log(err);
  })

});
/*document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=01e8efbe9b9c9df7f34db607ee780da1";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2>Weather in ' + json.name + "</h2>";
      for (let i=0; i < json.weather.length; i++) {
	       results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2>' + json.main.temp + " &deg;F</h2>"
      results += "<p>"
      for (let i=0; i < json.weather.length; i++) {
	       results += json.weather[i].description
	    if (i !== json.weather.length - 1)
	     results += ", "
      }
      results += "<br>" + " Feels like " + json.main.feels_like + " &deg;F";
      results += "<br>" + "Temp Min/Max: " + json.main.temp_min + "/" + json.main.temp_max + "&deg;F";
      results += " <br>" + "Humidity: " + json.main.humidity + "%";
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
    });

    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=01e8efbe9b9c9df7f34db607ee780da1";
    fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let forecast = "";
      let a = 0;
      forecast += "<table>"
      for (let i=0; i < 8; i++) {
         forecast += "<tr>"
         for (let y=0; y < 5; y++){
           forecast += "<td>"
  	       forecast += "<h3>" + moment(json.list[a].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h3>";
  	       forecast += "<p>Temperature: " + json.list[a].main.temp + "&deg;F" + "</p>";
           forecast += "<p>Temp Min/Max: " + json.list[a].main.temp_min + "/" + json.list[a].main.temp_max + "&deg;F</p>";
  	       forecast += '<img src="http://openweathermap.org/img/w/' + json.list[a].weather[0].icon + '.png"/>'
           forecast += "</td>";
           ++a;
         }
         forecast += "</tr>";
      }
      forecast += "</table>";

      document.getElementById("forecastResults").innerHTML = forecast;
    });
}); */
