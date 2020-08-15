import React from 'react';
import Footer from '../components/Footer';
import headerLogo from '../images/manual-logo-header.svg'
import styles from '../styles/home.module.css';

const Homepage = () => (
  <div>
    <section className={styles.header}>
      <img src={headerLogo} alt="manual-brand-logo" className={styles.headerLogo}/>
      <div className={styles.headerSideDiv}>
        <h1 className={styles.beGoodHead}>BE GOOD TO YOURSELF</h1>
        <h3 className={styles.roundTheClock}>We’re working around the clock to bring
          you a holistic approach to your wellness. From top to bottom, inside and out.
        </h3>
        <button className={styles.ctaHeader}>TAKE THE QUIZ</button>
      </div>
      <div className={styles.headerImageSmallSceen}></div>
    </section>
    <section className={styles.midSectionHair}>
      <h3>What we can help with</h3>
      <div className={styles.hairloss}>
        <div className={styles.hairlossImage}>
          <img src={require('../images/hair-photo/hair-photo-1-2-x.png')}
            srcset={`${require('../images/hair-photo/hair-photo-1-2-x@2x.png')} 2x, 
              ${require('../images/hair-photo/hair-photo-1-2-x@3x.png')} 3x`}
            className={styles.hairPhoto} alt="hair loss issue" />
        </div>
        <article>
          <h1 className={styles.midSectionNumberOne}>01</h1>
          <h4>HAIR LOSS</h4>
          <p>Hair loss needn’t be irreversible. We can help!</p>
          <p>Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours.</p>
        </article>
      </div>
    </section>

    <section className={styles.midSectionSex}>
      <div className={styles.disfunction}>
        <div className={styles.hairlossImage}>
          <img src={require('../images/sex-issue-photo/sex-photo-1-2-x.jpg')}
            srcset={`${require('../images/sex-issue-photo/sex-photo-1-2-x@2x.jpg')} 2x, 
              ${require('../images/sex-issue-photo/sex-photo-1-2-x@3x.jpg')} 3x`}
            alt="Erectile dysfunction"
            class="sex-photo-12x" />
        </div>
        <article>
          <h1 className={styles.midSectionNumberTwo}>02</h1>
          <h4>Erectile Dysfunction</h4>
          <p>Erections can be a tricky thing.
But no need to feel down!</p>
          <p>There are plenty of reasons why you might be
  having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed.</p>
        </article>
      </div>
    </section>
    <Footer />
  </div>
);

export default Homepage;
