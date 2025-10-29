import React, { useState } from "react";

const initialSubsidies = [
  { id: 1, studentName: "Adam Smith", type: "Government", amount: 200, status: "Active" },
  { id: 2, studentName: "Mia Rodriguez", type: "Private", amount: 150, status: "Pending" },
  { id: 3, studentName: "Josh Finkle", type: "Government", amount: 100, status: "Expired" },
];

const BillingSubsidies = () => {
  const [subsidies, setSubsidies] = useState(initialSubsidies);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Subsidies</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Subsidy Type</th>
            <th>Amount ($)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {subsidies.map((subsidy) => (
            <tr key={subsidy.id}>
              <td>{subsidy.studentName}</td>
              <td>{subsidy.type}</td>
              <td>{subsidy.amount}</td>
              <td>{subsidy.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingSubsidies;
