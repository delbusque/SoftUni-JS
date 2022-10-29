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
import { DeleteUser } from './components/DeleteUser.js';
import { EditUser } from './components/EditUser.js';

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
    const [deletedUser, setDeletedUser] = useState(null);
    const [editedUser, setEditedUser] = useState(null);

    const newUserHandler = () => {
        setIsAddNewUser(oldState => !oldState);
    }

    const actionHandler = (user, e) => {
        if (e.title == 'Info') {
            setSelectedUser(user);
        }
        if (e.title == 'Delete') {
            setDeletedUser(user);
        }
        if (e.title == 'Edit') {
            setEditedUser(user);
        }
    }

    const closeHandler = () => {
        setSelectedUser(null);
        setDeletedUser(null);
        setEditedUser(null);
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
                        users.map(user => selectedUser._id == user._id && <UserInfo key={user._id} userInfo={selectedUser} closeHandler={closeHandler} />)
                    }

                    {deletedUser &&
                        users.map(user => deletedUser._id == user._id && <DeleteUser users={users} setUsers={setUsers} key={user._id} deletedUser={deletedUser} closeHandler={closeHandler} />)
                    }

                    {editedUser && users.map(user => editedUser._id == user._id && <EditUser key={user._id}
                        editedUser={editedUser} closeHandler={closeHandler} users={users} setUsers={setUsers}
                        setEditedUser={setEditedUser} />)}

                    <Pagination />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
