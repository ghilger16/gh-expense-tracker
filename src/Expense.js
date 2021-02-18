import React, { useState } from "react";

const Expense = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  console.log(date);
  console.log(amount);

  return (
    <div>
      <form className="date">
        <input
          type="text"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
      </form>
      <form className="amount">
        <input
          type="text"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.vale)}
          placeholder="Amount"
        />
      </form>
    </div>
  );
};
export default Expense;
