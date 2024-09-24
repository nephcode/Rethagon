// Import component ===============================================//
import rethagonLogo from '/rethagon-logo.svg';
import scssHome from './home.module.scss';

// Component ======================================================//
const Home = () => {
  return (
    <main className={scssHome.home}>
      <div>
        <a href="#" target="_blank">
          <img
            src={rethagonLogo}
            className={scssHome.hero}
            alt="Rethagon logo"
          />
        </a>
      </div>
      <p className={scssHome.beta}>Coming soon...</p>
    </main>
  );
};

export default Home;
// Export component ===============================================//
