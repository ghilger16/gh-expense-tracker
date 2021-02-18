import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Expense from "./Expense";

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <h2>Balance:</h2>
      <div className="expense-submit"></div>
      <Expense />
      <div className="transaction-table"></div>
    </div>
  );
}

export default App;
