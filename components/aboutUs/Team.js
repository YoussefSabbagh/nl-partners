import PartnerCard from './PartnerCard';
import styles from './team.module.scss';

const Team = ({ partners }) => {
  return (
    <div>
      <h1 className="text-center text-2xl text-blue-500 mb-5">Quienes somos</h1>
      <div className={styles.grid}>
        {partners.map((partner) => {
          return <PartnerCard partner={partner} key={partner.email} />;
        })}
      </div>
    </div>
  );
};

export default Team;
