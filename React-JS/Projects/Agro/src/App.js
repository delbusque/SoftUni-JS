import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Loader } from './components/Loader';
import { Banner } from './components/Banner';
import { ThreeBox } from './components/ThreeBox';
import { Hottest } from './components/Hottest';

function App() {
  return (
    <div>

      <Header />
      <Banner />
      <ThreeBox />
      <Hottest />

    </div>

  );
}

export default App;
