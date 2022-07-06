import logo from './logo.svg';
import './App.css';
import { BookList } from './BookList';
import { Header } from './Header';
import { Button } from './Button';
import { Form } from './Form';
import { Timer } from './Timer'
import { Clicker } from './Clicker';


function App() {

    const books = [
        {
            "author": "Chinua Achebe",
            "country": "Nigeria",
            "imageLink": "images/things-fall-apart.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 209,
            "title": "Things Fall Apart",
            "year": 1958
        },
        {
            "author": "Hans Christian Andersen",
            "country": "Denmark",
            "imageLink": "images/fairy-tales.jpg",
            "language": "Danish",
            "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
            "pages": 784,
            "title": "Fairy tales",
            "year": 1836
        },
        {
            "author": "Dante Alighieri",
            "country": "Italy",
            "imageLink": "images/the-divine-comedy.jpg",
            "language": "Italian",
            "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
            "pages": 928,
            "title": "The Divine Comedy",
            "year": 1315
        }
    ]

    return (
        <div className="App">
            <header className="App-header">
                <Clicker />
                <Header title="Epos Library" />
                <Timer start={0} />
                <Timer start={30} />
                <Form>
                    <label>email@</label>
                    <input type="password"></input>
                    <Button>SEND</Button>
                </Form>


                <img src={logo} className="App-logo" alt="logo" />

                <BookList books={books} />

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >Learn React</a>
            </header>
        </div>
    );
}

export default App;
