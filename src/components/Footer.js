import React from 'react';
import styles from '../styles/footer.modules.css';
import footerLogo from '../images/manual-logo-footer.svg';

const Footer = () => (
  <div>
    <footer className={styles.footer}>
      <img src={footerLogo} alt="manual-brand-logo" className={styles.logo} />
      <div className={styles.footerMenu}>
        <ul className={styles.footerGroupLinks}>
          <li>PRODUCT</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Guided</li>
          <li>Products</li>
        </ul>
        <ul className={styles.footerGroupLinks}>
          <li>PRODUCT</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Guided</li>
          <li>Products</li>
        </ul>
        <ul className={styles.footerGroupLinks}>
          <li>PRODUCT</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Guided</li>
          <li>Products</li>
        </ul>
        <ul className={styles.footerGroupLinks}>
          <li>FOLLOW US</li>
          <div className={styles.socialLinks}>
            <img src={require('../images/facebook.svg')} alt="..." />
            <img src={require('../images/twitter.svg')} alt="..." />
            <img src={require('../images/linkedin.svg')} alt="..." />
          </div>
        </ul>
      </div>
    </footer>
  </div>
);

export default Footer;