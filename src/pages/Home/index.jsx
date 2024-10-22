// Import component ===============================================//
import Hero from '../../components/Hero';
import ArtistSection from '../../layouts/Artist';

// Import Styles ==================================================//
import scssHome from './home.module.scss';

// Component ======================================================//
const Home = () => {
  return (
    <main className={scssHome.home}>
      <ArtistSection />
    </main>
  );
};
export default Home;
// Export component ===============================================//
