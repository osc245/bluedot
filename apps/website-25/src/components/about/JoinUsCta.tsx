import { CTALinkOrButton } from '@bluedot/ui';

const JoinUsCta = () => {
  return (
    <div className="join-us-cta w-full max-w-max-width mx-auto lg:px-spacing-x my-spacing-y overflow-hidden">
      <div className="join-us-cta__container w-full lg:container-lined flex flex-col justify-center items-center py-20 bg-[radial-gradient(ellipse_at_30%,_#fff_0,_#6687ff_100%)]">
        <h3 className="join-us-cta__title max-w-[890px] text-center mb-8">Join us in our mission to ensure humanity safely navigates the transition to transformative AI.</h3>
        <CTALinkOrButton
          className="join-us-cta__cta-button"
          variant="primary"
          withChevron
          url="/careers"
        >
          View our careers
        </CTALinkOrButton>
      </div>
    </div>
  );
};

export default JoinUsCta;
