import styles from './footer.module.css';
import ctaImg from '/images/footer-cta-circle.png';
import logo from '/images/blue-boldo.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.cta_section}>
        <div className={styles.cta_img}>
          <img src={ctaImg} alt="Footer CTA background" loading="lazy" />
        </div>
        <p>An enterprise template to ramp up your company website</p>
        <div className={styles.input_group}>
          <input type="text" placeholder="Your email address" />
          <button>Start now</button>
        </div>
      </section>

      <section className={styles.links}>
        <div className={styles.left}>
          <img src={logo} alt="Logo" />

          <p>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.links_group}>
            <p>Landings</p>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>

          <div className={styles.links_group}>
            <p>Company</p>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">
                  Carrers <button>Hiring!</button>
                </a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>

          <div className={styles.links_group}>
            <p>Resources</p>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <p className={styles.rights}>All rights reserved.</p>
    </footer>
  );
};
