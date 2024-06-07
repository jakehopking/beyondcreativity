import Image from 'next/image';

import styles from './page.module.scss';
import Section from '@/components/section/Section';

export default function Home() {
  return (
    <main className={styles.main}>
      <Section justify="center" className="u-p-y-space-3xl">
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src="/assets/images/logos/go-beyond-creativity-logo-large.svg"
            alt="Go Beyond Creativity logo"
            layout="responsive"
            width={100}
            height={100}
          />
        </div>
      </Section>
      <Section justify="center" className="u-m-b-space-m">
        <div className={styles.grid}>
          <a
            href="https://newsletter.gobeyondcreativity.com/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="u-font-size-1">
              Digital Agency <span>-&gt;</span>
            </h2>
            <p>
              We&apos;re in the process of establishing a digital agency,
              focussed on creating digital products that make a difference
              beyond their creativity.{' '}
              <strong className="u-font-weight-medium">
                Follow our journey
              </strong>{' '}
              by signing up to our{' '}
              <strong className="u-font-weight-medium">newsletter</strong>.
            </p>
          </a>

          <a
            href="https://go.bynd.ink/beyond-creativity-manifesto-md"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="u-font-size-1">
              Manifesto <span>-&gt;</span>
            </h2>
            <p>
              Read and contribute to our open manifesto, which outlines our
              commitments for the Beyond Creativity initiative.
            </p>
          </a>

          <a
            href="https://elkliandhart.com/beyond-creativity-free-copy?utm_source=gobeyondcreativity&utm_medium=referral&utm_campaign=free-magazine"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="u-font-size-1">
              Free Magazine <span>-&gt;</span>
            </h2>
            <p>
              Beyond Creativity magazine is focussed on raising awareness for
              the <strong className="u-font-weight-medium">Power of Art</strong>
              , the{' '}
              <strong className="u-font-weight-medium">
                Development of Creativity
              </strong>
              , and advocating for{' '}
              <strong className="u-font-weight-medium">
                Creative Education
              </strong>
              .
            </p>
          </a>

          <a
            href="https://elkliandhart.com/about-adorn-your-walls-change-the-world?utm_source=gobeyondcreativity&utm_medium=referral&utm_campaign=adorn-your-walls"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="u-font-size-1">
              Elkli & Hart <span>-&gt;</span>
            </h2>
            <p>
              Learn more about our parent company, Elkli & Hart, and how we are
              trying to change the conversation around the power of creativity
              and creative education.
            </p>
          </a>

          <a href="mailto:jake@gobeyondcreativity.com" className={styles.card}>
            <h2 className="u-font-size-1">
              Contact <span>-&gt;</span>
            </h2>
            <p>
              If you&apos;re interested in working with us, and would like to
              discuss your project, then please email Jake Hopking directly.
            </p>
          </a>

          <a
            href="https://www.instagram.com/elkliandhart/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="u-font-size-1">
              Social <span>-&gt;</span>
            </h2>
            <p>
              If you&apos;d like to keep up to date with our work, then please
              follow our Elkli & Hart Instagram account until we fully
              transition our social media presence to @gobeyondcreativity.
            </p>
          </a>
        </div>
      </Section>
    </main>
  );
}
