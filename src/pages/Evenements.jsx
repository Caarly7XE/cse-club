import { useState } from "react";
function Evenements() {

  return (
    <div className="container main-layout">

      <main className="content-area">

        <h2>Nos Événements</h2>
        <div className="w-14 h-1" style={{ width: '60px', height: '3px', backgroundColor: '#2e7d32', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
        <p style={{ marginBottom: '2rem' }}>
          Retrouvez ici les moments forts vécus par le CSE — actions humanitaires, formations et célébrations.
        </p>

        {/* ---- Événement 1 : Centre de l'Enfance ---- */}
       <div
          id="centre-enfance"
          className="member-card"
          style={{ marginBottom: '2rem', textAlign: 'left', padding: '1.5rem' }}
        >

          <div style={{ display: 'flex' ,alignItems: 'left', gap: '0.75rem', marginBottom: '1rem' }}>
            <div className="member-avatar" style={{ width: '40px', height: '40px', fontSize: '1rem', flexShrink: 0 }}>🤝</div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem'}}>Visite au Centre de Protection de l'Enfance</h3>
              <p style={{ margin: 0, fontSize: '0.85rem'}}>Ben Slimane</p>
            </div>
          </div>

          <img
            src="/event1.jpeg"
            alt="Visite Centre de Protection de l'Enfance Ben Slimane"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', objectFit: 'cover', maxHeight: '400px' }}
          />

          <p style={{ lineHeight: '1.7' }}>
            Un moment rempli d'émotions, de sourires et de souvenirs inoubliables.
            Notre visite au Centre de Protection de l'Enfance de Ben Slimane nous a rappelé que
            les plus petites actions peuvent avoir le plus grand impact.
            Merci à toutes les personnes qui ont contribué de près ou de loin à cette journée
            exceptionnelle. Et ce n'est que le début…
          </p>

        </div>

        {/* ---- Événement 2 : Formation Secourisme Partie 1 ---- */}
        <div
            id="secourisme2"
             className="member-card"
             style={{ marginBottom: '2rem', textAlign: 'left', padding: '1.5rem' }}
       >

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div className="member-avatar" style={{ width: '40px', height: '40px', fontSize: '1rem', flexShrink: 0 }}>🎓</div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Formation en Secourisme 2</h3>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>En collaboration avec la Commission Nationale de Secourisme et de Sauvetage</p>
            </div>
          </div>

          {/* Deux photos côte à côte */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
             <img
              src="/event2b.jpeg"
              alt="Formation secourisme groupe 2"
              style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '280px' }}
            />
            <img
              src="/event2a.jpeg"
              alt="Formation secourisme groupe 1"
              style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '280px' }}
            />
           
          </div>

          <p style={{  lineHeight: '1.7' }}>
            🎓🚑 Le club CSE, en collaboration avec les formateurs de la Commission Nationale de
            Secourisme et de Sauvetage, a eu le plaisir de compléter la partie théorique de la
            formation en secourisme. Une séance riche en apprentissage où les étudiants ont
            activement participé à différentes mises en situation d'urgence. Grâce à leur
            engagement, ils ont su appliquer les bons réflexes et réaliser les interventions de
            manière correcte et efficace. Au-delà de la formation, cette expérience leur a permis
            d'acquérir des gestes essentiels qu'ils pourront utiliser au quotidien pour sauver
            des vies. 💙
          </p>

        </div>

        {/* ---- Événement 3 : Formation Secourisme Partie 2 ---- */}
        <div
           id="secourisme1"
           className="member-card"
           style={{ marginBottom: '2rem', textAlign: 'left', padding: '1.5rem' }}
        >

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div className="member-avatar" style={{ width: '40px', height: '40px', fontSize: '1rem', flexShrink: 0 }}>🚑</div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Formation en Secourisme 1</h3>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>Deuxième étape de la formation</p>
            </div>
          </div>

          {/* Deux photos côte à côte */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
            <img
              src="/event3b.jpeg"
              alt="Formation secourisme pratique groupe"
              style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '280px' }}
            />
            <img
              src="/event3a.jpeg"
              alt="Formation secourisme pratique salle"
              style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '280px' }}
            />
          </div>

          <p style={{ lineHeight: '1.7' }}>
            ✨ Retour sur la deuxième partie de notre formation en secourisme organisée avec succès !
            Nous adressons nos sincères remerciements à tous les participants pour leur engagement,
            leur sérieux et leur enthousiasme tout au long de cette formation. Un grand merci
            également aux formateurs qui nous ont accompagnés et qui ont partagé avec nous leur
            savoir et leur expertise. Grâce à cette belle collaboration, cette deuxième étape a
            été une vraie réussite, riche en apprentissage et en échanges. On se retrouve très
            bientôt pour de nouvelles activités inchaallah 🤍
          </p>

        </div>

        {/* ---- Événement 4 : 8 Mars ---- */}
        <div
           id="mars8"
           className="member-card"
           style={{ marginBottom: '2rem', textAlign: 'left', padding: '1.5rem' }}
        >

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div className="member-avatar" style={{ width: '40px', height: '40px', fontSize: '1rem', flexShrink: 0 }}>💗</div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Célébration du 8 Mars – Journée des Droits des Femmes</h3>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>FSBM · En collaboration avec les clubs partenaires</p>
            </div>
          </div>

          <img
            src="/event4.jpeg"
            alt="Célébration du 8 Mars à la FSBM"
            style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem', objectFit: 'cover', maxHeight: '400px' }}
          />

          <p style={{ lineHeight: '1.7' }}>
            ✨ À l'occasion de la Journée Internationale des Droits des Femmes, la Faculté des
            Sciences Ben M'Sik a organisé un événement inspirant en collaboration avec notre club
            et d'autres clubs partenaires. Un moment riche en échanges, réflexions et partage
            autour de la place des femmes, de leur dignité et de leurs trajectoires. 💬
            Ensemble, nous honorons les femmes, leurs droits et leurs contributions à la société.
            Merci à toutes les participantes et intervenantes pour ces discussions inspirantes. 💗
          </p>

        </div>

      </main>

      <aside className="sidebar">
        <div className="widget">
          <h3>Nos Événements</h3>
          <ul className="events-list">
            <li>
              <a
                  href="#centre-enfance"
                  onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("centre-enfance")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  });
                }}
              >
                <strong>Centre de l'Enfance</strong>
                <span>Visite humanitaire à Ben Slimane</span>
              </a>
            </li>
            <li>
              <a
                href="#secourisme2"
                onClick={(e) => {
                e.preventDefault();
                document.getElementById("secourisme2")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                });
             }}
              >
                <strong>Formation Secourisme 2</strong>
                <span>Partie théorique – Commission Nationale</span>
              </a>
            </li>
            <li>
              <a
                href="#secourisme1"
                onClick={(e) => {
                e.preventDefault();
                document.getElementById("secourisme1")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
               });
             }}
              >
                <strong>Formation Secourisme 1</strong>
                <span>Partie pratique – Remise des certificats</span>
              </a>
            </li>
            <li>
              <a
                href="#mars8"
                onClick={(e) => {
                e.preventDefault();
                document.getElementById("mars8")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
               });
            }}
              >
                <strong>8 Mars</strong>
                <span>Journée des Droits des Femmes – FSBM</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

    </div>
  )
}

export default Evenements
