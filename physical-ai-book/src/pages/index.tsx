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
              to="/docs/intro">
              Learn More
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

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "This book revolutionized my understanding of how physics principles can enhance AI algorithms. A must-read for researchers in both fields.",
      author: "Dr. Sarah Chen",
      role: "AI Research Lead, Tech Innovations"
    },
    {
      quote: "The clear explanations and practical examples make complex concepts accessible. The bridge between physics and AI has never been clearer.",
      author: "Prof. Michael Rodriguez",
      role: "Director of Robotics Lab, University of Science"
    },
    {
      quote: "An exceptional resource that combines theoretical foundations with real-world applications. Highly recommended for practitioners and academics alike.",
      author: "Dr. James Liu",
      role: "Senior Research Scientist, AI Institute"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className="text--center padding-bottom--lg">
          <Heading as="h2">What Experts Are Saying</Heading>
          <p className="subtitle">Join thousands of researchers and engineers advancing Physical AI</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col col--4 margin-bottom--lg" key={index}>
              <div className={clsx('card', styles.testimonialCard)}>
                <div className="card__body">
                  <p className={styles.quote}>"{testimonial.quote}"</p>
                </div>
                <div className="card__footer">
                  <div className={styles.authorInfo}>
                    <strong>{testimonial.author}</strong>
                    <small className={styles.role}>{testimonial.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
        <TestimonialsSection />
        <NewsletterSection />
      </main>
    </Layout>
  );
}
