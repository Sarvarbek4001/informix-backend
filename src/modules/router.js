const { Router } = require("express");
const router = new Router();
const multer = require("multer");
const Users = require("./users/user");
const OneUser = require("./user/user");
const Admin = require("./admin/admin");
const Superadmin = require("./createAdmin/createAdmin");
const Brand = require("../modules/brand/brand");
const BlockImage = require("../modules/block/blockImage/blockImage");
const Block = require("../modules/block/block");
const AllBrandImageId = require("../modules/brand/brandImageId/brandImageId");
const Banner = require("../modules/banner/banner");
const OneBanner = require("../modules/banner/oneBanner/oneBanner");
const BlockSection = require("../modules/blockSection/blockSection");
const authenticateToken = require("../lib/middlware");
const adminMiddlware = require("../lib/adminMiddlware");
const SingleBlock = require("../modules/singleBlockSection/singleBlockSection");
const Prices = require("../modules/prices/prices");
const Chances = require("../modules/chances/chance");
const AllPrices = require("../modules/allPrices/allPrices")

const imageUpload = multer({
  dest: "images",
});

router
  .get("/users", authenticateToken, Users.GET)
  .get("/users/:id", authenticateToken, OneUser.GET)
  .put("/users", authenticateToken, Users.PUT)
  .delete("/users", authenticateToken, Users.DELETE)
  .post("/users", Users.POST)
  .post("/admin", Admin.POST)
  .post("/new_admin", adminMiddlware, Superadmin.POST)
  .get("/section/:sectionId", Block.GET)
  .get("/brand/:id", Brand.GET)
  .delete("/brand/:id", authenticateToken, Brand.DELETE)
  .get("/brandImageId", AllBrandImageId.GET)
  .post("/brand", authenticateToken, imageUpload.single("image"), Brand.POST)
  .get("/banner/:sectionId", Banner.GET)
  .get("/banner/one/:bannerId", OneBanner.GET)
  .post("/banner", authenticateToken, Banner.POST)
  .put("/banner", authenticateToken, Banner.PUT)
  .post("/block", authenticateToken, Block.POST)
  .put("/block", authenticateToken, Block.PUT)
  .get("/block/:sectionId", authenticateToken, BlockSection.GET)
  .get("/block/single/:blockId", authenticateToken, SingleBlock.GET)
  .delete("/block", authenticateToken, Block.DELETE)
  .delete("/banner/:id", authenticateToken, Banner.DELETE)
  .get("/blockImage/:id", imageUpload.single("image"), BlockImage.GET)
  .post(
    "/blockImage/:blockId",
    authenticateToken,
    imageUpload.single("image"),
    BlockImage.POST
  )
  .delete("/blockImage/:blockId", authenticateToken, BlockImage.DELETE)
  .get("/price", Prices.GET)
  .post("/price", authenticateToken, Prices.POST)
  .put("/price", authenticateToken, Prices.PUT)
  .delete("/price/:priceId", authenticateToken, Prices.DELETE)
  .get("/chance/:priceId", Chances.GET)
  .post("/chance", authenticateToken, Chances.POST)
  .put("/chance", authenticateToken, Chances.PUT)
  .delete("/chance/:chanceId", authenticateToken, Chances.DELETE)
  .get("/allPrices",AllPrices.GET);

module.exports = router;
