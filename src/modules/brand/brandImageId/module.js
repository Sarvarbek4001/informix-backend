const { fetch, fetchAll } = require("../../../lib/posgres");

const BRAND_IMAGE_ID = `
 SELECT 
   id
    FROM
    brand_files 
`;

const brand_image_id = () => fetchAll(BRAND_IMAGE_ID);

module.exports = {
  brand_image_id,
};
