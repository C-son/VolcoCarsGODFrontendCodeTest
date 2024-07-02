export interface ICarDataProps {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export interface ICarObjectProps {
  cars: ICarDataProps[];
  loading: boolean;
  error: boolean;
}

export interface IndicatorsProps {
  indicatorCount: number;
  activeIndex: number;
}

export interface IFilterProps {
  bodyTypes: string[];
  currentFilter: string;
  toggleFilter: (newFilter: string) => void;
}

// TODO: Add the missing types
export interface IPagingProps {
  previousButtonProps: any;
  nextButtonProps: any;
}
