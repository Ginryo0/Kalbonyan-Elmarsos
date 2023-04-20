import Expenses from "./components/Expenses/Expenses";
import React from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Pc",
      amount: 994.12,
      date: new Date(2019, 7, 25),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 150,
      date: new Date(2023, 1, 12),
    },
  ];

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { expenses: expenses })
  );
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses expenses={expenses} />
  //   </div>
  // );
}

export default App;
