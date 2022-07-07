import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './team.module.scss';

const PartnerCard = ({ partner }) => {
  return (
    <div className={styles.card}>
      <Link href={`/about/${partner.email}`} passHref>
        <div className={styles.circular}>
          <Image
            src={partner.avatar.url}
            alt={partner.name}
            width={100}
            height={100}
          />
        </div>
      </Link>
      <p className="text-xs text-center">{partner.name}</p>
    </div>
  );
};

export default PartnerCard;
