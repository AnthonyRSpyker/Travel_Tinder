const router = require("express").Router();
const bookRoutes = require("./persons");

// Book routes
router.use("/persons", bookRoutes);

module.exports = router;