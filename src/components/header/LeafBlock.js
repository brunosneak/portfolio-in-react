import React from "react";
import Style from "./LeafBlock.module.scss";
import { withRouter } from "react-router-dom";

const LeafBlock = (props) => {

    return (
        (props.location.pathname === "/gamePage" && props.stateNav ? <h1 className={ Style.bgLeafBlock }>NEAK BRUNO</h1> : null)
    )
}

export default withRouter(LeafBlock);