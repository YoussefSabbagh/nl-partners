import Layout from '../../components/Layout';
import styles from './about.module.scss';
import { getAllPartner } from '../../services';

import Team from '../../components/aboutUs/Team';

const About = ({ partners }) => {
  return (
    <Layout title={'Next Level Partners About US'}>
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.text}>
            <strong>Next Level Partners </strong> It is a group that helps you
            establish and define leveraged business strategies and support you
            in your digital transformation that will allow you to face the new
            economy..
          </p>
          <Team partners={partners} />
        </div>
      </section>
    </Layout>
  );
};

export default About;

// Fetch data at build time
export const getStaticProps = async () => {
  const partners = (await getAllPartner()) || [];

  return {
    props: { partners },
  };
};
