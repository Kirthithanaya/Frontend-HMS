import React from "react";
import OverviewReport from "../components/financial/OverviewReport";
import MonthlyTrends from "../components/financial/MonthlyTrends";
import CreatePayment from "../components/financial/CreatePayment";
import CreateExpense from "../components/financial/CreateExpense";
import ExpenseList from "../components/financial/ExpenseList";
import AddRoomRevenue from "../components/financial/AddRoomRevenue";
import RevenueChart from "../components/financial/RevenueChart";
import ExpenseChart from "../components/financial/ExpenseChart";
import OccupancyRateChart from "../components/financial/OccupancyRateChart";

const FinancialReporting = () => {
  return (
    <div className="space-y-6 p-6">
     
      <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-center">Financial Reporting Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <RevenueChart />
        <ExpenseChart />
      </div>

      <div className="mt-12">
        <OccupancyRateChart />
      </div>
    </div>
    <OverviewReport />
      <MonthlyTrends />
      <CreatePayment />
      <CreateExpense />
      <ExpenseList />
      {/* Add Room Revenue Section */}
      <AddRoomRevenue />
    </div>
  );
};

export default FinancialReporting;
