import React from "react";
import Heading from "../components/Headings";
import Sidebar from "../components/Sidebar";
import Charts from "../components/Charts";
import TransactionBar from "../components/Transactionbar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Heading />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          <Charts />
          <TransactionBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;