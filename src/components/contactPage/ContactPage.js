import React from "react";
import Header from "../header/Header";
import LeafBlock from "../header/LeafBlock";
import Style from "./ContactPage.module.scss";

const ContactPage = () => {
    return (
        <div className={ Style.container }>
            <Header/>
            <LeafBlock/>
            <div className={ Style.bgForm }>
                <section>
                    
                </section>
            </div>
            <div className={ Style.bg1 }/>
            <div className={ Style.bg2 }/>
        </div>
    )
}

export default ContactPage;