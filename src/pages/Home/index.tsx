// ASSETS ========================================================//
import React from 'react';
import rethagonLogo from '../../assets/common/rethagon.svg';
import scssHome from './home.module.scss';

// COMPONENTS ====================================================//
const Home: React.FC = () => {
  return (
    <main className={scssHome.home}>
      <div>
        <a href="#" target="_blank">
          <img src={rethagonLogo} className={scssHome.hero} alt="Rethagon logo" />
        </a>
      </div>
      <p className={scssHome.beta}>
        Coming soon...
      </p>
    </main>
  )
}

export default Home;

// END OF COMPONENT ==============================================//