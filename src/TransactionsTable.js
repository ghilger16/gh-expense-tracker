import React, { useState } from "react";

const TransactionsTable = ({ expense, setExpense, balance, setBalance }) => {
  const [show, setShow] = useState(null);

  const deleteRow = (id, amount) => {
    const newList = expense.filter((expense) => expense.id !== id);
    setExpense(newList);

    setBalance(balance - amount);
  };

  const renderTableData = () => {
    return expense.map((expense) => {
      const { id, date, amount, description, purchasedFrom } = expense;
      return (
        <tr onMouseOver={(e) => setShow(expense.id)} key={id}>
          <td onClick={() => deleteRow(expense.id, expense.amount)}>
            {show === expense.id && <h5>❌</h5>}
          </td>
          <td>{date}</td>
          <td>{description}</td>
          <td>{purchasedFrom}</td>
          <td>{`$${amount}`}</td>
        </tr>
      );
    });
  };

  return (
    <table class="table table-hover table-lg">
      <thead class="thead-light">
        <tr>
          <th></th>
          <th>Date</th>
          <th>Description</th>
          <th>Purchased From</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default TransactionsTable;
