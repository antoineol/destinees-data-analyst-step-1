import { Fragment, useState } from 'react';

import { Card } from './Card';

export function TrainingListPage(props) {
  const { filteredTrainings } = props;
  const [applyMatch, setApplyMatch] = useState(false);
  const allTrainings = props.allTrainings;

  const myTrainings = applyMatch ? filteredTrainings : allTrainings;

  return (
    <main>
      <h1>Find your ideal developer training</h1>
      <h2>
        <strong>Your top criteria</strong>
      </h2>
      <ul>
        <li>Duration: &lt; 3 months</li>
        <li>Based in Paris</li>
      </ul>
      <button onClick={() => setApplyMatch(apply => !apply)}>
        {applyMatch ? 'Cancel' : 'Match me'}
      </button>
      <h2>
        <strong>All trainings</strong> (
        {myTrainings.length !== allTrainings.length ? (
          myTrainings.length
        ) : (
          <Fragment>200+</Fragment>
        )}
        )
      </h2>
      {myTrainings.map(training => (
        <Card key={training.id} training={training} />
      ))}
    </main>
  );
}
