import type { Database } from 'sql.js';
import sqlJs from 'sql.js';

// CREATE TABLE hello (a int, b char);
// INSERT INTO hello VALUES (0, 'hello');
// https://codebeautify.org/sql-table-generator#
const createTableQuery = `
CREATE TABLE trainings (
	id int,
	title TEXT,
	months INT,
	location TEXT,
	price INT,
	seats INT,
	fewSeatsLeft BOOLEAN,
	PRIMARY KEY (id)
);
INSERT INTO trainings VALUES (1, 'Web JS Developer', 6, 'Bordeaux', 7000, 23, false);
INSERT INTO trainings VALUES (2, 'Full-stack Developer', 3, 'Paris', 8300, 4, false);
INSERT INTO trainings VALUES (3, 'Web & mobile Developer', 24, 'Nantes', 8000, 8, false);
INSERT INTO trainings VALUES (4, 'Web JS Developer', 4, 'Paris', 8500, 13, false);
INSERT INTO trainings VALUES (5, 'React Developer', 3, 'Paris', 7500, 16, false);
INSERT INTO trainings VALUES (6, 'Django Developer', 3, 'Paris', 7500, 0, false);
`;

let _db: Promise<Database> | undefined = undefined;

async function getDb() {
  if (!_db) {
    _db = initSql();
  }

  return _db;
}

async function initSql() {
  const SQL = await sqlJs({
    // Required to load the wasm binary asynchronously. Of course, you can host it wherever you want
    // You can omit locateFile completely when running in node
    locateFile: file => `https://sql.js.org/dist/${file}`,
  });

  // Create a database
  const db = new SQL.Database();

  db.run(createTableQuery); // Run the query without returning anything

  return db;

  //   // Prepare an sql statement
  //   const statement = db.prepare('SELECT * FROM trainings');
  //   // WHERE a=:aval AND b=:bval
  //
  //   // Bind values to the parameters and fetch the results of the query
  //   const result = statement.getAsObject({} /* { ':aval': 1, ':bval': 'world' } */);
  //   const result2 = statement.get({});
  //   statement.free();
  //
  //   console.log('result', result);
  //   console.log('result2', result2);
}

// export async function runSqlQuery(query: string) {
//   const db = await getDb();
//   return db.exec(query)[0];
//   // console.log('result3', result3);
//   // for (const res of result3) {
//   //   console.log('col:', res.columns);
//   //   console.log('values:', res.values); // Array (row) of arrays (col)
//   // }
// }
//
// export async function getAllTrainings() {
//   return runSqlQuery('SELECT * FROM trainings');
// }

export async function runUserQuery() {
  const [db, query] = await Promise.all([getDb(), getUserQuery()]);
  return db.exec(query)[0];
}

async function getUserQuery() {
  const res = await fetch('/query.sql');
  const query = await res.text();
  return query;
}

// initSql().catch(error => console.error(error));
