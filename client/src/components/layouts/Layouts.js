import React from 'react';
import Header from '../header/Header';
import { Outlet } from "react-router-dom";

const Layouts = ({ childdren }) => {
    return (
        <>
            <Header />
            <div>{childdren}</div>
            <div className="content">
                <Outlet />
            </div>
        </>
    );
};

export default Layouts;