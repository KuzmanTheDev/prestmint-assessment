import { LogoRow } from '@components/Hero/LogoRow';
import { Header } from '@components/Hero/Header';
import line_chart from '/images/line-chart.png';
import pie_chart from '/images/pie-chart.png';
import bar_chart from '/images/bar-chart.png';
import menu from '/images/bar-chart-menu.svg';
import styles from './hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Header />

      <section className={styles.container}>
        <section className={styles.hero_content}>
          <section className={styles.hero_text}>
            <h1>Save time by building fast with Boldo Template</h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>

            <div className={styles.button_group}>
              <button className={styles.green_button}>Buy template</button>
              <button className={styles.outline_button}>Explore</button>
            </div>
          </section>

          <section className={styles.img_grid}>
            <div className={styles.img1}>
              <img src={line_chart} alt="Line chart" loading="lazy" />
            </div>

            <div className={styles.img_group}>
              <div className={styles.bar_chart_group}>
                <img
                  src={menu}
                  alt="Bar chart menu"
                  loading="lazy"
                  style={{ width: '47px' }}
                />
                <img
                  src={bar_chart}
                  alt="Bar chart"
                  loading="lazy"
                  className={styles.bar_chart}
                />
              </div>

              <img src={pie_chart} alt="Pie chart" loading="lazy" />
            </div>
          </section>
        </section>

        <LogoRow />
      </section>
    </section>
  );
};
