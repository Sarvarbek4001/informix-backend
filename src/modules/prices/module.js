const { fetch, fetchAll } = require("../../lib/posgres");

const ALL_PRICES = `
   SELECT 
     * 
      FROM 
        prices
         ORDER BY price_id
`;

const NEW_PRICE = `
 INSERT INTO prices(price_title_uz,price_title_ru,price_title_en,price_number,price_sub_title_uz,price_sub_title_ru,price_sub_title_en) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *
`;

const UPDATE_PRICE = `
   UPDATE prices
    SET price_title_uz = $1,
        price_title_ru = $2,
        price_title_en = $3,
        price_number = $4,
        price_sub_title_uz = $5,
        price_sub_title_ru = $6,
        price_sub_title_en = $7
        WHERE  price_id = $8
         RETURNING *
`;

const REMOVE_PRICE = `
  DELETE 
   FROM
    prices
     WHERE 
     price_id = $1
      RETURNING *
`;

const get_prices = () => fetchAll(ALL_PRICES);

const new_price = (priceTitleUz,priceTitleRu,priceTitleEn, priceNumber, priceSubTitleUz,priceSubTitleRu,priceSubTitleEn) =>
  fetch(NEW_PRICE, priceTitleUz,priceTitleRu,priceTitleEn,priceNumber, priceSubTitleUz,priceSubTitleRu,priceSubTitleEn);

const update_price = (priceTitleUz,priceTitleRu,priceTitleEn, priceNumber, priceSubTitleUz,priceSubTitleRu,priceSubTitleEn, priceId) =>
  fetch(UPDATE_PRICE, priceTitleUz,priceTitleRu,priceTitleEn, priceNumber, priceSubTitleUz,priceSubTitleRu,priceSubTitleEn, priceId);

const delete_price = (priceId) => fetch(REMOVE_PRICE, priceId);

module.exports = {
  get_prices,
  new_price,
  update_price,
  delete_price,
};
