import './App.css';
import { useState, useEffect } from 'react'
import * as userService from './services/userService.js'


import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Search } from './components/Search.js';
import { Pagination } from './components/Pagination.js';
import { UserList } from './components/UserList.js';
import { CreateUser } from './components/CreateUser.js';
import { AddNewUser } from './components/AddNewUser.js';

function App() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(
            data => {
                setUsers(data.users)
            }
        )
    }, [])

    const [isAddNewUser, setIsAddNewUser] = useState(false);

    const newUserHandler = () => {
        setIsAddNewUser(oldState => !oldState);
    }

    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />

                    <div className="table-wrapper">

                        <UserList users={users} />

                    </div>

                    <AddNewUser newUserHandler={newUserHandler} />

                    {isAddNewUser && <CreateUser newUserHandler={newUserHandler} users={users} setUsers={setUsers} />}

                    <Pagination />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
