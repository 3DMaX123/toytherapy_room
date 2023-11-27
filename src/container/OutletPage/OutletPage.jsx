import React from 'react';
import {Outlet, useLocation} from "react-router-dom";
import {Footer, NavBar} from "../../components";

const OutletPage = () => {
    let location = useLocation();

    return (
        <div className="app">
            {!location.pathname.includes('catalog') &&
                <NavBar />
            }
            <Outlet />
            <Footer />
        </div>
    );
};

export default OutletPage;