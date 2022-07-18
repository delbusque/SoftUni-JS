import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Search } from './components/main/search/Search';
import { Section } from './components/main/section/Section';
import { UserList } from './components/main/user-list/UserList';
import './App.css';


function App() {

  return (
    <div>
      <Header />

      <main class="main">
        <section class="card users-container">

          <Search />

          <UserList />


          <Section />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
