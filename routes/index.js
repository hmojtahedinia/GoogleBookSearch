const router = require("express").Router();
const apiRoutes = require("./API/books.js");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;
