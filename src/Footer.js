export default function Footer(props)
{
    return(
        <div className="footer" >
            <div className="box"> 
                <span> Temp Min</span>
                <h3> {props.data.tmin}&#176;</h3>
            </div>
            <div className="box"> 
                <span> Humidity</span>
                <h3> {props.data.humidity}%</h3>
            </div>
            <div className="box"> 
                <span> Temp Max</span>
                <h3> {props.data.tmax}&#176;</h3>
            </div>
        </div>
    )
}