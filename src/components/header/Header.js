import React from "react";
import MenuBurger from "./MenuBurger";
import LeafBlock from "./LeafBlock";
import Style from "./Header.module.scss";
import { Link, withRouter } from "react-router-dom";

const Header = (props) => {

    console.log(props);

    return (
        <div className={ Style.container }>
            <Link to={ props.location.pathname === "/" ? "/navPage" : "/"
                }>
                <MenuBurger/>
            </Link>
            <LeafBlock/>
        </div>
    )
}

export default withRouter(Header);