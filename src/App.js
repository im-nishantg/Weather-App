import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {

  let [searchTerm, setST] = useState("london");
  let [mainComp, setMain] = useState({ temp: "", imgurl: "", desc: "" });
  let [footerComp, setFooter] = useState({ tmin: "", humidity: "", tmax: "" });
 


  const API_key = process.env.REACT_APP_API_KEY;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${API_key}&units=metric`;

  let newMainData, newFooterData;

  useEffect(() => { getData(); }, []);

  async function getData() {

    const response = await fetch(url);
    const data = await response.json();

    newMainData = {
      temp: data.main.temp,
      imgurl: "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",
      desc: data.weather[0].description
    }

    newFooterData = {
      tmin: data.main.temp_min,
      tmax: data.main.temp_max,
      humidity: data.main.humidity
    }

    setMain(newMainData);
    setFooter(newFooterData);

  }

  return (

    <div className="container">

      <Header cityName={(item) => {
        setST(item)
        getData();
      }} />
      <Main cityName={searchTerm} data={mainComp}  />
      <Footer data={footerComp} />

    </div>

  )
}

export default App;
