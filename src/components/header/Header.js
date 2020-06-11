import React from "react";
import MenuBurger from "./MenuBurger";
import MyTitle from "./MyTitle";
import Style from "./Header.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
    return (
        <Router>
            <div className={ Style.container }>
                <Link to="/navPage">
                    <MenuBurger/>
                </Link>
                <MyTitle/>
            </div>
        </Router>
    )
}

export default Header;