const { fetch, fetchAll } = require("../../lib/posgres");

const SINGLE_BLOCK = `
  SELECT
   * 
   FROM
    block
     WHERE
      block_id = $1
       ORDER BY block_id
`;

const single_block = (blockId) => fetch(SINGLE_BLOCK, blockId);

module.exports = {
  single_block,
};
