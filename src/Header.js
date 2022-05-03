import React,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function Header(props){

    let [city, setCity] = useState("");

    function handleChange(event)
    {
        let newCity = event.target.value;

        setCity(newCity)
    }

    function handleClick()
    {
        if(city !== ""){
        props.cityName(city);
        setCity("");
        }
    }

    return(
        <div className="header">
            
            <input type="text" placeholder="Search..." className="searchBar" onChange={handleChange} value={city}>
            </input>
            <button onClick={handleClick}> <SearchIcon /></button>
        </div>
    )
}