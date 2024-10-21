import scssArtistLayout from './artist.module.scss';
import CardArtist from '../../components/CardArtist';
import mockData from './mockArtist.json';

const ArtistSection = () => {
  return (
    <section className={scssArtistLayout.layoutArtist}>
      <h2>Sélection des battles MC (Beta)</h2>
      <p>Données mockées & non vérifiées, phase de developpement </p>
      <div className={scssArtistLayout.selectionArtist}>
        {mockData.map((artist) => (
          <CardArtist key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
};
export default ArtistSection;
