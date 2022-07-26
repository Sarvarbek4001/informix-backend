const { fetch, fetchAll } = require("../../lib/posgres");

const BLOCK_SECTION = `
 SELECT
  *
  FROM
   block
    WHERE
    section_id=$1
     ORDER BY block_id
`;

const get_block_section = (sectionId) => fetchAll(BLOCK_SECTION, sectionId);

module.exports = {
  get_block_section,
};
