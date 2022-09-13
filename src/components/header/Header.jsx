import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Math Magicians</h1>
      <ul className={styles.menu}>
        <li className={styles['menu-item']}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/calculate">Calculator</Link>
        </li>
        <li className={styles['menu-item']}>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
