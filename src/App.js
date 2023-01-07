import './App.css';

import { Header, MagickSpace, ThreeDRoom, Catalog, Pony, Feedback } from './container';
import { NavBar, Footer } from './components';
import Partners from './container/Partners/Partners';
import images from './constants/images';

function App() {
  return (
    /* app - це найголовніший div, в який додаються всі інші об'єкти, в нашому випадку Components*/ 
    <div className="app">
      <NavBar />
      {/* app__container - це div в якого повинні додаватися елементи з папки container !!!! НІ В ЯКОМУ ВИПАДКУ ЕЛЕМЕНТИ - COMPONENTS (NavBar, Footer etc.)!!!! */}
      <div className='app__container'>
        <Header />
        <MagickSpace />
        <ThreeDRoom />
        <Catalog />
        <Pony />
        <Feedback />
        <Partners />
      </div>
      <Footer />
      <div className='app__gradients'>
        <img className='gradients__headerGrad' src={images.gradients__headerGrad} alt='Градієнт' />
        <img className='gradients__magickSpaceGrad' src={images.gradients__magickSpaceGrad} alt='Градієнт' />
        <img className='gradients__ThreeDRoomGrad' src={images.gradients__threeDRoomGrad} alt='Градієнт' />
        <img className='gradients__CatalogGrad' src={images.gradients__catalogGrad} alt='Градієнт' />
        <img className='gradients__FeedbackGrad' src={images.gradients__feedbackGrad} alt='Градієнт' />
        <img className='gradients__partnersGrad' src={images.gradients__magickSpaceGrad} alt='Градієнт' />
      </div>
    </div>
  );
}

export default App;
