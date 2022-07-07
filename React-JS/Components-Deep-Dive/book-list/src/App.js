import logo from './logo.svg';
import './App.css';
import { books } from './books';
import { BookList } from './components/BookList';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <BookList books={books} />

      </header>
    </div>
  );
}

export default App;
