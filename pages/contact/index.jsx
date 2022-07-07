import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Layout from '../../components/Layout';
import styles from './contact.module.scss';

const Contact = () => {
  return (
    <Layout title={'Next Level Partners Contat Page'}>
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactWrapper}>
          <div className={styles.contactLeft}>
            <h1 className={styles.title}>Contact Us</h1>
            <form className={styles.contactForm}>
              <label htmlFor="user_name">Name :</label>
              <input type="text" placeholder="Name:" name="user_name" />
              <label htmlFor="user_name">Subject:</label>
              <input type="text" placeholder="Subject:" name="subject" />
              <label htmlFor="user_name">Email:</label>
              <input type="email" placeholder="Email:" name="email" />
              <label htmlFor="user_name">Messaje:</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
              <button>Submit</button>
            </form>
          </div>
          <div className={styles.contactRight}>
            <div className={styles.social}>
              <a
                className={styles.socialIcon}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className={styles.socialIcon}
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className={styles.socialIcon}
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
