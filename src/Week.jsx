import "./Week.css";
function Week(props) {
const Days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
let style;
if (props.serverData.temp.day < 25){
   style = {
    backgroundColor: "#313e48"
   }
}
const MyDayHebre = (props) => {
    return Days[new Date(props * 1000).getDay()];
}
  return (
    <div> 
      <article id={props.id} className="box weather" style={style}>
        <div className="icon bubble black">
          <div className="spin">
            <img src="https://dl.dropbox.com/s/0qq5anxliaopt8d/sun.png" />
          </div>
        </div>
        <div className="h1">{MyDayHebre(props.serverData.dt)}</div>
        <div className="h1">{new Date(props.serverData.dt * 1000).toLocaleDateString()}</div>
        <div className="h1">{Math.floor(props.serverData.temp.day)}&deg;</div>
      </article>
    </div>
  );
}
export default Week;
