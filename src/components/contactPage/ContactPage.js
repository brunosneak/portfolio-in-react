import React, { Component } from "react";
import Style from "./ContactPage.module.scss";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CustomInput = ({ field, form, ...props }) => {
    return (
        <>
            <label>{ field.name + " *" }</label>
            <input { ...field } { ...props } type="text"/>
        </>
    )
}

const CustomError = (props) => {
    return (
        <div className={ Style.error }>{ props.children }</div>
    )
}

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
                                    <Field name="name" component={ CustomInput }/>
                                    <ErrorMessage name="name" component={ CustomError }/>
                                    <Field name="email" component={ CustomInput }/>
                                    <ErrorMessage name="email" component={ CustomError }/>
                                    <label>message *</label>
                                    <textarea 
                                        name="message" 
                                        value={ values.message } 
                                        onChange={ handleChange } 
                                        onBlur={ handleBlur } 
                                        type="text"
                                    />
                                    <ErrorMessage name="message" component={ CustomError }/>
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