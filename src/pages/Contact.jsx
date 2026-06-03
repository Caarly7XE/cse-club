import { useState } from "react";
function Contact() {
  const [count, setCount] = useState(0);
  const [isRed, setIsRed] = useState(false);
  return (
    <div className="container main-layout">

      <main className="content-area">

        <h2 style={{ color: '#068325b2' }}>Contactez-nous</h2>

        <p>
          Pour toute question, proposition de collaboration ou demande d'information,
          l'équipe du bureau est à votre écoute :
        </p>

        <address style={{ fontStyle: 'normal', marginTop: '20px', lineHeight: '1.8' }}>
          <strong style={{color: '#068325b2'}}>Faculté des Sciences Ben M'Sik</strong><br />
          Université Hassan II de Casablanca<br />
          Cdt Driss El Harti, Sidi Othmane, Casablanca<br />
          <br />
          <strong>Téléphone :</strong> 0635839648<br />
          <strong>E-mail :</strong> <a href="mailto:cse.fsbm@gmail.com">cse.fsbm@gmail.com</a>
        </address>

        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#068325b2' }}>Réseaux Sociaux</h3>

        <ul style={{ listStyle: 'none', lineHeight: '2' }}>
          <li>
            <strong>Instagram :</strong>{' '}
            <a href="https://instagram.com/cse_fsbm" target="_blank" rel="noreferrer">@cse_fsbm</a>
          </li>
          <li>
            <strong>LinkedIn :</strong>{' '}
            <a href="#" target="_blank" rel="noreferrer">cse fsbm</a>
          </li>
        </ul>
        {/*
        <p>Nombre de participants : {count}</p>
        <button onClick={() => setCount(count + 1)}>
           Participer
        </button>*/}
        
        
        {/*<div>

             <h3
                style={{
                color: isRed ? "red" : "black"
                }}
             >
               Club Science et Environnement
             </h3>

             <button
                 onClick={() => setIsRed(!isRed)}
              >
              Changer la couleur
            </button>

       </div>
       */}

      </main>

    </div>
  )
}

export default Contact
