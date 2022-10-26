import './App.css';

import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Search } from './components/Search.js';
import { Pagination } from './components/Pagination.js';
import { UserList } from './components/UserList.js';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />

                    <div className="table-wrapper">

                        <UserList />

                    </div>

                    <button className="btn-add btn">Add new user</button>
                    <Pagination />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
