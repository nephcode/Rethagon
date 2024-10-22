// Import component ===============================================//
import rethagonLogo from '/rethagon-logo.svg';
import scssHero from './hero.module.scss';

// Component ======================================================//
const Hero = () => {
  return (
    <section id="hero" className={scssHero.hero}>
      <div className={scssHero.logo}>
        <a href="#" target="_blank">
          <img src={rethagonLogo} alt="Rethagon logo" />
        </a>
      </div>
      <p className={scssHero.soon}>Coming soon...</p>
    </section>
  );
};
export default Hero;

// Export component ===============================================//
