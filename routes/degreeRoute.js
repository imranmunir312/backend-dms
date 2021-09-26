const express = require("express");
const factoryController = require("../controller/factoryController");
const Degree = require("../models/degree");
const { protect, restrictTo } = require("../middleware/protect");

const router = express.Router();

router.route("/").get(factoryController.getAll(Degree));

router.route("/:id").get(factoryController.getOne(Degree));

router.use(protect, restrictTo("admin"));

router.route("/").post(factoryController.create(Degree));

router
  .route("/:id")
  .patch(factoryController.updateOneById(Degree))
  .delete(factoryController.deleteOne(Degree));

module.exports = router;
