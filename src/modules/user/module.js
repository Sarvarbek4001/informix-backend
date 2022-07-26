const { fetch, fetchAll } = require("../../lib/posgres");

const ONE_USER = `
 SELECT 
   *
     FROM
       users
        WHERE user_id = $1
`;

const one_user = (userId) => fetch(ONE_USER, userId);

module.exports = {
  one_user,
};
