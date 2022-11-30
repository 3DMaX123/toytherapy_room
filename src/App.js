import './App.css';

import { Header } from './container';
import { NavBar, Footer } from './components';

function App() {
  return (
    /* app - це найголовніший div, в який додаються всі інші об'єкти, в нашому випадку Components*/ 
    <div className="app">
      <NavBar />
      {/* app__container - це div в якого повинні додаватися елементи з папки container !!!! НІ В ЯКОМУ ВИПАДКУ ЕЛЕМЕНТИ - COMPONENTS (NavBar, Footer etc.)!!!! */}
      <div className='app__container'>
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
