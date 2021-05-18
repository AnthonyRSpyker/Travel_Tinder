const router = require("express").Router();
const userRoutes = require('./user');
const persRoutes= require('./persons');

// Book routes
router.use("/user", userRoutes);
router.use("/person",persRoutes);

module.exports = router;