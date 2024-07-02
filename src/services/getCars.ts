import { ICarDataProps } from '../types';

export const getCars = async () => {
  let cars: ICarDataProps[] = [];
  let error = false;
  let loading = true;

  try {
    const response = await fetch('/api/cars.json');
    cars = await response.json();
  } catch (error) {
    error = true;
    throw new Error('Failed to fetch cars');
  } finally {
    loading = false;
  }

  return { loading, cars, error };
};
