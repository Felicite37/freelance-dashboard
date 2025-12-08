import React from "react";
import type { Client } from "../models/index";
import { useAppState } from "../context/AppContext";
import { ClientMessages } from "./ClientMessages";

export const ClientCard: React.FC<{ client: Client }> = ({ client }) => {
  const { state } = useAppState();
  
  // Count projects for this client
  const clientProjects = state.projects.filter(p => p.clientId === client.id);
  const projectCount = clientProjects.length;
  
  return (
    <div className="p-4 border rounded-lg shadow bg-white hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-blue-700">{client.name}</h2>
          <p className="text-gray-600 mt-1">
            <span className="inline-flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
              </svg>
              {client.country}
            </span>
          </p>
          {client.email && (
            <p className="text-gray-600 mt-1">
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {client.email}
              </span>
            </p>
          )}
        </div>
        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
          {projectCount} {projectCount === 1 ? 'Project' : 'projects'}
        </div>
      </div>
      <ClientMessages clientId={client.id} />
    </div>
  );
};
