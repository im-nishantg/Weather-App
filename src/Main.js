import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Main(props)
{
    
    function city(string) {
        return string[0].toUpperCase() + string.slice(1);
      }

    return(
        <div className="main">

            <h1> <LocationOnIcon fontSize='medium' /> {city(props.cityName)} </h1>
            <img src={props.data.imgurl} width="150px" className="imgdiv" alt='weather-image'></img>
            <span> {props.data.desc} </span>
            <h1> {props.data.temp}&#176;C</h1>
        </div>
    )
}