import {
  HeroSection,
} from '@bluedot/ui';
import Head from 'next/head';
import BlogSection from '../components/homepage/BlogSection';
import CommunitySection from '../components/homepage/CommunitySection/index';
import CourseSection from '../components/homepage/CourseSection';
import FAQSection from '../components/homepage/FAQSection';
import GraduateSection from '../components/homepage/GraduateSection';
import StorySection from '../components/homepage/StorySection';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>BlueDot Impact | Industry-leading free AI courses and career support</title>
        <meta name="description" content="Learn for free about AI safety and how to ensure humanity safely navigates the transition to transformative AI. Join 4,000+ professionals building careers at organizations like Anthropic, OpenAI, and the UK’s AI Safety Institute." />
      </Head>
      <HeroSection
        title="The expertise you need to shape safe AI "
        subtitle="We run the world's most trusted AI Safety educational courses, career services and support community. Our programs are developed in collaboration with AI Safety world experts."
      >
        <div className="hero-section__logo-container flex flex-col items-center gap-7 mb-3">
          <img className="hero-section__logo-icon w-20 mb-20" src="/images/logo/BlueDot_Impact_Icon_White.svg" alt="BlueDot Impact" />
        </div>
      </HeroSection>
      <GraduateSection />
      <CourseSection />
      <CommunitySection />
      <StorySection />
      <BlogSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
