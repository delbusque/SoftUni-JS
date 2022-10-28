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
import { UserInfo } from './components/UserInfo.js';

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
    const [selectedUser, setSelectedUser] = useState(null);

    const newUserHandler = () => {
        setIsAddNewUser(oldState => !oldState);
    }

    const actionHandler = (user) => {
        setSelectedUser(user);
    }

    const closeHandler = (user) => {
        setSelectedUser(null);
    }

    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />

                    <div className="table-wrapper">

                        <UserList users={users} actionHandler={actionHandler} />

                    </div>

                    <AddNewUser newUserHandler={newUserHandler} />

                    {isAddNewUser && <CreateUser newUserHandler={newUserHandler} users={users} setUsers={setUsers} />}

                    {selectedUser &&
                        users.map(user => selectedUser._id == user._id ? <UserInfo key={user._id} userInfo={selectedUser} closeHandler={closeHandler} /> : user._id)
                    }

                    <Pagination />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
