import React, { Component } from "react";
import Style from "./ContactPage.module.scss";
import { Formik } from "formik";
import * as Yup from "yup";

class ContactPage extends Component {

    userSchema = Yup.object().shape({
        name: Yup.string().min(3, 'trop court').required("required"),
        email: Yup.string().email('mauvais email').required('required'),
        message: Yup.string().min(10, 'message trop court').required("required")
    })

    submit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
    }

    render(){
        return (
            <div className={ Style.container }>
                <div className={ Style.bgForm }>
                    <section className={ Style.contact }>
                        <h2>CONTACT</h2>
                        <section className={ Style.coord }>
                            <p>
                                <img alt="localisation" src={require("../../assets/img/map.svg")}/>
                                Paris, France
                            </p>
                            <a href="tel:+33650381812">
                                <img alt="numero de telephone" src={require("../../assets/img/mobile.svg")}/>
                                06 50 38 18 12
                            </a>
                        </section>
                        <section className={ Style.social }>
                            <a href="https://github.com/brunosneak" target="_blank" rel="noopener noreferrer">
                                <img alt="github" src={require("../../assets/img/iconeGit.svg")}/>
                                github.com/brunosneak
                            </a>
                            <a href="https://www.linkedin.com/in/bruno-neak/" target="_blank" rel="noopener noreferrer">
                                <img alt="linkedin" src={require("../../assets/img/iconeLinkedin.svg")}/>
                                linkedin.com/in/bruno-neak
                            </a>
                        </section>
                    </section>
                    <section className={ Style.myForm }>
                        <Formik
                            onSubmit={ this.submit }
                            initialValues={{ name: "", email: "", message: ""}}
                            validationSchema= { this.userSchema }
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                isSubmitting,
                                errors,
                                touched
                            }) => (
                                <form onSubmit={ handleSubmit }>
                                    <label>Nom*</label>
                                    <input 
                                        name="name" 
                                        value={ values.name } 
                                        onChange={ handleChange } 
                                        onBlur={ handleBlur } 
                                        type="text"
                                    />
                                    { errors.name && touched.name ? <div className={ Style.error }>{ errors.name }</div> : null }
                                    <label>Email*</label>
                                    <input 
                                        name="email" 
                                        value={ values.email } 
                                        onChange={ handleChange } 
                                        onBlur={ handleBlur } 
                                        type="email"
                                    />
                                    { errors.email && touched.email ? <div className={ Style.error }>{ errors.email }</div> : null }
                                    <label>Message*</label>
                                    <textarea 
                                        name="message" 
                                        value={ values.message } 
                                        onChange={ handleChange } 
                                        onBlur={ handleBlur } 
                                        type="text"
                                    />
                                    { errors.message && touched.message ? <div className={ Style.error }>{ errors.message }</div> : null }
                                    <p className={ Style.champs }>* champs obligatoires</p>
                                    <button type="submit" disabled={ isSubmitting }>Envoyer</button>
                                </form>
                             )}
                        </Formik>
                    </section>
                </div>
                <div className={ Style.bg1 }/>
                <div className={ Style.bg2 }/>
            </div>
        )
    }
}

export default ContactPage;