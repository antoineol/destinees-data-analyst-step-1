// From https://hung.dev/posts/jest-vite
import { allTrainingsRaw, clone } from './details/trainings';
import { prepareTrainings, yourCriteria } from './prepare-trainings';

it('test_1_filter', () => {
  const allTrainings = clone(allTrainingsRaw);
  const filteredTrainings = prepareTrainings(allTrainings);
  const filteredTrainingsSet = new Set(filteredTrainings);
  for (const training of allTrainings) {
    if (training.months <= yourCriteria.maxMonths && training.location === yourCriteria.location) {
      expect(filteredTrainingsSet).toContain(training);
    } else {
      expect(filteredTrainingsSet).not.toContain(training);
    }
  }
});

it('test_2_title_full', () => {
  const allTrainings = clone(allTrainingsRaw);
  const allTrainingsRawById = keyBy(allTrainingsRaw, 'id');
  const _filteredTrainings = prepareTrainings(allTrainings);
  for (const training of allTrainings) {
    const initialTitle = allTrainingsRawById[training.id].title;
    if (training.seats === 0) {
      expect(training.title).toBe(initialTitle + ' (full)');
    }
    if (training.seats > 10) {
      expect(training.title).toBe(initialTitle);
    }
  }
});

it('test_3_title_popular', () => {
  const allTrainings = clone(allTrainingsRaw);
  const allTrainingsRawById = keyBy(allTrainingsRaw, 'id');
  const _filteredTrainings = prepareTrainings(allTrainings);
  for (const training of allTrainings) {
    const initialTitle = allTrainingsRawById[training.id].title;
    if (training.seats > 0 && training.seats <= 10) {
      expect(training.title).toBe(initialTitle + ' (popular)');
    }
    if (training.seats > 10) {
      expect(training.title).toBe(initialTitle);
    }
  }
});

// it('test_4_title_normal', () => {
//   const allTrainings = clone(allTrainingsRaw);
//   const allTrainingsRawById = keyBy(allTrainingsRaw, 'id');
//   const _filteredTrainings = prepareTrainings(allTrainings);
//   for (const training of allTrainings) {
//     const initialTitle = allTrainingsRawById[training.id].title;
//     if (training.seats > 10) {
//       expect(training.title).toBe(initialTitle);
//     }
//   }
// });

it('test_4_color_few_seats', () => {
  const allTrainings = clone(allTrainingsRaw);
  const _filteredTrainings = prepareTrainings(allTrainings);
  for (const training of allTrainings) {
    if (training.seats <= 10) {
      expect(training.fewSeatsLeft).toBe(true);
    }
    if (training.seats > 10) {
      expect([false, undefined]).toContain(training.fewSeatsLeft);
    }
  }
});

// it('test_6_color_normal', () => {
//   const allTrainings = clone(allTrainingsRaw);
//   const _filteredTrainings = prepareTrainings(allTrainings);
//   for (const training of allTrainings) {
//     if (training.seats > 10) {
//       expect([false, undefined]).toContain(training.fewSeatsLeft);
//     }
//   }
// });

function keyBy<T, U extends keyof T>(array: T[], field: U) {
  const byKey = {} as Record<string, T>;
  for (const elt of array) {
    byKey[elt[field] as string] = elt;
  }
  return byKey;
}
