const { fetch, fetchAll } = require("../../../src/lib/posgres");

const SECTION = `
  select block.block_id, block.title_uz,block.title_ru,block.title_en,block.content_uz,block.content_ru,block.content_en,block.btn_text_uz,block.btn_text_ru,block.btn_text_en,block.b_row_reverse,block.section_id, block_img.b_img_id from block
 inner join block_img on block.block_id=block_img.block_id where section_id =$1
`;

const BANNER_TITLE = `
select banner_title_uz,banner_title_ru,banner_title_en from (select section.section_id,section.section_name,banner.banner_title_uz,banner.banner_title_ru,banner.banner_title_en from section 
inner join banner on section.section_id=banner.section_id) sec where section_id=$1;
`;

const NEW_BLOCK = `
 INSERT INTO
 block(title_uz,title_ru,title_en,content_uz,content_ru,content_en,btn_text_uz,btn_text_ru,btn_text_en,b_row_reverse,section_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *
`;

const REMOVE_BLOCK = `
  DELETE 
   FROM
    block
    WHERE
     block_id = $1
     RETURNING *
`;
const UPDATE_BLOCK = `
  UPDATE
  block
  SET title_uz =$1,
      title_ru =$2,
      title_en =$3,
      content_uz=$4,
      content_ru=$5,
      content_en=$6,
      btn_text_uz=$7,
      btn_text_ru=$8,
      btn_text_en=$9,
      b_row_reverse=$10
  WHERE 
    block_id = $11
     RETURNING *
`;

const section = (sectionId) => fetchAll(SECTION, sectionId);
const banner_title = (sectionId) => fetchAll(BANNER_TITLE, sectionId);

const new_block = (title_uz,title_ru,title_en,content_uz,content_ru,content_en,btn_text_uz,btn_text_ru,btn_text_en,b_row_reverse,section_id) =>
  fetch(NEW_BLOCK, title_uz,title_ru,title_en,content_uz,content_ru,content_en,btn_text_uz,btn_text_ru,btn_text_en,b_row_reverse,section_id);

const remove_block = (blockId) => fetch(REMOVE_BLOCK, blockId);

const update_block = (title_uz,title_ru,title_en,content_uz,content_ru,content_en,btn_text_uz,btn_text_ru,btn_text_en,b_row_reverse, blockId) =>
  fetch(UPDATE_BLOCK, title_uz,title_ru,title_en,content_uz,content_ru,content_en,btn_text_uz,btn_text_ru,btn_text_en,b_row_reverse, blockId);

module.exports = {
  section,
  banner_title,
  new_block,
  remove_block,
  update_block,
};
