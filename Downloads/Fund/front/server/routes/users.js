const router = require("express").Router({ mergeParams: true });
const {getUsers,getUser}= require("../controllers/users");

// get balance
router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;

