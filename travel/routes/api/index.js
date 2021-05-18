const router = require("express").Router();
const personsRoutes = require("./user.js");

// Book routes
router.use("/user", personsRoutes);

module.exports = router;