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
        <li tabIndex="3">PRODUCT</li>
        <li tabIndex="4">Popular</li>
        <li tabIndex="5">Trending</li>
        <li tabIndex="6">Guided</li>
        <li tabIndex="7">Products</li>
      </ul>
      <ul className={styles.footerGroupLinks}>
        <li tabIndex="8">COMPANY</li>
        <li tabIndex="9">Press Releases</li>
        <li tabIndex="10">Mission</li>
        <li tabIndex="11">Strategy</li>
        <li tabIndex="12">About</li>
      </ul>
      <ul className={styles.footerGroupLinks}>
        <li tabIndex="13">INFO</li>
        <li tabIndex="14">Support</li>
        <li tabIndex="15">Customer Service</li>
        <li tabIndex="16">Get Started Guide</li>
      </ul>
      <ul className={styles.footerGroupLinks}>
        <li tabIndex="17">FOLLOW US</li>
        <li className={styles.socialLinks}>
          <img tabIndex="18" src={require('../images/facebook.svg')} alt="..." />
          <img tabIndex="19" src={require('../images/twitter.svg')} alt="..." />
          <img tabIndex="20" src={require('../images/linkedin.svg')} alt="..." />
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