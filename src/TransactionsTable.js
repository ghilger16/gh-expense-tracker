import React, { useState } from "react";

const TransactionsTable = ({ expense }) => {
  const [show, setShow] = useState(false);
  const renderTableData = () => {
    return expense?.map((expense) => {
      const { id, date, amount, description, purchasedFrom } = expense;
      return (
        <tr
          onMouseOver={(e) => setShow(!show)}
          onMouseOut={(e) => setShow(!show)}
          key={id}
        >
          <td>
            {show && (
              <td>
                <button>delete</button>
              </td>
            )}
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
    <table class="table table-hover table-sm">
      <thead class="thead-light">
        <tr>
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
