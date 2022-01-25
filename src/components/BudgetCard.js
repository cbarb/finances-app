import React from "react";
import { Card, ProgressBar, Button } from "react-bootstrap";
import { CurrencyFormatter } from "../utils";

export default function BudgetCard({ name, amount, max, gray }) {
  const classNames = [];
  if (amount > max) {
    classNames.push("bg-danger bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }

  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-3">{name}</div>
          <div className="d-flex align-items-baseline">
            {CurrencyFormatter.format(amount)}
            <span className="text-muted fs-6 ms-1">
              /{CurrencyFormatter.format(max)}
            </span>
          </div>
        </Card.Title>
        <ProgressBar
          className="rounded-pill"
          variant={getProgressBarVariant(amount, max)}
          min={0}
          max={max}
          now={amount}
        ></ProgressBar>
        <div className="d-flex  mt-4">
          <Button variant="outline-primary" className="me-3 ms-auto">
            Add Expense
          </Button>
          <Button variant="outline-secondary">View Expenses</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function getProgressBarVariant(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) {
    return "primary";
  } else if (ratio < 0.75) {
    return "warning";
  } else {
    return "danger";
  }
}
