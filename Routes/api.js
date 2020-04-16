const express = require("express");
const router = express.Router();
const FlashcardModel = require("../Models/models");

//  Routes
router.get("/", (req, res) => {
  FlashcardModel.find({})
    .then((data) => {
      res.json(data);
      //console.log("data : ", data);
    })
    .catch((error) => {
      console.log("Error : ", error);
    });
});

router.post("/save", (req, res) => {
  console.log("Body : ", req.body);
  const data = req.body;

  const newFlashcardModel = new FlashcardModel(data);
  newFlashcardModel.save((error) => {
    if (error) {
      console.log(error);
    } else {
      res.json({
        msg: "Your data has been saved",
      });
    }
  });
});

module.exports = router;
