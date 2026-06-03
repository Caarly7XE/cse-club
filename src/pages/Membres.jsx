import { useState } from "react";
function Membres() {
  return (
    <div className="container main-layout">

      <main className="content-area">

        <section className="members-intro">
          <h2>Membres du Bureau Exécutif</h2>
          <p>
            Découvrez l'équipe dirigeante du Club Science et Environnement pour le mandat actuel,
            un collectif d'étudiants dévoués à la gestion et au dynamisme de nos projets.
          </p>

          <div className="members-grid" style={{ marginTop: '30px' }}>

            <div className="member-card main-leader">
              <img src="./public/reda.jpg" alt="ET-TAYYEBY Reda" class="member-avatar img-avatar"></img>
              <h3>Et-Tayyeby Reda</h3>
              <p className="role">Président</p>
              <a href="mailto:cse.fsbm@gmail.com" className="email">cse.fsbm@gmail.com</a>
            </div>

            <div className="member-card">
              <div className="member-avatar">AN</div>
              <h3>Ayoub Nejmi</h3>
              <p className="role">Vice-Président / Chef de pôle événementiel</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">AY</div>
              <h3>Amine Younsi</h3>
              <p className="role">Vice-Président / Responsable média</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">FB</div>
              <h3>Fatim Zahra Baladi</h3>
              <p className="role">Chef de pôle environnement</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">AE</div>
              <h3>Achraf Errachag</h3>
              <p className="role">Chef de pôle cinéma théâtre artistique</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">KF</div>
              <h3>Kawtar Flafi</h3>
              <p className="role">Chef de pôle club et association</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">ZO</div>
              <h3>Zakaria Ouakrrouch</h3>
              <p className="role">Chef de pôle sponsoring</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">AE</div>
              <h3>Aya Elkaraoui</h3>
              <p className="role">Responsable RH</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">IQ</div>
              <h3>Imane Quamar</h3>
              <p className="role">Responsable Communication</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">HF</div>
              <h3>Hanaa Fahim</h3>
              <p className="role">Secrétaire Générale</p>
            </div>

            <div className="member-card">
              <div className="member-avatar">HC</div>
              <h3>Houda Chafik</h3>
              <p className="role">Trésorière</p>
            </div>

          </div>
        </section>

      </main>

      <aside className="sidebar">
        <div className="widget">
          <h3>Comité d'encadrement</h3>
          <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>
            Le CSE effectue ses actions sous la supervision bienveillante du corps professoral
            et administratif de la Faculté des Sciences Ben M'Sik.
          </p>
        </div>
      </aside>

    </div>
  )
}

export default Membres
