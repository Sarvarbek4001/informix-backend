const PORT = process.env.PORT || 7000;
const PG = {
  connectionString: "postgres://postgres:sarvarbek@localhost:5432/informix",
};
const SECRET_KEY = "SECRET_KEY2277";
module.exports = {
  PORT,
  PG,
  SECRET_KEY,
};
