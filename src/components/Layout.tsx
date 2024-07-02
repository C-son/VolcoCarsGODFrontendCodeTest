import { useReel } from '@volvo-cars/react-headless';
import { FC, useEffect, useRef, useState } from 'react';
// import data from '../../public/api/cars.json';
import { getCars } from '../services/getCars';
import { ICarObjectProps } from '../types';
import CarCard from './CarCard';
import Filter from './Filter';
import Indicators from './Indicators';
import Paging from './Paging';

const Layout: FC = () => {
  const [carData, setCarData] = useState<ICarObjectProps>({
    cars: [],
    loading: true,
    error: false,
  });
  const [currentFilter, setCurrentFilter] = useState<string>('');
  const refReel = useRef(null);
  const { previousButtonProps, nextButtonProps, activeIndex, indicatorCount } = useReel({
    ref: refReel,
  });
  const bodyTypes = [...new Set(carData.cars.map(d => d.bodyType))];

  useEffect(() => {
    const fetchData = async () => {
      const data = (await getCars()) as ICarObjectProps;
      setCarData(data);
    };

    fetchData();
  }, []);

  const toggleFilter = (newFilter: string) => {
    setCurrentFilter(currentFilter === newFilter ? '' : newFilter);
  };

  if (carData.loading) {
    return (
      <div className='flex gap-16 flex-row justify-center items-center'>
        <progress aria-label='Loading' className='spinner w-24' /> Loading...
      </div>
    );
  }

  if (carData.error) {
    return (
      <div className='container-sm p-16 flex-col flex-wrap gap-8 border-l-2 border-feedback-red bg-feedback-red'>
        <h3 className='font-medium'>Error</h3>
        <p>Failed fetching cars, try again later...</p>
      </div>
    );
  }

  return (
    <section>
      <Filter bodyTypes={bodyTypes} toggleFilter={toggleFilter} currentFilter={currentFilter} />
      <hr />
      <main
        aria-label='Our 2023 range of car models'
        className='reel gap-x-16 scrollbar-none gap-x-gutter'
        ref={refReel}
        tabIndex={0}>
        {carData.cars
          .filter(car => (currentFilter ? car.bodyType === currentFilter : car))
          .map(car => (
            <CarCard key={car.id} car={car} />
          ))}
      </main>
      <Paging previousButtonProps={previousButtonProps} nextButtonProps={nextButtonProps} />
      <Indicators indicatorCount={indicatorCount} activeIndex={activeIndex} />
    </section>
  );
};

export default Layout;
