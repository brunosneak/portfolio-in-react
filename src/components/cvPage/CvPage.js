import React, { Component } from "react";
import WhoIAm from "./WhoIAm";
import Experience from "./Experience";
import Contact from "./Contact";
import NavPage from "../navPage/NavPage";

class CvPage extends Component {

    render(){
        return (
            this.props.stateNav === false ? 
                <NavPage/> :
            <>
                <WhoIAm/>
                <Experience/>
                <Contact/>
            </>
        )
    }
}

export default CvPage;