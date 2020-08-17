import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import headerLogo from '../images/manual-logo-header.svg';
import hairPhotoReg from '../images/hair-photo/hair-photo-1-2-x.png';
import sexIssueReg from '../images/sex-issue-photo/sex-photo-1-2-x.jpg';
import styles from '../styles/home.module.css';

const Homepage = ({ handleClick }) => (
  <header role="banner">
    <section className={styles.header}>
      <img src={headerLogo} alt="manual-brand-logo" className={styles.headerLogo} />
      <div className={styles.headerSideDiv}>
        <h1 className={styles.beGoodHead}>
          BE GOOD
          <br />
          {' '}
          TO YOURSELF
        </h1>
        <h3 className={styles.roundTheClock}>
          We’re working around the clock to bring
          you a
          <br />
          {' '}
          holistic approach to your wellness. From top to
          <br />
          {' '}
          bottom, inside and out.
        </h3>
        <button className={styles.ctaHeader} onClick={handleClick} type="button" data-testid="take-quiz">TAKE THE QUIZ</button>
      </div>
    </section>

    <main className={styles.midSectionHair}>
      <div className={styles.canHelp}>
        <h3>What we can help with</h3>
      </div>
      <div className={`${styles.hairloss} ${styles.midSectionElems}`}>
        <img
          src={hairPhotoReg}
          alt="Hair loss issue"
          className={styles.healthPhotos}
        />
        <article className={`${styles.hairlossSect} ${styles.midSectArticles}`}>
          <h2 className={styles.midSectBold}>HAIR LOSS</h2>
          <p className={styles.midSectParaOne}>
            Hair loss needn’t be
            <br />
            {' '}
            irreversible. We can help!
          </p>
          <p className={styles.midSectParaTwo}>
            Hair loss needn’t be irreversible.
            There’s a scientifically proven way that’s most effective
            in keeping and regrowing your hair.
            It’s all to do with blocking a pesky hormone called DHT.
            That’s the bad guy behind hair loss.
            And you can keep him at bay. The choice is yours.
          </p>
        </article>
      </div>
    </main>

    <section className={`${styles.midSectionSexx} ${styles.midSectionElems}`}>
      <img
        src={sexIssueReg}
        alt="Erectile dysfunction"
        className={styles.healthPhotos}
      />
      <article className={`${styles.midSectArticles} ${styles.erectileArticle}`}>
        <h2 className={styles.midSectBold}>ERECTILE DYSFUNCTION</h2>
        <p className={styles.midSectParaOne}>
          Erections can be a tricky thing.
          <br />
          {' '}
          But no need to feel down!
        </p>
        <p className={styles.midSectParaTwo}>
          There are plenty of reasons why you might be
          having difficulty in the erection department.
          We can help you figure out possible reasons why.
          And prescribe a pill if needed.
        </p>
      </article>
    </section>
    <Footer />
  </header>
);

export default Homepage;

Homepage.defaultProps = {
  handleClick: () => { },
};

Homepage.propTypes = {
  handleClick: PropTypes.func,
};
