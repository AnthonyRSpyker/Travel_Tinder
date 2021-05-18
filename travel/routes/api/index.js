const router = require("express").Router();
const personsRoutes = require('./user');

// Book routes
router.use("/user", personsRoutes);

module.exports = router;