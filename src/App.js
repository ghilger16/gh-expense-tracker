import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseForm from "./ExpenseForm";
import TabNav from "./TabNav";
import Tab from "./Tab";
import IncomeForm from "./IncomeForm";
import TransactionsTable from "./TransactionsTable";

function App() {
  const [selected, setSelected] = useState("Expense");

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Balance:</h2>

      <TabNav
        tabs={["Expense", "Income", "Transactions"]}
        selected={selected}
        setSelected={setSelected}
      >
        <Tab isSelected={selected === "Expense"}>
          <ExpenseForm />
        </Tab>
        <Tab isSelected={selected === "Income"}>
          <IncomeForm />
        </Tab>
        <Tab isSelected={selected === "Transactions"}>
          <TransactionsTable />
        </Tab>
      </TabNav>
    </div>
  );
}

export default App;
