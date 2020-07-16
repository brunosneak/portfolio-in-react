import React from "react";
import Style from "./LeafBlock.module.scss";
import { withRouter } from "react-router-dom";

const LeafBlock = (props) => {

    return (
        (props.location.pathname === "/gamePage" && props.stateNav === false ? null : <h1 className={ Style.bgLeafBlock }>NEAK BRUNO</h1>)
    )
}

export default withRouter(LeafBlock);