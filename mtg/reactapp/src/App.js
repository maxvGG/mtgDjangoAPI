import logo from './logo.svg';
import './App.css';
import SearchByName from './SearchByName';
import RandomCard from "./RandomCard";
import SearchBySet from "./SearchBySet";

function App() {
  return (
    <div className="App">
        <h2>Zoek naar een kaart op naam</h2>
        <SearchByName />
        <h2>Vind een willekeurige kaart</h2>
        <RandomCard />
        <h2>Zoek naar alle kaarten van een set</h2>
        <SearchBySet/>
    </div>
  );
}

export default App;
