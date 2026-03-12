const express = require("express");
const router = express.Router();

const { addExpense, deleteExpense } = require("../controllers/expenseController");

router.post("/expense", addExpense);

router.delete("/expense/:id", deleteExpense);

module.exports = router;