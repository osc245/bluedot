import '@bluedot/ui/src/shared.css';
import '../globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Footer, Nav } from '@bluedot/ui';

// TODO: add routing to courses when AISafetyFundamentals course is integrated, i.e.'/courses/intro-transformative-ai
const courses = [
  { title: 'Intro to Transformative AI', href: 'https://aisafetyfundamentals.com/intro-to-tai/' },
  { title: 'AI Alignment Fast-Track', href: 'https://aisafetyfundamentals.com/alignment-fast-track/' },
  { title: 'AI Alignment In-Depth', href: 'https://aisafetyfundamentals.com/alignment/' },
  { title: 'AI Governance Fast-Track', href: 'https://aisafetyfundamentals.com/governance-fast-track/' },
  { title: 'Economics of Transformative AI Fast-Track', href: 'https://aisafetyfundamentals.com/economics-of-tai-fast-track/', isNew: true },
];

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>BlueDot Impact</title>
      </Head>
      <Nav
        logo="/images/logo/BlueDot_Impact_Logo.svg"
        courses={courses}
      >
        <a href="https://donate.stripe.com/5kA3fpgjpdJv6o89AA" target="_blank" rel="noopener noreferrer">Support us</a>
        <a href="/about">About</a>
        <a href="/careers">Join us</a>
        <a href="https://bluedot.org/blog/" target="_blank" rel="noopener noreferrer">Blog</a>
      </Nav>
      <main className="bluedot-base">
        <Component {...pageProps} />
      </main>
      <Footer logo="/images/logo/BlueDot_Impact_Logo_White.svg" />
    </>
  );
};

const AppWithNoSsr = dynamic(
  () => Promise.resolve(App),
  { ssr: false },
);

export default AppWithNoSsr;
