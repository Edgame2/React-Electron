import path from "path";
import low from "lowdb";
import LocalStorage from "lowdb/adapters/LocalStorage";

const adapter = new LocalStorage(path.resolve(`${__dirname}/database.json`));
const db = low(adapter);

db.defaults({ alerts: [] }).write();

db.get("alerts")
  .push({ id: 1, type: "lowdb is awesome", entity: "apm" })
  .write();
// Data is automatically saved to localStorage
export function getalldata() {
  return db.get("alerts").value();
}
