// import {} ==========================================//

//import { React } from 'react';
//import styled

// Import skillBar styles ============================//
import scssCard from './cardartist.module.scss';

//import data =========================================//
//import mockData from '../../layouts/Artist/mockArtist.json';

// skillBar component ================================//
const CardArtist = ({ artist }) => {
  return (
    <article
      key={artist.id}
      data-id={artist.id}
      className={scssCard.cardArtist}
    >
      <figure className={scssCard.skilli}>
        <img
          src={artist.image_url}
          alt={artist.name}
          aria-label={artist.name}
        />
        <figcaption>{artist.name}</figcaption>
        <h3 className={scssCard.name}>{artist.name}</h3>
        <span className={scssCard.Details}>{artist.elo}</span>
      </figure>
    </article>
  );
};
export default CardArtist;
// End of skillBar component ========================//
