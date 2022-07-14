import './App.css';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Section } from './components/main/section/Section';

function App() {
  return (
    <div>
      <Header />

      <main class="main">
        <Section />
      </main>

      <Footer />
    </div>
  );
}

export default App;
