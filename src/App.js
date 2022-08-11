import { useState, useEffect } from "react";
import { getWeatherByCity } from "./service";
import Week from "./Week";

function App() {
  const [weather, setWeather] = useState(null);
  const [Input, SetInput] = useState({latitude: 32.109333,longitude: 34.855499});

  let objCity = {
    "Tel Aviv" : {latitude: 32.109333,longitude: 34.855499},
    "London": {latitude: 51.509865,longitude: -0.118092},
    "Sydney": {latitude: -33.865143,longitude: 151.209900},
    "Verkhoyansk":{latitude: 67.550529,longitude: 133.399643}
  }
  
  let sreacheCity = (value)=>{
    for(let item in objCity){
      if(item == value){
        SetInput(objCity[item])
      }
    }
  }
  
  useEffect(()=>{
      getWeatherByCity(Input)
      .then((data) => {
        setWeather(data);
      })
  },[Input])
   
  if (weather) {
    return (
      <>
        <div className="h1">מזג האויר התחזית השבועית לעיר </div>
        <div className="h1">
            <select id="City" onChange ={(e)=>{sreacheCity(e.target.value)}}>
              <option value="Tel Aviv">Tel Aviv</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Verkhoyansk">Verkhoyansk</option>
            </select>
        </div>
        <div className="continer2">
          <Week id={"boxown"} serverData={weather.daily[0]} />
        </div>
        <div className="continer">
          {weather.daily.map((item, index) => {
            if (index !== 0 && index < 8)
              return <Week key={index} serverData={item} />;
          })}
        </div>
      </>
    );
  }
}
export default App;
