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
  const [balance, setBalance] = useState(() => {
    const localData = localStorage.getItem("balance");
    return localData ? JSON.parse(localData) : 0;
  });

  useEffect(
    () => {
      localStorage.setItem("expense", JSON.stringify(expense));
      Number(localStorage.setItem("balance", JSON.stringify(balance)));
    },
    [expense],
    [balance]
  );

  return (
    <div class="d-flex align-items-center flex-column">
      <h1 class="mb-auto p-2">Expense Tracker</h1>
      <h2 class="p-2">Balance: {`$${balance}`}</h2>

      <TabNav
        tabs={["Expense", "Transactions"]}
        selected={selected}
        setSelected={setSelected}
      >
        <Tab isSelected={selected === "Expense"}>
          <ExpenseForm
            expense={expense}
            setExpense={setExpense}
            balance={balance}
            setBalance={setBalance}
          />
        </Tab>

        <Tab isSelected={selected === "Transactions"}>
          <TransactionsTable
            expense={expense}
            setExpense={setExpense}
            balance={balance}
            setBalance={setBalance}
          />
        </Tab>
      </TabNav>
    </div>
  );
}

export default App;
