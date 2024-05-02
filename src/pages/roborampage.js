import Header from "../header";
import roborampageDownload from "../downloads/RoboRampage.zip"
export default function RoboRampage() {
    return (<div className="App">
        <Header/>
        <h1>Download the current version of Robo Rampage from below</h1>
        <h2>Current Version: 1.0</h2>
        <a className="download" href={roborampageDownload} download>Robo Rampage Download</a>
    </div>);
}