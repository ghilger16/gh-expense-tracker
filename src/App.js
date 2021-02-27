import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseForm from "./ExpenseForm";
import TabNav from "./TabNav";
import Tab from "./Tab";

import TransactionsTable from "./TransactionsTable";

function App() {
  const [selected, setSelected] = useState("Expense");
  const [expense, setExpense] = useState(() => {
    const localData = localStorage.getItem("expense");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expense));
  }, [expense]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Balance:</h2>

      <TabNav
        tabs={["Expense", "Transactions"]}
        selected={selected}
        setSelected={setSelected}
      >
        <Tab isSelected={selected === "Expense"}>
          <ExpenseForm expense={expense} setExpense={setExpense} />
        </Tab>

        <Tab isSelected={selected === "Transactions"}>
          <TransactionsTable expense={expense} setExpense={setExpense} />
        </Tab>
      </TabNav>
    </div>
  );
}

export default App;
