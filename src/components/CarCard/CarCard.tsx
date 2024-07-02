import Image from 'next/image';
import { ICarDataProps } from '../../types';

const CarCard = ({ car }: { car: ICarDataProps }) => {
  return (
    <div className='flex-col flex-shrink-0 flex-grow-0 gap-y-24 w-xs h-full snap-start'>
      <p className='font-medium'>
        <div className='font-16 text-secondary font-medium uppercase'>{car.bodyType}</div>
        {car.modelName} <span className='font-light'>{car.modelType}</span>
      </p>
      <div className='w-xs'>
        <Image src={car.imageUrl} width={800} height={600} alt={car.modelName} />
      </div>

      <div>
        <div className='flex justify-center gap-16'>
          <a href={`/learn/${car.id}`} className='button-text'>
            Learn
          </a>
          <a href={`/shop/${car.id}`} className='button-text'>
            Shop
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
