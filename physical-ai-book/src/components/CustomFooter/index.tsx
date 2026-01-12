import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

const FooterLink = ({ to, href, label, prependBaseUrlToHref, ...props }) => {
  const toUrl = useBaseUrl(to);
  const hrefUrl = useBaseUrl(href, { forcePrependBaseUrl: true });

  return (
    <Link
      className={styles.footerLinkItem}
      {...(href
        ? {
            href: prependBaseUrlToHref ? hrefUrl : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {label}
    </Link>
  );
};

const FooterLogo = ({ logo, alt, width, height }) => (
  <img
    src={useBaseUrl(logo)}
    alt={alt}
    width={width}
    height={height}
    className={styles.footerLogo}
  />
);

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <Link
        href="https://twitter.com/physical_ai_book"
        className={clsx(styles.socialLink, styles.twitter)}
        aria-label="Follow us on Twitter"
      >
        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 5.833zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </Link>
      <Link
        href="https://github.com/physical-ai-book"
        className={clsx(styles.socialLink, styles.github)}
        aria-label="View our GitHub"
      >
        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      </Link>
      <Link
        href="https://linkedin.com/company/physical-ai-book"
        className={clsx(styles.socialLink, styles.linkedin)}
        aria-label="Connect with us on LinkedIn"
      >
        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </Link>
      <Link
        href="https://discord.gg/physical-ai"
        className={clsx(styles.socialLink, styles.discord)}
        aria-label="Join our Discord"
      >
        <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
        </svg>
      </Link>
    </div>
  );
};

const Footer = () => {
  const { siteConfig } = useDocusaurusContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { copyright, links, logo } = siteConfig.themeConfig.footer;

  return (
    <footer className={clsx(styles.footer, isVisible && styles.visible)}>
      <div className={styles.footerGradient}></div>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.brand}>
            {logo != null && <FooterLogo {...logo} />}
            <h2 className={styles.brandTitle}>Physical AI Book</h2>
            <p className={styles.brandDescription}>
              Bridging the gap between physics and artificial intelligence for revolutionary advances.
            </p>
          </div>
          <SocialLinks />
        </div>

        <div className={styles.footerMiddle}>
          {links &&
            Array.isArray(links) &&
            links.map((linkItem, i) => (
              <div key={i} className={styles.linkGroup}>
                <h3 className={styles.linkGroupTitle}>{linkItem.title}</h3>
                <ul className={styles.linkGroupItems}>
                  {linkItem.items.map((item, j) => (
                    <li key={j} className={styles.linkItem}>
                      <FooterLink {...item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <span>{copyright}</span>
          </div>
          <div className={styles.bottomLinks}>
            <FooterLink href="https://opensource.org/licenses/MIT" label="Privacy Policy" />
            <FooterLink href="https://opensource.org/licenses/MIT" label="Terms of Service" />
            <FooterLink href="https://opensource.org/licenses/MIT" label="Cookies" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;