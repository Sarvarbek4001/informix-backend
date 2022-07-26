const { fetch, fetchAll } = require("../../lib/posgres");

const CREATED_ADMIN = `
 INSERT INTO 
  admin(username,password,role)
   VALUES($1,$2,$3) 
`;
const new_admin = (username, password, role) =>
  fetch(CREATED_ADMIN, username, password, role);

module.exports = {
  new_admin,
};
