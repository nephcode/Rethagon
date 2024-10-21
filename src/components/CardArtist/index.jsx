// import {} ==========================================//

// Import skillBar styles ============================//
import scssCard from './cardartist.module.scss';
const imgDefault =
  'https://ffnhxencefouuekzfhbo.supabase.co/storage/v1/object/public/artist/artistDefault.jpg';
//import data =========================================//
//import mockData from '../../layouts/Artist/mockArtist.json';

// CardArtist component ===============================//
const CardArtist = ({ artist }) => {
  return (
    <article
      key={artist.id}
      data-id={artist.id}
      className={scssCard.cardArtist}
    >
      <figure className={scssCard.skilli}>
        <img
          src={artist.image_url || imgDefault}
          alt={artist.name}
          aria-label={artist.name}
        />
        <figcaption>
          <h3>{artist.name}</h3>
          <p className={scssCard.elo}>ELO: {artist.elo}</p>
          <p className={scssCard.elo}>XP: {artist.matchup || '--'}</p>
        </figcaption>
      </figure>
    </article>
  );
};
export default CardArtist;
// End of skillBar component ========================//
