import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from '../styles/index.module.scss';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title={'Next Level Partners Home Page'}>
      <section className={styles.section} id="home">
        <div
          className={`${styles.home__container} ${styles.grid} ${styles.container}`}
        >
          <div className={`${styles.home__content} ${styles.grid}`}>
            <div className={styles.home__social}>
              <a
                className={styles.home__socialIcon}
                href="https://www.linkedin.com/in/reinaldo-sabbagh/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className={styles.home__socialIcon}
                href="https://github.com/rei-sabbagh"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className={styles.home__socialIcon}
                href="https://twitter.com/ReinaldoSabbagh/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <div className={styles.home__img}>
              <Image
                alt="Photo Profile"
                height="300px"
                width="300px"
                layout="responsive"
                src="/images/logo.png"
                className={styles.home__img}
              />
            </div>
            <div className={styles.home__data}>
              <p className={styles.home__description}>Next Level</p>
              <h1 className={styles.home__title}>Partners</h1>

              <a href="#contact" className={styles.home__button}>
                Contact Us <i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
