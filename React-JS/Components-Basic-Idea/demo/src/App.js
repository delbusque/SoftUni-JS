import './App.css';
import { Clicker } from './components/Clicker.js';
import Timer from './components/Timer.js';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <Clicker />
        <Timer />

      </header>

    </div>
  );
}

export default App;
