import scssArtistLayout from './artist.module.scss';
import CardArtist from '../../components/CardArtist';
import mockData from './mockArtist.json';

const ArtistSection = () => {
  return (
    <section className={scssArtistLayout.layoutArtist}>
      <h2>Artist Selection Beta</h2>
      <p>Données non vérifiées pour la phase de developpement</p>
      <div className={scssArtistLayout.selectionArtist}>
        {mockData.map((artist) => (
          <CardArtist key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
};
export default ArtistSection;
