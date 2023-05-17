import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';
import type { QueryExecResult } from 'sql.js';

import { runUserQuery } from './db';

interface Props {}

export const DbTable: FC<Props> = memo(function DbTable(props) {
  const [trainings, setTrainings] = useState<QueryExecResult | undefined>(undefined);
  useEffect(() => {
    (async function () {
      const t = await runUserQuery();
      setTrainings(t);
    })();
  }, []);

  if (!trainings) return <div className="db-table-wrapper">No data yet</div>;

  return (
    <div className="db-table-wrapper">
      <table>
        <thead>
          <tr>
            {trainings.columns.map(colHead => (
              <th key={colHead}>{colHead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {trainings.values.map((row, i) => (
            <tr key={i}>
              {row.map((cell, i) => (
                <td key={trainings.columns[i]}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
