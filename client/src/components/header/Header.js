import React from 'react';
import { Link } from 'react-router-dom';
import motionview from "../../images/motionview.png"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand">
                        <img src={motionview} alt="image" style={{ width: "110px", height: "40px" }} />
                    </Link>
                    <div className="collapse navbar-collapse container_nav" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto flex-nowrap">
                            <li className="nav-item">
                                <Link to="home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="cart-products" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="food-products" className="nav-link">Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="shop-products" className="nav-link">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="json-products" className="nav-link">Json posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="products" className="nav-link"><i className="fa-solid fa-heart"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="store" className="nav-link"><i className="fa-solid fa-user"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="home" className="nav-link" tabIndex="-1" aria-disabled="true"><i className="fa-solid fa-cart-plus"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;