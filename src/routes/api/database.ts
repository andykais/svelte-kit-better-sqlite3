import BetterSqlite3 from 'better-sqlite3'

const db = new BetterSqlite3('sqlite.db')

db.exec(`
DROP TABLE IF EXISTS person;
CREATE TABLE person (
  name TEXT NOT NULL
);`)
const person_insert = db.prepare('INSERT INTO person (name) VALUES (?)')
const person_select = db.prepare('SELECT * FROM person')

person_insert.run('Andrew Kaiser')
person_insert.run('Craig Kaiser')


export async function get(req, res) {
  const rows  = person_select.all()
  return { body: rows }
}
