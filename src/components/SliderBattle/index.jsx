import React, { useState } from 'react';

const BattleRapSlider = ({ idArtistA, idArtistB }) => {
  // Tableau de valeurs basé sur les IDs des artistes, avec 0 au centre pour l'égalité
  const values = [
    `${idArtistA}-100`,
    `${idArtistA}-75`,
    `${idArtistA}-50`,
    `${idArtistA}-25`,
    '0',
    `${idArtistB}-25`,
    `${idArtistB}-50`,
    `${idArtistB}-75`,
    `${idArtistB}-100`,
  ];

  const [currentIndex, setCurrentIndex] = useState(4); // Index de départ (égalité)

  // Fonction pour ajuster la position dans le tableau
  const adjustSlider = (step) => {
    setCurrentIndex((prevIndex) =>
      Math.max(0, Math.min(values.length - 1, prevIndex + step))
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Pronostic Battle Rap</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button onClick={() => adjustSlider(-1)} disabled={currentIndex === 0}>
          {' '}
          -25%{' '}
        </button>
        <input
          type="range"
          min="0"
          max={values.length - 1}
          step="1"
          value={currentIndex}
          readOnly
          style={{
            width: '300px',
            margin: '0 15px',
            background: `linear-gradient(to right, red ${
              currentIndex * 10
            }%, blue 0%)`,
          }}
        />
        <button
          onClick={() => adjustSlider(1)}
          disabled={currentIndex === values.length - 1}
        >
          {' '}
          +25%{' '}
        </button>
      </div>
      <p>
        {values[currentIndex] === '0' ? 'Égalité' : `${values[currentIndex]}`}
      </p>
    </div>
  );
};

export default BattleRapSlider;
