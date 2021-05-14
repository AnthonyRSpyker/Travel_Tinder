const router = require("express").Router();
const personsRoutes = require("./persons");

// Book routes
router.use("/persons", personsRoutes);

module.exports = router;