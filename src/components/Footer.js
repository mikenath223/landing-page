import React from 'react';
import styles from '../styles/footer.module.css';
import footerLogo from '../images/manual-logo-footer.svg';
import facebookImg from '../images/facebook.svg';
import twitterImg from '../images/twitter.svg';
import linkedInImg from '../images/linkedin.svg';

const Footer = () => (
  <footer role="contentinfo" className={styles.footer}>
    <div className={styles.footerMenu}>
      <div className={styles.logoWrap}>
        <img src={footerLogo} alt="manual-brand-logo" className={styles.brandLogo} />
      </div>
      <ul className={styles.footerGroupLinks}>
        <li data-testid="product">PRODUCT</li>
        <li aria-label="footer link">Popular</li>
        <li aria-label="footer link">Trending</li>
        <li aria-label="footer link">Guided</li>
        <li aria-label="footer link">Products</li>
      </ul>
      <ul className={styles.footerGroupLinks}>
        <li aria-label="footer link">COMPANY</li>
        <li aria-label="footer link">Press Releases</li>
        <li aria-label="footer link">Mission</li>
        <li aria-label="footer link">Strategy</li>
        <li aria-label="footer link">About</li>
      </ul>
      <ul className={styles.footerGroupLinks}>
        <li aria-label="footer link">INFO</li>
        <li aria-label="footer link">Support</li>
        <li aria-label="footer link">Customer Service</li>
        <li aria-label="footer link">Get Started Guide</li>
      </ul>
      <ul className={styles.footerGroupLinks}>
        <li>FOLLOW US</li>
        <li className={styles.socialLinks}>
          <img src={facebookImg} alt="..." />
          <img src={twitterImg} alt="..." />
          <img src={linkedInImg} alt="..." />
        </li>
      </ul>
    </div>
    <div className={styles.bottomBar}>
      <hr />
      <small className={styles.copyright}>&copy; 2019 Manual. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;
