import styles from './logo-row.module.css';
import presto from '/images/presto.png';
import boldo from '/images/white-boldo.png';

export const LogoRow = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.background} />

      <div className={styles.logo_row}>
        <div className={styles.logo}>
          <img src={boldo} alt="Boldo Logo" />
        </div>

        <div className={styles.logo}>
          <img src={presto} alt="Presto Logo" />
        </div>

        <div className={styles.logo}>
          <img src={boldo} alt="Boldo Logo" />
        </div>

        <div className={styles.logo}>
          <img src={presto} alt="Presto Logo" />
        </div>

        <div className={styles.logo}>
          <img src={boldo} alt="Boldo Logo" />
        </div>

        <div className={styles.logo}>
          <img src={presto} alt="Presto Logo" />
        </div>
      </div>
    </section>
  );
};
