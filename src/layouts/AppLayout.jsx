import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = ({ children, userRole = "superAdmin" }) => {
  const branches = [
    { id: "b1", name: "Downtown Branch" },
    { id: "b2", name: "Uptown Branch" },
  ];
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <div className="bg-background flex min-h-screen flex-col md:flex-row">
      <Sidebar
        userRole={userRole}
        selectedBranch={selectedBranch}
        setSelectedBranch={setSelectedBranch}
        branches={branches}
      />
      <div className="flex flex-1 flex-col">
        <Header userRole={userRole} />
        <main className="flex-1 p-6">{React.cloneElement(children, { selectedBranch, userRole })}</main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
