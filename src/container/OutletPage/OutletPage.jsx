import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import { Footer, NavBar } from "../../components";

const OutletPage = () => {
    let location = useLocation();

    return (
        <div className={!location.pathname.includes('3droom') ? 'app' : ''}>
            {!location.pathname.includes('catalog') && !location.pathname.includes("3droom") &&
                <NavBar />
            }
            <Outlet />
            {!location.pathname.includes('3droom') &&
                < Footer />
            }
        </div>
    );
};

export default OutletPage;