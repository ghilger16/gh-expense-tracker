import React, { useState } from "react";

const IncomeForm = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [source, setSource] = useState("");

  return (
    <div class="card-body w-50 mx-auto">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Date</label>
            <input
              type="text"
              class="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div class="form-group col-md-6">
            <label>Amount</label>
            <input
              type="number"
              class="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div class="form-group">
          <label>Source</label>
          <input
            type="text"
            class="form-control"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <button class="btn btn-primary">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeForm;
