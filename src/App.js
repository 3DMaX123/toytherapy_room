import './App.css';

import { MainPage } from './container';
import { NavBar, Footer } from './components';
import Partners from './components/Partners/Partners';
import images from './constants/images';

function App() {
  return (
    /* app - це найголовніший div, в який додаються всі інші об'єкти, в нашому випадку Components*/ 
    <div className="app">
      <NavBar />
      {/* app__container - це div в якого повинні додаватися елементи з папки container !!!! НІ В ЯКОМУ ВИПАДКУ ЕЛЕМЕНТИ - COMPONENTS (NavBar, Footer etc.)!!!! */}
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
