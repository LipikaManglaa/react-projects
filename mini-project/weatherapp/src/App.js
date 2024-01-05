import logo from './logo.svg';
import './App.css';
import { weatherApiUrl } from './API/ApiBaseUrl';
import axios from 'axios'
import { useState } from 'react';

function App() {
  let[ storeWeather,setStoreWeather]=useState()
  let[weatherStatus,setWeather]=useState([])
  let iconPath = `http://openweathermap.org/img/w/`
  
  let getCity=(e)=>{
    e.preventDefault()
    let city=e.target.cityName.value;

  let apiUrl=weatherApiUrl
  axios.get(apiUrl, {
    params: {
      q:city,
      appid:'4d8fb5b93d4af21d66a2948710284366',
      units:'metric'
      
    }
  })
  .then(function (response) {
   return response.data

  })
  .then((finalData)=>{
    console.log(finalData)
    setWeather(finalData)
  })
  }
console.log(weatherStatus)
  return (
    <div className="App">
       <main>
        <div className="main-inner">
            <h1>Simple weather App</h1>
            <form action="" onSubmit={getCity}>
                <div className="input-weather">
                    <input type="search" name="cityName" placeholder="Search for a city"/>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <section>
                <div className="list-items-city">
                    <ul>
                      
<li>

</li>
                    </ul>

                </div>
                <div id="weather">


{

   <div class="weather-city-show">{weatherStatus.name}
    
   {/* <h3></h3><img src="iconPath+weatherStatus.weather[0].icon.png" />  */}
   <div class="temp">
       <h4>Temp:<span>{weatherStatus.name}<sup>o</sup>C</span></h4>
   </div>
  <div class="wind">
       <h4>Wind:<span>{weatherStatus.name}MPH</span></h4>
   </div>
   <div class="humidity">
       <h4>Humidity:<span>{weatherStatus.name}%</span></h4>
   </div>
   </div>

              }              </div>

           
            </section>
        </div>
    </main>
    </div>
  );
}

export default App;
