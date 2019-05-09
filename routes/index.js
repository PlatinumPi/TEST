const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

if (apiRoutes) {

  // Api Routes
  router.use("/api", apiRoutes);

  // If no API Routes are hit, send the React App
} else {
  router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

module.exports = router;