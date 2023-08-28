import styles from './blog.module.css';
import pitch from '/images/pitch.png';
import seed from '/images/seed.png';
import beta from '/images/beta.png';
import chandler from '/images/chandler.png';
import rachel from '/images/rachel.png';
import monica from '/images/monica.png';

export const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.header}>
        <p>Our blog</p>
        <h2>Value proposition accelerator product management venture.</h2>
      </div>

      <section className={styles.cards}>
        <div className={styles.card}>
          <img src={pitch} alt="Blog cover image" loading="lazy" />

          <div className={styles.card_top}>
            <span className={styles.category}>Category</span>
            <span className={styles.date}>November 22, 2021</span>
          </div>

          <p>Pitch termsheet backing validation focus release.</p>

          <div className={styles.author}>
            <img src={chandler} alt="author" loading="lazy" />

            <span>Chandler Bing</span>
          </div>
        </div>

        <div className={styles.card}>
          <img src={seed} alt="Blog cover image" loading="lazy" />

          <div className={styles.card_top}>
            <span className={styles.category}>Category</span>
            <span className={styles.date}>November 22, 2021</span>
          </div>

          <p>
            Seed round direct mailing non-disclosure agreement graphical user
            interface rockstar.
          </p>

          <div className={styles.author}>
            <img src={rachel} alt="author" loading="lazy" />

            <span>Rachel Green</span>
          </div>
        </div>

        <div className={styles.card}>
          <img src={beta} alt="Blog cover image" loading="lazy" />

          <div className={styles.card_top}>
            <span className={styles.category}>Category</span>
            <span className={styles.date}>November 22, 2021</span>
          </div>

          <p>
            Beta prototype sales iPad gen-z marketing network effects value
            proposition
          </p>

          <div className={styles.author}>
            <img src={monica} alt="author" loading="lazy" />

            <span>Monica Geller</span>
          </div>
        </div>
      </section>

      <button className={styles.outline_button}>Load more</button>
    </section>
  );
};
