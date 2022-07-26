const { fetch, fetchAll } = require("../../lib/posgres");

// const USERS = `
//  SELECT
//    *
//     FROM
//       users
//       ORDER BY
// 	      user_id
// `;
const USERS = `
SELECT
u.user_id,
u.first_name,
u.last_name,
u.user_email,
u.phone_number,
to_char(u.created_at, 'yyyy-MM-dd HH:MI:ss') as created_at,
to_char(u.updated_at, 'yyyy-mm-dd HH:MI:ss') as updated_at,
u.is_connected,
u.admin_id
FROM users u
ORDER BY u.user_id
`;

const NEW_USERS = `
  INSERT INTO users(first_name,last_name,user_email,phone_number) VALUES($1,$2,$3,$4)
`;

const UPDATE_USER = `
  UPDATE
    users
    SET
      is_connected = $1,
      admin_id=$2,
      updated_at = NOW()
      WHERE user_id = $3
`;
const DELETE_USER = `
  DELETE
  from
  users
   WHERE 
   user_id = $1
`;

const users = () => fetchAll(USERS);
const newUser = (first_name, last_name, user_email, phone_number) =>
  fetch(NEW_USERS, first_name, last_name, user_email, phone_number);

const connectedUser = (isConnected, adminId, userId) =>
  fetch(UPDATE_USER, isConnected, adminId, userId);

const delete_user = (userId) => fetch(DELETE_USER, userId);
module.exports = {
  users,
  newUser,
  connectedUser,
  delete_user,
};
