import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title">
            Physical AI Book
          </Heading>
          <p className="hero__subtitle">Revolutionizing the intersection of physics and artificial intelligence</p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Start Reading - 5min ⏱️
            </Link>
            <Link
              className="button button--secondary button--lg margin-left--md"
              to="/docs/chapter1">
              Explore Physics Concepts
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NewsletterSection() {
  return (
    <section className={styles.newsletterSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Stay Updated</Heading>
            <p>Get notified about new chapters and insights on Physical AI</p>
          </div>
          <div className="col col--6">
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={clsx('input', styles.newsletterInput)}
              />
              <button type="submit" className={clsx('button button--primary', styles.newsletterButton)}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Physical AI Book - Where Physics Meets Intelligence`}
      description="Discover the fascinating world of Physical AI - where physics principles enhance artificial intelligence algorithms">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <NewsletterSection />
      </main>
    </Layout>
  );
}
