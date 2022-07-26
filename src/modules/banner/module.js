const { fetch, fetchAll } = require("../../lib/posgres");

const BANNER = `
  SELECT 
   * 
   FROM 
    banner
     WHERE 
      section_id = $1
      ORDER BY banner_id
`;

const NEW_BANNER = `
  INSERT INTO banner(banner_title_uz,banner_title_ru,banner_title_en,section_id) 
    VALUES($1,$2,$3,$4) RETURNING *
`;

const UPDATE_BANNER = `
   UPDATE banner
    SET
   banner_title_uz = $1,
   banner_title_ru = $2,
   banner_title_en = $3
    WHERE
   banner_id = $4 RETURNING *
`;

const DELETE_BANNER = `
 DELETE 
  FROM
   banner
   WHERE 
    banner_id = $1
`;

const section_banner = (sectionId) => fetchAll(BANNER, sectionId);
const new_banner = (banner_title_uz,banner_title_ru,banner_title_en, section_id) =>
  fetch(NEW_BANNER, banner_title_uz,banner_title_ru,banner_title_en, section_id);
const update_banner = (banner_title_uz,banner_title_ru,banner_title_en, banner_id) =>
  fetch(UPDATE_BANNER, banner_title_uz,banner_title_ru,banner_title_en, banner_id);
const delete_banner = (bannerId) => fetch(DELETE_BANNER, bannerId);

module.exports = {
  section_banner,
  new_banner,
  update_banner,
  delete_banner,
};
