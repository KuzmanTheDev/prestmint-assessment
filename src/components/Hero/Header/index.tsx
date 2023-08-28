import styles from './header.module.css';
import logo from '/images/logo.png';
import heroImg from '/images/hero-section-circle.png';

export const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Boldo Logo" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <button className={styles.button}>Login</button>
      </nav>
      <div className={styles.hero_img}>
        <img src={heroImg} alt="Hero background" loading="lazy" />
      </div>
    </header>
  );
};
