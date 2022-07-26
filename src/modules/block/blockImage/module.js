const { fetch } = require("../../../lib/posgres");

const SINGLE_BRAND = `
 SELECT
  *  FROM
 block_img
  WHERE block_id = $1;
`;

const NEW_BLOCK_IMAGE = `
 INSERT INTO
 block_img(b_filename,b_filepath,b_mimetype,b_size,block_id)
  VALUES($1,$2,$3,$4,$5) RETURNING *
`;

const DELETE_BLOCK_IMAGE = `
  DELETE 
   FROM
   block_img
    WHERE 
    block_id=$1
     RETURNING *
`;

const new_block_image = (
  b_filename,
  b_filepath,
  b_mimetype,
  b_size,
  block_id
) =>
  fetch(NEW_BLOCK_IMAGE, b_filename, b_filepath, b_mimetype, b_size, block_id);

const single_block_img = (id) => fetch(SINGLE_BRAND, id);

const delete_block_img = (blockId) => fetch(DELETE_BLOCK_IMAGE, blockId);

module.exports = {
  new_block_image,
  single_block_img,
  delete_block_img,
};
