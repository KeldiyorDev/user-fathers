import React from 'react'
import { BiLogIn } from 'react-icons/bi';
import { Link, NavLink } from "react-router-dom";

function Headers() {
    return (
        <header className="header_area">
            <div className="main_menu">
                <div className="search_input" id="search_input_box" style={{ display: "none" }}>
                    <div className="container">
                        <form className="d-flex justify-content-between" method="" action="">
                            <input
                                type="text"
                                className="form-control"
                                id="search_input"
                                placeholder="Search Here"
                            />
                            <button type="submit" className="btn"></button>
                            <span
                                className="ti-close"
                                id="close_search"
                                title="Close Search"
                            ></span>
                        </form>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand logo_h" href="index.html"
                        >
                            <img src="img/logo.png" alt=""
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar"></span> <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse offset"
                            id="navbarSupportedContent"
                        >
                            <ul className="nav navbar-nav menu_nav ml-auto" style={{ alignItems: "center" }}>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/"}>Asosiy</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/loyiha-haqida"}>Loyiha haqida</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/yangiliklar"} className="nav-link">Yangiliklar</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/reyting"} className="nav-link">Reyting</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/maktab-reyting"} className="nav-link">Maktablar reytinggi</NavLink>
                                </li>

                                <li className="nav-item">
                                    <Link className='primary-btn2' to="https://admin.edureyting.uz" target='_blank'>
                                        <BiLogIn fontSize={24} style={{ marginRight: "4px" }} />
                                        Kirish
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Headers