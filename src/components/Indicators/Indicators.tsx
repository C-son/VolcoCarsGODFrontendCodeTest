import { IndicatorsProps } from '../../types';

const Indicators = ({ indicatorCount, activeIndex }: IndicatorsProps) => {
  return (
    <div className='md:hidden reel-indicators' aria-hidden>
      {[...Array(indicatorCount).keys()].map((_, index) => (
        <div key={`indicator_${index}`} aria-current={activeIndex === index} />
      ))}
    </div>
  );
};

export default Indicators;
