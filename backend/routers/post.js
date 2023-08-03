const { creaatePost } = require("../controllers/post");

const router = require("express").Router();

router.post("/create", creaatePost);

module.exports = router;


