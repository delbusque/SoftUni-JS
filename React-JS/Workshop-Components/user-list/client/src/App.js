import { useState, useEffect } from 'react';

import * as userService from './services/userService';

import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Search } from './components/main/search/Search';
import { Section } from './components/main/section/Section';
import { UserList } from './components/main/user-list/UserList';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(users => setUsers(users))
  }, [])


  return (
    <div>
      <Header />

      <main class="main">
        <section class="card users-container">

          <Search />
          <UserList users={users} />


          <Section />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
