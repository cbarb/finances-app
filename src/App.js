import "./App.css";
import { Stack, Button, Card } from "react-bootstrap";
import React from "react";

import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";

function App() {
  return (
    <div className="App">
      <div className="container my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary">Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div
          className="w-100"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <BudgetCard name={"something"} amount={200} max={1000}></BudgetCard>
        </div>
      </div>
      <AddBudgetModal show />
    </div>
  );
}

export default App;
