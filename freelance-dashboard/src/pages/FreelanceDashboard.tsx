import React from "react";
import { AppProvider, useAppState } from "../context/AppContext";
import { ClientCard } from "../components/ClientCard";
import { ProjectList } from "../components/ProjectList";
import { DashboardStats } from "../components/DashboardStats";

const DashboardContent = () => {
  const { state } = useAppState();
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Freelance Dashboard</h1>
      <DashboardStats />
      <h2 className="text-xl mt-4 font-semibold">Clients</h2>
      <div className="grid grid-cols-2 gap-4">
        {state.clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
      <ProjectList />
    </div>
  );
};

export const FreelanceDashboard = () => (
  <AppProvider>
    <DashboardContent />
  </AppProvider>
);
