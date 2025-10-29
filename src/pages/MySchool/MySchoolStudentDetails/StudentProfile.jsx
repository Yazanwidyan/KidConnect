import React from "react";

const student = {
  name: "Adam Smith",
  age: 5,
  room: "Preschool",
  parent: "John Smith",
  contact: "555-1234",
  enrollmentDate: "2025-09-01",
  photo: "", // optional photo URL
};

const StudentProfile = () => {
  if (!student) {
    return <div>No student selected</div>;
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>{student.name}</h2>
      <img
        src={student.photo || "https://via.placeholder.com/150"}
        alt={student.name}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />
      <div style={{ marginBottom: "10px" }}>
        <strong>Age:</strong> {student.age}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Class/Room:</strong> {student.room}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Parent/Guardian:</strong> {student.parent}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Contact:</strong> {student.contact}
      </div>
      <div style={{ marginBottom: "10px" }}>
        <strong>Enrollment Date:</strong> {student.enrollmentDate}
      </div>
    </div>
  );
};

export default StudentProfile;
