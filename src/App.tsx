import { DbTable } from './details/DbTable';
import { TrainingListPage } from './details/TrainingListPage';
import { allTrainingsRaw, clone } from './details/trainings';
import { prepareTrainings } from './prepare-trainings';

export function App() {
  const allTrainings = clone(allTrainingsRaw);

  const filteredTrainings = prepareTrainings(allTrainings);

  return (
    <>
      <DbTable />
      <TrainingListPage allTrainings={allTrainings} filteredTrainings={filteredTrainings} />
    </>
  );
}
