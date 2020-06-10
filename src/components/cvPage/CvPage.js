import React from "react";
import Header from "../header/Header";
import LeafBlock from "../header/LeafBlock";
import Style from "./CvPage.module.scss";
import maPhoto from "../../assets/imgCv/photoId.png";

const CvPage = () => {
    return (
        <div className={ Style.container}>
            <Header/>
            <LeafBlock/>
            <section className={ Style.profile }>
                <div className={Style.wrapperPhoto }>
                    <img src={ maPhoto } className={ Style.photo }/>
                </div>
                <section className={ Style.description }>
                    <p>BONJOUR</p>
                    <p>Je suis NEAK Bruno</p>
                    <p>Développeur Junior FullStack JS</p>
                    <article>
                        Diplômé d’une certification professionnelle de niveau 6, à l’école-multimédia, j’ai également entrepris de me
                        spécialiser dans le javaScript au sein de l’organisme de IFOCOP.
                        Mes qualités : Assimiler rapidement, m’adapter à mon environnement et le travail d’équipe.
                        Je suis également une personne d’humeur joviale, altruiste et observatrice, autant d’atouts
                        qui assureront un climat de sérénité et de challenge au sein de votre équipe.<br/><br/>
                        <strong>
                            Je recherche actuellement un stage de 4 mois du 13 février au 30 juin 2020
                            en tant que developpeur fullstack jS ou front jS.
                        </strong>
                    </article>
                </section>
            </section>
        </div>
    )
}

export default CvPage;