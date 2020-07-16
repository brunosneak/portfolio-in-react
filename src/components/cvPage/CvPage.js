import React, { Component } from "react";
import WhoIAm from "./WhoIAm";
import Experience from "./Experience";
import Contact from "./Contact";
import NavPage from "../navPage/NavPage";

class CvPage extends Component {

    render(){
        return (
            this.props.stateNav ? 
                <NavPage nav={ this.props.nav }/> :
            <>
                <WhoIAm/>
                <Experience/>
                <Contact/>
            </>
        )
    }
}

export default CvPage;