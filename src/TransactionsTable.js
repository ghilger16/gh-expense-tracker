import React, { useState } from "react";
import { formatDiagnostic } from "typescript";
import ExpenseForm from "./ExpenseForm";

const TransactionsTable = (props) => {
  //   const [test, setTest] = useState([
  //     {
  //       id: 1,
  //       date: "2/23/21",
  //       amount: 5,
  //       description: "food",
  //       purchasedFrom: "taco bell",
  //     },
  //     {
  //       id: 2,
  //       date: "2/23/21",
  //       amount: 5,
  //       description: "food",
  //       purchasedFrom: "taco bell",
  //     },
  //   ]);

  const renderTableData = () => {
    return props.expense?.map((expense) => {
      const { id, date, amount, description, purchasedFrom } = expense;
      return (
        <tr key={id}>
          <td>Type</td>
          <td>{date}</td>
          <td>{description}</td>
          <td>{purchasedFrom}</td>
          <td>Source</td>
          <td>{`$${amount}`}</td>
        </tr>
      );
    });
  };

  return (
    <table class="table table-hover">
      <thead class="thead-light">
        <tr>
          <th>Type</th>
          <th>Date</th>
          <th>Description</th>
          <th>Purchased From</th>
          <th>Source</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
  );
};

export default TransactionsTable;
