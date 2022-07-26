const { fetch, fetchAll } = require("../../lib/posgres");

const BRAND = `
  SELECT
  *
    FROM
    brand_files
    WHERE id=$1
`;
const NEW_BRAND = `
  INSERT INTO
  brand_files(filename,filepath,mimetype,size)
   VALUES($1,$2,$3,$4) RETURNING *
`;
const DELETE_BRAND = `
 DELETE 
  FROM
   brand_files
    WHERE id=$1
     RETURNING *
`;

const single_brand = (id) => fetch(BRAND, id);

const new_brand = (filename, fielpath, mimetype, size) =>
  fetch(NEW_BRAND, filename, fielpath, mimetype, size);

const delete_brand = (id) => fetch(DELETE_BRAND, id);

module.exports = {
  new_brand,
  single_brand,
  delete_brand,
};
