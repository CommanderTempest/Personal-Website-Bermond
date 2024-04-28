import Header from "../header";
import spellbladeDownload from "../downloads/SpellbladeZip.zip"
export default function SpellBlade() {
    return (<div className="App">
        <Header/>
        <h1>Download the current version of Spellblade from below</h1>
        <h2>Current Version: 0.1</h2>
        <a className="download" href={spellbladeDownload} download>Spellblade Download</a>
    </div>);
}