import React from "react";
import NR1InfoCard from "@/components/NR1InfoCard";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center mb-8">
        <img src="/logo.png" alt="NR-1 Digital Logo" className="h-24 mb-4" />
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-50">
          Gestão de Riscos Psicossociais (NR-1)
        </h1>
      </div>
      <NR1InfoCard />
      <MadeWithDyad />
    </div>
  );
};

export default Dashboard;