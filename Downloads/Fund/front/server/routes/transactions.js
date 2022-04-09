const router = require("express").Router({ mergeParams: true });
const {addDonation,addDeposit} = require("../controllers/transactions");
const checkFunds = require("../middlewares/checkFunds");


// deposit
router.post("/donate", checkFunds, addDonation);
router.post("/deposit", addDeposit);

module.exports = router;
