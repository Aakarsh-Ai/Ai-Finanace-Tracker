const Expense = require("../models/Expense");

// Add expense
exports.addExpense = async (req, res) => {
  try {
    const { amount, category, type, note } = req.body;

    const expense = new Expense({
      amount,
      category,
      type,
      note
    });

    await expense.save();
    res.status(201).json(expense);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Delete expense
exports.deleteExpense = async (req, res) => {
  try {

    const expense = await Expense.findByIdAndDelete(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.json({ message: "Transaction deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    await Expense.findByIdAndDelete(id);

    res.status(200).json({ message: "Expense deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};