import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});

  

  const storeLocation = (e) => {
    setLocation(e.target.value);
    console.log(location);
  };
  
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f3a884ff58659dfb12de6422539777c3`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          alert("Couldnt find the location");
        });
    }
  };


  return (
    <>
      <div className="container" >
        <div className="input-box">
          <input
            type="text"
            placeholder="Search Location"
            onChange={storeLocation}
            onKeyPress={searchLocation}
          />
        </div>
        <div className="weather-details">
          <h4>{data.name ? data.name : "Nepal"}</h4>
          <h2>
            {data.main ? data.main.temp : 11 }
            <span>&#176;</span>
          </h2>
          <h4>{data.weather ? data.weather[0].main : 'clear'}</h4>
        </div>

        <div className="box">
          <div className="box-info">
            <h5>
              {data.main ? data.main.feels_like : 11}<span>&#176;</span>
            </h5>
            <h6>Feels Like</h6>
          </div>
          <div className="box-info">
            <h5>{data.main ? data.main.humidity : 11}</h5>
            <h6>Humidity</h6>
          </div>
          <div className="box-info">
            <h5>{data.main ? data.wind.speed : 11}mph</h5>
            <h6>Wind Speed</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
