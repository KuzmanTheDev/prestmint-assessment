import styles from './testimonial.module.css';
import left from '/icons/arrow-left.svg';
import albus from '/images/albus.png';
import severus from '/images/severus.png';
import harry from '/images/harry.png';

export const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <section className={styles.testimonial_top}>
        <p className={styles.header}>
          An enterprise template to ramp up your company website.
        </p>

        <div className={styles.button_group}>
          <button>
            <img src={left} alt="Left arrow" />
          </button>

          <button>
            <img
              src={left}
              alt="Right arrow"
              style={{ transform: 'rotate(180deg)' }}
            />
          </button>
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.card_comment}>
            “Buyer buzz partner network disruptive non-disclosure agreement
            business”
          </p>

          <div className={styles.author}>
            <div>
              <img src={albus} alt="Testimonial author" />
            </div>

            <div className={styles.author_meta}>
              <p className={styles.author_name}>Albus Dumbledore</p>
              <div className={styles.author_position}>Manager @ Hogwarts</div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.card_comment}>
            “Learning curve infrastructure value proposition advisor strategy
            user experience hypotheses investor.”
          </p>

          <div className={styles.author}>
            <div>
              <img src={severus} alt="Testimonial author" />
            </div>

            <div className={styles.author_meta}>
              <p className={styles.author_name}>Severus Snape</p>
              <div className={styles.author_position}>Manager @ Slytherin</div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.card_comment}>
            “Release facebook responsive web design business model canvas seed
            money monetization.”
          </p>

          <div className={styles.author}>
            <div>
              <img src={harry} alt="Testimonial author" />
            </div>

            <div className={styles.author_meta}>
              <p className={styles.author_name}>Harry Potter</p>
              <div className={styles.author_position}>
                Team Leader @ Gryffindor
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
