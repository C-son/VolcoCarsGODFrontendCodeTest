import { IconButton } from '@volvo-cars/react-icons';
import { IPagingProps } from '../../types';

const Paging = ({ previousButtonProps, nextButtonProps }: IPagingProps) => {
  return (
    <div className='flex gap-x-8 mr-16 mt-16 justify-end items-center until-md:hidden' aria-hidden>
      <IconButton {...previousButtonProps} iconName='navigation-chevronback' />
      <IconButton {...nextButtonProps} iconName='navigation-chevronforward' />
    </div>
  );
};

export default Paging;
