import { Fragment } from 'react';

export function Card(props) {
  const training = props.training;

  return (
    <div className="card">
      <img className="logo" src={training.logo} alt={training.alt} />
      <div>
        <h3>{training.title}</h3>
        <div className="card-figures">
          <div className="card-figure">
            <img src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="Duration" />{' '}
            {training.months} months
          </div>
          <div className="card-figure">
            <img src="https://cdn-icons-png.flaticon.com/512/684/684809.png" alt="Location" />{' '}
            {training.location}
          </div>
          <div className="card-figure">
            <img src="https://cdn-icons-png.flaticon.com/512/32/32719.png" alt="Price" />{' '}
            {training.price}
          </div>
        </div>
        <div
          className="seats-tag"
          style={{
            color: training.fewSeatsLeft ? 'darkred' : 'darkgray',
            fontWeight: training.fewSeatsLeft ? 'bold' : undefined,
          }}
        >
          {training.fewSeatsLeft && (
            <img
              src="https://cdn-icons-png.flaticon.com/128/6897/6897039.png"
              width="16"
              height="16"
            />
          )}
          {training.seats === 0 && <Fragment>No seat left</Fragment>}
          {training.seats !== 0 && (
            <Fragment>
              {training.seats} seats left
              {training.fewSeatsLeft && '! Hurry up.'}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
