import React, { useState } from "react";

const initialParents = [
  { id: 1, name: "John Smith", child: "Adam Smith", email: "john.smith@example.com", contact: "555-1234" },
  {
    id: 2,
    name: "Mia Rodriguez",
    child: "Sophia Rodriguez",
    email: "mia.rodriguez@example.com",
    contact: "555-5678",
  },
  {
    id: 3,
    name: "David Johnson",
    child: "Lucas Johnson",
    email: "david.johnson@example.com",
    contact: "555-9876",
  },
];

const MySchoolParents = () => {
  const [parents, setParents] = useState(initialParents);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Parents List</h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Parent Name</th>
            <th>Child Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent) => (
            <tr key={parent.id}>
              <td>{parent.name}</td>
              <td>{parent.child}</td>
              <td>{parent.email}</td>
              <td>{parent.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySchoolParents;
