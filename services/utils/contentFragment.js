import React from 'react';
import Image from 'next/image';
import styles from './contentFragment.module.scss';

export const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }

  switch (type) {
    case 'heading-one':
      return (
        <h1 key={index} className={styles.title}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h1>
      );
    case 'heading-two':
    case 'heading-three':
    case 'heading-four':
      return (
        <h2 key={index} className={styles.subtitle}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h2>
      );
    case 'heading-five':
    case 'heading-six':
    case 'paragraph':
      return (
        <p key={index} className={styles.paragraph}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      );

    case 'block-quote':
      return (
        <q key={index} className={styles.blockQuote}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </q>
      );

    case 'code-block':
      return (
        <pre key={index} className={styles.blockCode}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </pre>
      );

    case 'image':
      return (
        <Image
          key={index}
          alt={obj.title}
          layout="responsive"
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );
    default:
      return modifiedText;
  }
};
