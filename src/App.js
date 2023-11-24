import './App.css';
import {Catalog, MainPage} from './container';
import { NavBar, Footer } from './components';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from './container/AboutUs/AboutUs'
import ThreeDRoom from "./components/3dRoom/ThreeDRoom";


const router = createBrowserRouter([
    {
        path: "/toytherapy_room",
        element: <MainPage />,
    },
    {
        path: "/toytherapy_room/catalog",
        element: <Catalog />,
    },
    {
        path: "/toytherapy_room/about-us",
        element: <AboutUs />,
    },
    {
        path: "/toytherapy_room/3droom",
        element: <ThreeDRoom />,
    },
]);

function App() {
  return (
    <div className="app">
     {/*<NavBar />*/}
        <RouterProvider router={router} />
      {/*<Footer />*/}
    </div>
  );
}

export default App;
