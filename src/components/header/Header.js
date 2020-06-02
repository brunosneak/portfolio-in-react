import React from "react";
import MenuBurger from "./MenuBurger";
import MyTitle from "./MyTitle";
import Style from "./Header.module.scss";

const Header = () => {
    return (
        <div className={ Style.container }>
            <MenuBurger/>
            <MyTitle/>
        </div>
    )
}

export default Header;