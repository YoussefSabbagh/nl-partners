import { useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './header.module.scss';

const Header = () => {
  const [showMobileMenu, SetShowMobileMenu] = useState(false);
  const { status, data: session } = useSession();

  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/' });
  };

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <span className={styles.header__logo}>Next Level Partners</span>
      </Link>

      <nav onClick={handleShowToggleMenu}>
        <ul
          className={
            showMobileMenu
              ? `${styles.nav__items} ${styles.show}`
              : `${styles.nav__items}`
          }
          onClick={handleShowToggleMenu}
        >
          <li className={styles.nav__links}>
            <Link href="/" passHref>
              <span className={styles.nav__link} onClick={handleShowToggleMenu}>
                Home
              </span>
            </Link>
          </li>
          <li className={styles.nav__links}>
            <Link href="/about" passHref>
              <span className={styles.nav__link} onClick={handleShowToggleMenu}>
                About Us
              </span>
            </Link>
          </li>
          <li className={styles.nav__links}>
            <Link href="/contact" passHref>
              <span className={styles.nav__link} onClick={handleShowToggleMenu}>
                Contact Me
              </span>
            </Link>
          </li>
          <li className={styles.nav__links}>
            <Link href="/post" passHref>
              <span className={styles.nav__link} onClick={handleShowToggleMenu}>
                Blog
              </span>
            </Link>
          </li>
          <li className={styles.nav__links}>
            {status === 'loading' ? (
              'loading'
            ) : session?.user ? (
              <span className={styles.nav__link} onClick={logoutClickHandler}>
                Logout
              </span>
            ) : (
              <Link href="/login" passHref>
                <span
                  className={styles.nav__link}
                  onClick={handleShowToggleMenu}
                >
                  Ingresar
                </span>
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <div className={styles.toggle} onClick={handleShowToggleMenu}>
        {showMobileMenu ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};
export default Header;
