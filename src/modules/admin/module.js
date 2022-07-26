const { fetch, fetchAll } = require("../../lib/posgres");

const ADMIN = `
 SELECT 
  * 
   from 
    admin
     WHERE username=$1
`;

const admin = (username) => fetchAll(ADMIN, username);

module.exports = {
  admin,
};
