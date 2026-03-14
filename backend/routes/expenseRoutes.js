const express = require("express");
const router = express.Router();

const {
  addExpense,
  deleteExpense,
  getExpenses
} = require("../controllers/expenseController");

router.post("/expense", addExpense);
router.delete("/expense/:id", deleteExpense);
router.get("/expenses", getExpenses);   // THIS IS IMPORTANT

module.exports = router;
/*const express = require("express");
const router = express.Router();

const { addExpense, deleteExpense } = require("../controllers/expenseController");

router.post("/expense", addExpense);

router.delete("/expense/:id", deleteExpense);

module.exports = router;
*/