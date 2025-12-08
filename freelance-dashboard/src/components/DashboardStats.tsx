import React from "react";
import { useAppState } from "../context/AppContext";
import { countProjectsByPayment } from "../models/index";

export const DashboardStats = () => {
  const { state } = useAppState();
  
  // Calculate total earnings
  const totalEarnings = state.projects.reduce(
    (sum, project) => sum + (project.rate || 0), 
    0
  );
  
  // Count projects by status
  const pendingProjects = state.projects.filter(
    project => project.status === "pending"
  ).length;
  
  const inProgressProjects = state.projects.filter(
    project => project.status === "in-progress"
  ).length;
  
  const completedProjects = state.projects.filter(
    project => project.status === "completed"
  ).length;
  
  // Count paid vs unpaid projects
  const { paid, unpaid } = countProjectsByPayment(state.projects);
  
  // Count total clients
  const totalClients = state.clients.length;

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Total Clients</h3>
        <p className="text-2xl font-bold">{totalClients}</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Total Earnings</h3>
        <p className="text-2xl font-bold">${totalEarnings.toLocaleString()}</p>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Paid Projects</h3>
        <p className="text-2xl font-bold text-green-600">{paid}</p>
      </div>
      
      <div className="bg-red-50 p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Unpaid Projects</h3>
        <p className="text-2xl font-bold text-red-600">{unpaid}</p>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Pending Projects</h3>
        <p className="text-2xl font-bold text-yellow-600">{pendingProjects}</p>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">In Progress</h3>
        <p className="text-2xl font-bold text-blue-600">{inProgressProjects}</p>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm">Completed</h3>
        <p className="text-2xl font-bold text-green-600">{completedProjects}</p>
      </div>
    </div>
  );
};