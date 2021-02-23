import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseForm from "./ExpenseForm";
import TabNav from "./TabNav";
import Tab from "./Tab";

function App() {
  const [selected, setSelected] = useState("Expense");

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h2>Balance:</h2>

      <TabNav
        tabs={["Expense", "Income"]}
        selected={selected}
        setSelected={setSelected}
      >
        <Tab isSelected={selected === "Expense"}>
          <ExpenseForm />
        </Tab>
        <Tab isSelected={selected === "Income"}></Tab>
      </TabNav>
    </div>
  );
}

export default App;
