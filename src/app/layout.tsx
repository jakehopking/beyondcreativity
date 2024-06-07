import { Metadata } from 'next';

import './globals.scss';

import { Kumbh_Sans } from 'next/font/google';
import Footer from '@/components/footer/Footer';

const kumbh_sans = Kumbh_Sans({
  subsets: ['latin'],
  variable: '--font-kumbh-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Go Beyond Creativity',
    template: '%s | Go Beyond Creativity',
  },
  description: `New digital agency and creative studio with offices in Beverly Hills, California and London, UK. We design, build and launch digital products that make a difference beyond their creativity.`,
  keywords: [
    'digital agency',
    'creative studio',
    'digital products',
    'Beverly Hills',
    'California',
    'London',
    'UK',
    'design',
    'build',
    'launch',
    'make a difference',
    'beyond creativity',
    'web design',
    'web development',
    'branding',
    'creative direction',
    'creative strategy',
    'creative consultancy',
    'creative consulting',
    'creative services',
    'creative agency',
    'creative agencies',
    'creative design',
    'creative designs',
    'creative branding',
    'creative brand',
    'creative brands',
    'creative marketing',
    'creative campaigns',
    'creative campaign',
    'creative content',
    'creative storytelling',
    'creative writing',
    'creative copywriting',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={kumbh_sans.className}>
        <div className="page-wrapper">{children}</div>
        <Footer>
          <p className="u-text-align u-font-size--1">
            <strong>go</strong>beyond creativity is a trading name of Elkli &
            Hart Limited
            <br />
            &copy; 2019-{new Date().getFullYear().toString().slice(2)}. Company
            no. GB11864428. VAT no. GB318601027.
          </p>
        </Footer>
      </body>
    </html>
  );
}
