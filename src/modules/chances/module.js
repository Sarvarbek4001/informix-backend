const { fetch, fetchAll } = require("../../lib/posgres");

const PRICE_CHANCE = `
  SELECT
   *
  FROM
   chance
    WHERE 
     price_id = $1
      ORDER BY chance_id
`;

const NEW_CHANCE = `
 INSERT INTO chance(chance_title_uz,chance_title_ru,chance_title_en,price_id) VALUES($1,$2,$3,$4) RETURNING *`;

const UPDATE_CHANCE = `
  UPDATE chance
   SET chance_title_uz = $1,
       chance_title_ru = $2,
       chance_title_en = $3
       WHERE chance_id = $4
    RETURNING *
`;

const DELETE_CHANCE = `
  DELETE
   FROM
    chance
     WHERE 
      chance_id = $1
       RETURNING *
`;

const get_price_chances = (priceId) => fetchAll(PRICE_CHANCE, priceId);

const new_chance = (chanceTitleUz,chanceTitleRu,chanceTitleEn, priceId) =>
  fetch(NEW_CHANCE, chanceTitleUz,chanceTitleRu,chanceTitleEn, priceId);

const update_chance = (chanceTitleUz,chanceTitleRu,chanceTitleEn, chanceId) =>
  fetch(UPDATE_CHANCE, chanceTitleUz,chanceTitleRu,chanceTitleEn, chanceId);

const remove_chance = (chanceId) => fetch(DELETE_CHANCE, chanceId);

module.exports = {
  new_chance,
  update_chance,
  remove_chance,
  get_price_chances,
};
