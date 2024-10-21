import scssHeader from './header.module.scss';

const Header = () => {
  return (
    <header className={scssHeader.header}>
      <p className={scssHeader.beta}>Beta early access only - v 0.3.1</p>
    </header>
  );
};
export default Header;
