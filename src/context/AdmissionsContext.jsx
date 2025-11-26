import React, { createContext, useContext, useState } from "react";

const AdmissionsContext = createContext();

export function AdmissionsProvider({ children }) {
  // Sample initial data
  const [students, setStudents] = useState([
    {
      id: "s1",
      name: "Alex Smith",
      age: "3y 11m",
      programs: ["Toddlers"],
      paperworkDate: "2021-04-04",
      desiredStart: "2021-06-01",
      status: "Waitlist",
      room: "Preschool",
    },
    {
      id: "s2",
      name: "Emma Johnson",
      age: "4y 6m",
      programs: ["Preschool"],
      paperworkDate: "2025-10-22",
      desiredStart: "2026-02-01",
      status: "Applied",
      room: "Preschool",
    },
    // ...
  ]);

  const [packets, setPackets] = useState([
    {
      id: "p1",
      name: "Registration for Infant rooms 2025 - 2026",
      students: 0,
      due: "2025-10-03",
      fee: 15,
      status: "Active",
    },
    // ...
  ]);

  const [programs, setPrograms] = useState([
    { id: "prog1", name: "Toddlers" },
    { id: "prog2", name: "Preschool" },
    { id: "prog3", name: "Kindergarten" },
  ]);

  const [waitlists, setWaitlists] = useState([
    {
      id: "w1",
      studentId: "s1",
      room: "Preschool",
      position: 1,
      paperworkDate: "2025-10-20",
      desiredStart: "2026-01-05",
      sibling: "Mia Smith",
    },
    {
      id: "w2",
      studentId: "s2",
      room: "Preschool",
      position: 2,
      paperworkDate: "2025-10-22",
      desiredStart: "2026-02-01",
      sibling: "No",
    },
  ]);

  // --- Methods to update / add data ---

  function addStudent(student) {
    setStudents((prev) => [...prev, { id: `s${prev.length + 1}`, ...student }]);
  }

  function updateStudent(id, updates) {
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, ...updates } : s)));
  }

  function addPacket(packet) {
    setPackets((prev) => [...prev, { id: `p${prev.length + 1}`, ...packet }]);
  }

  function updatePacket(id, updates) {
    setPackets((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  }

  function enrollFromWaitlist(waitlistId) {
    const waitlistEntry = waitlists.find((w) => w.id === waitlistId);
    if (!waitlistEntry) return;

    // Move student from waitlist to "Applied" or "Enrolled"
    updateStudent(waitlistEntry.studentId, { status: "Enrolled" });
    // Remove from waitlist
    setWaitlists((prev) => prev.filter((w) => w.id !== waitlistId));
  }

  function deleteWaitlist(waitlistId) {
    setWaitlists((prev) => prev.filter((w) => w.id !== waitlistId));
  }

  return (
    <AdmissionsContext.Provider
      value={{
        students,
        packets,
        programs,
        waitlists,
        addStudent,
        updateStudent,
        addPacket,
        updatePacket,
        enrollFromWaitlist,
        deleteWaitlist,
      }}
    >
      {children}
    </AdmissionsContext.Provider>
  );
}

export function useAdmissions() {
  return useContext(AdmissionsContext);
}
