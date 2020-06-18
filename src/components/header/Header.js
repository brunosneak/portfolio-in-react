import React from "react";
import MenuBurger from "./MenuBurger";
import MyTitle from "./MyTitle";
import Style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={ Style.container }>
            <Link to="/navPage">
                <MenuBurger/>
            </Link>
            <MyTitle/>
        </div>
    )
}

export default Header;