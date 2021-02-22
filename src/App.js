import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseForm from "./ExpenseForm";

function App() {
  const [isActiveTab, setIsActiveTab] = useState(true);

  let homeTab = "nav-link";
  let incomeTab = "nav-link";
  let homePane = "tab-pane fade";
  let incomePane = "tab-pane fade";
  if (isActiveTab) {
    homeTab += " active";
    homePane += " show active";
  } else {
    incomeTab += " active";
    incomePane += " show active";
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <h2>Balance:</h2>
      <div class="card text-center">
        <div class="card-header">
          <ul
            class="nav nav-pills mb-3 card-header-pills"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class={homeTab}
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                onClick={(e) => setIsActiveTab(!isActiveTab)}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class={incomeTab}
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="true"
                onClick={(e) => setIsActiveTab(!isActiveTab)}
              >
                Profile
              </a>
            </li>
          </ul>
          <div class="tab-content card-body" id="pills-tabContent">
            <div
              class={homePane}
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <ExpenseForm />
            </div>
            <div
              class={incomePane}
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              Profile
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
