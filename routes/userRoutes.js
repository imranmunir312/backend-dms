const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.status(200).json({
      status: "success",
      message: "Users of the system",
    });
  })
  .post((req, res) => {
    res.status(201).json({
      status: "success",
      message: "New user created",
    });
  });

module.exports = router;
