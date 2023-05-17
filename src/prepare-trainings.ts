import type { Training } from './details/trainings';

export const yourCriteria = {
  maxMonths: 3,
  location: 'Paris',
  maxPrice: 8000,
};

export function prepareTrainings(allTrainings: Training[]) {
  for (const training of allTrainings) {
    if (training.seats === 0) {
      training.fewSeatsLeft = true;
      training.title = training.title + ' (full)';
    } else if (training.seats <= 10) {
      training.fewSeatsLeft = true;
      training.title = training.title + ' (popular)';
    } else {
      training.fewSeatsLeft = false;
    }
  }

  const filteredTrainings = allTrainings.filter(
    training =>
      training.months <= yourCriteria.maxMonths && training.location === yourCriteria.location,
  );

  return filteredTrainings;
}
