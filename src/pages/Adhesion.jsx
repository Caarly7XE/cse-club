import { useState } from "react";
function Adhesion() {
  return (
    <div className="container main-layout">

      <main className="content-area">

        <h2 style={{color: '#068325b2'}}>Rejoindre le CSE</h2>

        <p>
          Devenez membre actif et contribuez au déploiement de nos projets scientifiques,
          environnementaux et solidaires à la FSBM.
        </p>

        <p style={{ marginTop: '20px', color: '#068325b2', fontWeight: '600' }}>
          Comment postuler ?
        </p>

        <p>
          Les recrutements se font généralement au début de chaque semestre universitaire.
          Pour manifester votre intérêt dès maintenant, vous pouvez envoyer un e-mail contenant
          votre motivation à notre adresse officielle ou nous contacter sur Instagram.
        </p>

        <div style={{ marginTop: '30px' }}>
          <a
            href="mailto:cse.fsbm@gmail.com"
            className="btn-secondary"
            style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#2e7d32', color: '#fff', borderRadius: '4px' }}
          >
            Postuler par Email
          </a>
        </div>

      </main>

    </div>
  )
}

export default Adhesion
