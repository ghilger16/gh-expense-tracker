import React, { useState } from "react";

const ExpenseForm = ({ expense, setExpense }) => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [purchasedFrom, setPurchasedFrom] = useState("");

  console.log(expense);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newExpense = {
      id: expense.length,
      date,
      amount,
      description,
      purchasedFrom,
    };
    let arr = expense.concat(newExpense);
    setExpense(arr);
  };

  return (
    <div class="card-body w-50 mx-auto">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Date</label>
            <input
              type="text"
              class="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label>Amount</label>
            <input
              type="number"
              class="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Purchased From</label>
          <input
            type="text"
            class="form-control"
            value={purchasedFrom}
            onChange={(e) => setPurchasedFrom(e.target.value)}
          />
        </div>

        <button class="btn btn-primary" onClick={handleSubmit}>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
