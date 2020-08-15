import React from 'react';
import Footer from '../components/Footer';
import headerLogo from '../images/manual-symbol.svg'
import styles from 'home.module.css';

const Homepage = () => (
  <div>
    <section className={styles.header}>
      <img src={headerLogo} alt="manual-brand-logo" />
      <div className={styles.headerSideDiv}>
        <h1>BE GOOD TO YOURSELF</h1>
        <h3>We’re working around the clock to bring
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
<img src="img/hair-photo-1-2-x.png"
     srcset="img/hair-photo-1-2-x@2x.png 2x,
             img/hair-photo-1-2-x@3x.png 3x"
     class="hair-photo-12x"/>
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
      <h3>What we can help with</h3>
      <div className={styles.hairloss}>
<div className={styles.hairlossImage}>
<img src="img/hair-photo-1-2-x.png"
     srcset="img/hair-photo-1-2-x@2x.png 2x,
             img/hair-photo-1-2-x@3x.png 3x"
     class="hair-photo-12x"/>
</div>
<article>
<h1 className={styles.midSectionNumberTwo}>02</h1>
  <h4>HAIR LOSS</h4>
  <p>Hair loss needn’t be irreversible. We can help!</p>
  <p>Hair loss needn’t be irreversible. There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. It’s all to do with blocking a pesky hormone called DHT. That’s the bad guy behind hair loss. And you can keep him at bay. The choice is yours.</p>
</article>
      </div>
    </section>
    <Footer />
  </div>
);

export default Homepage;
