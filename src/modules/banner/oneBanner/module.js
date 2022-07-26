const { fetch, fetchAll } = require("../../../lib/posgres");

const ONE_BANNER = `
 SELECT 
  * FROM
  banner
    WHERE 
     banner_id = $1
`;

const getOneBanner = (bannerId) => fetch(ONE_BANNER, bannerId);

module.exports = {
  getOneBanner,
};
