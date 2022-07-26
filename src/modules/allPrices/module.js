const { fetch, fetchAll } = require("../../lib/posgres");

const ALL_PRICES = `
    SELECT p.price_title_uz,
           p.price_title_ru,
           p.price_title_en,
           p.price_number,
           p.price_sub_title_uz,
           p.price_sub_title_en,
           p.price_sub_title_ru,
           json_build_object('en', ARRAY_AGG(c.chance_title_en),
                             'ru', ARRAY_AGG(c.chance_title_ru),
                             'uz', ARRAY_AGG(c.chance_title_uz)) chances
    FROM prices p
             LEFT JOIN
         chance c on p.price_id = c.price_id
    GROUP BY p.price_id
    ORDER BY p.price_id
`;
const get_all_prices = () => fetchAll(ALL_PRICES);

module.exports = { get_all_prices };
