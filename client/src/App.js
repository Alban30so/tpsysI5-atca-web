import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // État pour stocker les données venant de NodeJS (optionnel pour l'instant)
  const [info, setInfo] = useState({ company: '', tagline: '' });

  useEffect(() => {
    // Connexion au backend NodeJS
    fetch('http://localhost:5000/api/info')
      .then(res => res.json())
      .then(data => setInfo(data))
      .catch(err => console.log("Erreur connexion serveur:", err));
  }, []);

  return (
    <div className="App">
      {/* Barre de navigation */}
      <nav className="navbar">
        <div className="logo-container">
          {/* Simulation d'un logo SVG */}
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#E63946" strokeWidth="5"/>
            <path d="M30 65 L50 25 L70 65" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M40 50 H60" stroke="white" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          <span className="logo-text">ATCA</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#neuf">Véhicules Neufs</a></li>
          <li><a href="#occasion">Occasions</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Section Héros (Vitrine principale) */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Bienvenue chez {info.company || "ATCA"}</h1>
          <p className="subtitle">{info.tagline || "Votre partenaire de confiance pour l'achat de véhicules."}</p>
          <div className="cta-buttons">
            <button className="btn-primary">Voir le stock Neuf</button>
            <button className="btn-secondary">Voir les Occasions</button>
          </div>
        </div>
      </header>

      {/* Footer simple */}
      <footer className="footer">
        <p>&copy; 2024 ATCA - Vente automobile. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;