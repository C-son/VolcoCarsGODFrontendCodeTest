import { IFilterProps } from '../../types';

const Filter = ({ bodyTypes, currentFilter, toggleFilter }: IFilterProps) => {
  return (
    <div className='flex gap-4 items-center'>
      <div>Filter by type:</div>
      <div className='flex gap-4 ml-4'>
        {bodyTypes.map(bodyType => (
          <button
            key={bodyType}
            className={`uppercase ${bodyType === currentFilter ? 'button-filled' : 'button-outlined'}`}
            onClick={() => toggleFilter(bodyType)}
            data-color={bodyType === currentFilter ? 'accent' : ''}
            data-size='small'>
            {bodyType}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
