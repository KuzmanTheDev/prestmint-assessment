import styles from './customer-connect.module.css';
import background from '/images/customer-connect.png';
import arrow from '/icons/chevron-arrow.svg';

export const CustomerConnect = () => {
  return (
    <section className={styles.customer_connect}>
      <div className={styles.img_wrapper}>
        <img src={background} loading="lazy" alt="Customer service" />
      </div>

      <div className={styles.content}>
        <p className={styles.header}>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>

        <div className={styles.connections}>
          <div className={styles.connection} style={{ marginBottom: '40px' }}>
            <p>We connect our customers with the best?</p>
            <img src={arrow} alt="expand" />
          </div>

          <div className={styles.connection}>
            <p>Android research & development rockstar? </p>
            <img src={arrow} alt="expand" />
          </div>
        </div>
      </div>
    </section>
  );
};
