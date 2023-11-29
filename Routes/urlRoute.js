const { Router } = require("express");
const { getTheUrl } = require("../Controllers/getTheUrl");
const { createUrl } = require("../Controllers/createUrl.js");
const router = Router();

//Aunque estéticamente no se vea bien, es posible encadenar las peticiones get, post, put y delete a una misma instancia de Express, o, al menos es lo que recuerdo.

router
  .get("/getThatUrlShortened", async (req, res) => {
    try {
      const theInformation = await getTheUrl();

      res.status(200).json(theInformation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })
  .post("/createOne", async (req, res) => {
    try {
      const informationUrl = req.body;
console.log(informationUrl);
      if (informationUrl?.fullUrl != null) {
        const createurl = await createUrl(informationUrl);
        res.status(201).json(createurl);
      } else {
        res.status(400).json({ message: "There was no information" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  });

module.exports = router;
