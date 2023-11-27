import './App.css';
import {Catalog, MainPage} from './container';
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import AboutUs from './container/AboutUs/AboutUs'
import ThreeDRoom from "./container/3dRoom/ThreeDRoom";
import OutletPage from "./container/OutletPage/OutletPage";



const router = createBrowserRouter([
    {
        element:<OutletPage />,
        children: [
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
        ]
    }
]);

function App() {
    return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
