import { useRouter } from 'next/router';
import styles from './partner.module.scss';

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaRegHandPointRight,
  FaTwitter,
} from 'react-icons/fa';

import { getContentFragment } from '../../services/utils/contentFragment';
import { getAllPartner, getPartnerBio } from '../../services';
import Loader from '../../components/Loader';
import Layout from '../../components/Layout';
import Image from 'next/image';

const PartnerBio = ({ partner }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <Layout title={`Next Level Partners Post `}>
      <div className="relative mt-20 mb-8 rounded-lg bg-black bg-opacity-40 p-12 text-center">
        <div className="absolute left-0 right-0 -top-14">
          <Image
            alt={partner.name}
            height="100px"
            width="100px"
            className="rounded-full align-middle"
            src={partner.avatar.url}
          />
        </div>
        <h2 className="mt-4 mb-4 text-xl font-bold text-white">
          {partner.name}
        </h2>
        <p className="text-white">
          <span>
            <FaEnvelope className={styles.span} />
          </span>
          {partner.email}
        </p>
        <p className="text-white">
          <FaMapMarkerAlt className={styles.span} />
          {partner.location}
        </p>
        <p className="text-white">
          <FaRegHandPointRight className={styles.span} />
          {partner.area}
        </p>
        <h2 className="text-white text-lg"> Redes </h2>
        <div className={styles.social}>
          <a
            className={styles.socialIcon}
            href={partner.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className={styles.socialIcon}
            href="https://twitter.com/ReinaldoSabbagh/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>

        <div className={`${styles.formField} ${styles.longTxt}`}>
          {partner.profile.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </Layout>
  );
};
export default PartnerBio;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPartnerBio(params.email);
  return {
    props: {
      partner: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const partners = await getAllPartner();
  return {
    paths: partners.map((partner) => ({
      params: { email: partner.email },
    })),
    fallback: true,
  };
}
