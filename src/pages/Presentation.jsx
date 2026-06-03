import { Link } from 'react-router-dom'
import { useState } from "react";

function Presentation() {
  return (
    <div className="container main-layout">
      

      <main className="content-area">
      <div className="hero-video-container">
                  <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
    <source src="/bg.mp4" type="video/mp4" />
  </video>

  <div className="hero-overlay">
    <h1>Club Science et Environnement</h1>
    <p>Science • Environnement • Humanitaire</p>
  </div>
</div>
        
        <article className="presentation-card">
          

          <h2>Présentation du CSE</h2>

          <p className="intro-text">
            Fondé en 2008, le Club Science et Environnement (CSE) est un rassemblement
            d'étudiants passionnés et engagés au sein de la Faculté des Sciences de Ben M'Sik (FSBM).
            Notre mission repose sur trois piliers fondamentaux : la promotion de la culture scientifique,
            la protection de l'environnement et l'engagement humanitaire.
          </p>

          <h3>Nos Objectifs</h3>
          <p>
            Le CSE vise à vulgariser les sciences à travers des formations accessibles, à éveiller
            les consciences face aux défis environnementaux actuels par des actions concrètes, et à
            cultiver les valeurs d'entraide et d'humanisme. Nous croyons fermement que la science
            doit être au service du bien-être humain et de la préservation de notre planète.
          </p>

          <div style={{ marginTop: '30px' }}>
            <Link to="/adhesion" className="btn-secondary">Rejoindre le club</Link>
          </div>     
          



        </article>
      </main>

      <aside className="sidebar">
        <div className="widget events-widget">
          <h3>Nos Activités</h3>
          <ul className="events-list">

            <li>
              <a href="#">
                <strong>Actions Humanitaires</strong>
                <span>Caravanes sociales et élans de solidarité</span>
              </a>
            </li>

            <li>
              <a href="#">
                <strong>Formations Scientifiques</strong>
                <span>Ateliers pratiques et partages de connaissances</span>
              </a>
            </li>

            <li>
              <a href="#">
                <strong>Caravanes d'Orientation</strong>
                <span>Accompagnement des futurs étudiants</span>
              </a>
            </li>

          </ul>
        </div>
      </aside>

    </div>
  )

}

export default Presentation
