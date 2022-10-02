import './App.css';
import { Clicker } from './components/Clicker.js';
import Timer from './components/Timer.js';
import { Counter } from './components/Counter.js';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <Counter start={0} />
        <Counter start={100} />

        <Clicker />
        <Timer />

      </header>

    </div>
  );
}

export default App;
