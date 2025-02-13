import clsx from 'clsx';
import React from 'react';
import {
  FaXTwitter, FaYoutube, FaLinkedin,
} from 'react-icons/fa6';
import { EXTERNAL_LINK_PROPS } from './utils';
import { COURSES } from './constants';

export type FooterProps = React.PropsWithChildren<{
  // Optional
  className?: string,
  logo?: string
}>;

type FooterSectionProps = {
  title?: string;
  links?: { href: string; label: string }[];
};

const FooterLinksSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className="footer__section">
    {title && <h3 className="footer__heading font-[650] text-on-dark mb-4 text-size-md">{title}</h3>}
    {links && (
      <ul className="footer__list space-y-4 mb-auto font-normal list-none p-0">
        {links.map((link) => (
          <li key={link.href} className="footer__item">
            <a href={link.href} className="footer__link text-bluedot-lighter hover:text-white hover:cursor-pointer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

type FooterSocialProps = {
  className?: string;
};

const FooterSocial: React.FC<FooterSocialProps> = ({ className }) => (
  <div className={clsx('footer__social flex gap-6', className)}>
    <a href="https://twitter.com/BlueDotImpact" {...EXTERNAL_LINK_PROPS} className="footer__social-link link-on-dark" aria-label="Twitter">
      <FaXTwitter className="size-6" />
    </a>
    <a href="https://youtube.com/@bluedotimpact" {...EXTERNAL_LINK_PROPS} className="footer__social-link link-on-dark" aria-label="YouTube">
      <FaYoutube className="size-6" />
    </a>
    <a href="https://www.linkedin.com/company/bluedotimpact/" {...EXTERNAL_LINK_PROPS} className="footer__social-link link-on-dark" aria-label="LinkedIn">
      <FaLinkedin className="size-6" />
    </a>
  </div>
);

export const Footer: React.FC<FooterProps> = ({ className, logo }) => {
  // Footer links are styled differently than default `.link-on-dark`
  const footerLinkClassNames = 'footer__link text-bluedot-lighter hover:text-white hover:cursor-pointer';

  return (
    <div className="footer">
      <footer className={clsx('footer__main bg-bluedot-darker py-10 flex flex-col', className)}>
        <div className="footer__content section-normal flex flex-col">
          <nav className="footer__nav flex flex-col justify-between gap-20 lg:grid lg:grid-cols-[1fr_2fr] xl:grid-cols-2 lg:gap-4">
            <div className="footer__section footer__section--brand flex flex-row lg:flex-col justify-between">
              <a href="/">
                {logo ? (
                  <img className="footer__logo h-8 mr-auto" src={logo} alt="BlueDot Impact Logo" />
                ) : (
                  <p className="footer__logo h-8 text-xl text-white">BlueDot Impact</p>
                )}
              </a>
              <FooterSocial className="hidden sm:flex" />
            </div>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-16">
              <FooterLinksSection
                title="BlueDot Impact"
                links={[
                  { href: '/about', label: 'About us' },
                  { href: 'https://donate.stripe.com/5kA3fpgjpdJv6o89AA', label: 'Support us', ...EXTERNAL_LINK_PROPS },
                  { href: '/careers', label: 'Join us' },
                  { href: 'mailto:team@bluedot.org', label: 'Contact us' },
                ]}
              />

              <FooterLinksSection
                title="Explore"
                links={COURSES.map((course) => ({ href: course.href, label: course.title }))}
              />

              <FooterLinksSection
                title="Resources"
                links={[
                  // TODO: 01/27 add routing to resources when resources are integrated
                  // { href: '/announcements', label: 'Announcements and stories' },
                  // { href: '/useful-links', label: 'Useful links' },
                  // { href: '/community-projects', label: 'Community projects' },
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                ]}
              />
            </div>
            <FooterSocial className="sm:hidden" />
          </nav>
          <p className="footer__copyright text-sm text-center text-bluedot-lighter mt-12 lg:mt-24 mb-8">
            &copy; {new Date().getFullYear()} <a href="https://bluedot.org/" className={footerLinkClassNames}>BlueDot Impact</a> is primarily funded by <a href="https://www.openphilanthropy.org/" {...EXTERNAL_LINK_PROPS} className={footerLinkClassNames}>Open Philanthropy</a>, and is a non-profit based in the UK (company number <a href="https://find-and-update.company-information.service.gov.uk/company/14964572" {...EXTERNAL_LINK_PROPS} className={footerLinkClassNames}>14964572</a>).
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
