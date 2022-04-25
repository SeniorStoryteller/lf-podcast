import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Feature from '../components/feature';
import { features } from '../components/feature-config';
import FeaturesTwo from '../components/featuresTwo';
import { featuresTwo } from '../components/featuresTwo-config';
import { podcasts } from "../components/podcasts";
import FeaturePodcast from "../components/featurePodcast";

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={classnames('hero--subtitle')}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={'https://linuxfoundation.org/'}>
              GET STARTED
            </Link>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={'https://github.com/mcleo-d/lf-podcast/'}>
              GITHUB
            </Link>
          </div>
        </div>
      </header>
      <main>
      {podcasts && podcasts.length && (
          <section className={styles.podcasts}>
            <div className="container">
              <div className="row">
                {podcasts.map((props, idx) => (
                    <FeaturePodcast key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;