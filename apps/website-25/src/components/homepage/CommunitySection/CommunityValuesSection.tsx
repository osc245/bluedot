import { ValueCard } from '@bluedot/ui';

const CommunityValuesSection = () => {
  return (
    <div className="community-values-section">
      <div className="community-values-section__container flex sm:flex-row flex-col">
        <ValueCard
          icon="icons/network.svg"
          description="Our online community brings together 4,500+ professionals across 100+ countries"
        />
        <ValueCard
          icon="icons/people.svg"
          description="Diverse expertise, from engineers and entrepreneurs to policymakers and philosophers"
        />
        <ValueCard
          icon="icons/study.svg"
          description="40+ independent study groups worldwide have used our materials to run their own courses"
        />
        <ValueCard
          icon="icons/world.svg"
          description="We run regular in-person events across the world, turning online connections into lasting relationships"
        />
      </div>
    </div>
  );
};

export default CommunityValuesSection;
