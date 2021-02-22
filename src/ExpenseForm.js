import React, { useState } from "react";

const ExpenseForm = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [purchasedFrom, setPurchasedFrom] = useState("");
  const [expense, setExpense] = useState([]);
  const [isActiveTab, setIsActiveTab] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpense([
      ...expense,
      {
        id: expense.length,
        date,
        amount,
        description,
        purchasedFrom,
      },
    ]);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </form>
      <form className="description-purchased-from">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="text"
          value={purchasedFrom}
          onChange={(e) => setPurchasedFrom(e.target.value)}
          placeholder="Purchased from"
        />
      </form>
      <button class="btn btn-primary" onClick={handleSubmit}>
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseForm;
