import scssHeader from './header.module.scss';

const Header = () => {
  return (
    <header className={scssHeader.header}>
      <p className={scssHeader.beta}>Beta early access only - v 0.2.4</p>
    </header>
  );
};
export default Header;
