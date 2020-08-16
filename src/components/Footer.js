import React from 'react';
import styles from '../styles/footer.module.css';
import footerLogo from '../images/manual-logo-footer.svg';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerMenu}>
      <div className={styles.logoWrap}>
        <img src={footerLogo} alt="manual-brand-logo" className={styles.brandLogo} />
      </div>
      <ul className={styles.footerGroupLinks}>
        <li>PRODUCT</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Guided</li>
        <li>Products</li>
      </ul>
      <ul className={styles.footerGroupLinks}>
        <li>COMPANY</li>
        <li>Press Releases</li>
        <li>Mission</li>
        <li>Strategy</li>
        <li>About</li>
      </ul>
      <ul className={styles.footerGroupLinks}>
        <li>INFO</li>
        <li>Support</li>
        <li>Customer Service</li>
        <li>Get Started Guide</li>
      </ul>
      <ul className={styles.footerGroupLinks}>
        <li>FOLLOW US</li>
        <li className={styles.socialLinks}>
          <img src={require('../images/facebook.svg')} alt="..." />
          <img src={require('../images/twitter.svg')} alt="..." />
          <img src={require('../images/linkedin.svg')} alt="..." />
        </li>
      </ul>
    </div>
    <div className={styles.bottomBar}>
      <hr/>
      <small className={styles.copyright}>&copy; 2019 Manual. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;