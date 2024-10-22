// IMPORT =============================================================

import scssHeader from './header.module.scss';
import Hero from '../../components/Hero';

// Component ======================================================//
const Header = () => {
  return (
    <header className={scssHeader.header}>
      <Hero />
      <p className={scssHeader.beta}>Beta early access only - v 0.3.1</p>
    </header>
  );
};
export default Header;
// Export component ===============================================//
