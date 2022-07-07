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
            <strong>GRUPO CONSULTOR</strong> Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
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
