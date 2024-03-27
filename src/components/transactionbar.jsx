import React from "react";
import { mockTransactions } from "./mockData";

const TransactionBar = () => {
  return (
    <div>
      <h2>Recent Transactions</h2>
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        {mockTransactions.map((transaction) => (
          <div key={transaction.txId}>
            <p>{`Transaction ID: ${transaction.txId}`}</p>
            <p>{`User: ${transaction.user}`}</p>
            <p>{`Date: ${transaction.date}`}</p>
            <p>{`Cost: $${transaction.cost}`}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionBar;