import styles from './services.module.css';
import arrow from '/icons/arrow-right.svg';
import service1 from '/images/service1.png';
import service2 from '/images/service2.png';
import service3 from '/images/service3.png';
import customer_service1 from '/images/customer-service1.png';
import customer_service2 from '/images/customer-service2.png';
import bullet from '/icons/bullet-check.svg';
import sun from '/icons/sun.svg';
import feather from '/icons/feather.svg';
import eye from '/icons/eye.svg';

export const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.header}>
        <p>Our services</p>
        <h2>Handshake infographic mass market crowdfunding iteration.</h2>
      </div>

      <section className={styles.service_cards}>
        <div className={styles.service_card}>
          <div>
            <img src={service3} alt="service" loading="lazy" />
          </div>

          <div className={styles.card_header}>Cool feature title</div>
          <p className={styles.card_text}>
            Learning curve network effects return on investment.
          </p>

          <div className={styles.service_link}>
            <a href="#">Explore page</a>
            <img src={arrow} alt="Right arrow" />
          </div>
        </div>

        <div className={styles.service_card}>
          <div>
            <img src={service2} alt="service" loading="lazy" />
          </div>

          <div className={styles.card_header}>Even cooler feature</div>
          <p className={styles.card_text}>
            Learning curve network effects return on investment.
          </p>

          <div className={styles.service_link}>
            <a href="#">Explore page</a>
            <img src={arrow} alt="Right arrow" />
          </div>
        </div>

        <div className={styles.service_card}>
          <div>
            <img src={service1} alt="service" loading="lazy" />
          </div>

          <div className={styles.card_header}>Cool feature title</div>
          <p className={styles.card_text}>
            Learning curve network effects return on investment.
          </p>

          <div className={styles.service_link}>
            <a href="#">Explore page</a>
            <img src={arrow} alt="Right arrow" />
          </div>
        </div>
      </section>

      <section className={styles.customer_service}>
        <div className={styles.customer_service1}>
          <div className={styles.service_img}>
            <img src={customer_service1} alt="service" loading="lazy" />
          </div>

          <div className={styles.customer_service1_container}>
            <p className={styles.customer_service1_header}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>

            <ul className={styles.customer_service1_list}>
              <li>
                <img src={bullet} alt="bullet" />
                We connect our customers with the best.
              </li>
              <li>
                <img src={bullet} alt="bullet" />
                We connect our customers with the best.
              </li>
              <li>
                <img src={bullet} alt="bullet" />
                We connect our customers with the best.
              </li>
            </ul>

            <button className={styles.customer_service1_button}>
              Start now
            </button>
          </div>
        </div>

        <div className={styles.customer_service2}>
          <div className={styles.customer_service2_container}>
            <p className={styles.customer_service2_header}>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </p>

            <div className={styles.customer_service2_items}>
              <div
                className={styles.customer_service2_item}
                style={{ background: '#0a2640', color: 'white' }}
              >
                <img src={feather} alt="bullet" />
                <p>We connect our customers with the best.</p>
              </div>
              <div className={styles.customer_service2_item}>
                <img src={eye} alt="bullet" />
                <p>Advisor success customer launch party.</p>
              </div>
              <div className={styles.customer_service2_item}>
                <img src={sun} alt="bullet" />
                <p>Business-to-consumer long tail.</p>
              </div>
            </div>
          </div>
          <div className={styles.service_img}>
            <img src={customer_service2} alt="service" loading="lazy" />
          </div>
        </div>
      </section>
    </section>
  );
};
