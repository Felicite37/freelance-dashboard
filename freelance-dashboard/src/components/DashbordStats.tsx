import React, { useMemo } from "react";
import { useAppState } from "../context/AppContext";
import { countPaidUnpaid } from "../utils/helpers";

export const DashboardStats: React.FC = () => {
  const state = useAppState();

  const totals = useMemo(() => {
    const { paid, unpaid } = countPaidUnpaid(state.state.projects);
    const revenue = state.state.payments.reduce((sum, p) => sum + p.amount, 0);
    return {
      clients: state.state.clients.length,
      projects: state.state.projects.length,
      paid,
      unpaid,
      revenue,
    };
  }, [state]);

  return (
    <div className="grid grid-cols-3 gap-3 text-center">
      <div className="p-3 border rounded bg-white">
        <div className="text-sm text-gray-500">Projects</div>
        <div className="text-xl font-bold">{totals.projects}</div>
      </div>
      <div className="p-3 border rounded bg-white">
        <div className="text-sm text-gray-500">Paid / Unpaid</div>
        <div className="text-xl font-bold">
          {totals.paid} / {totals.unpaid}
        </div>
      </div>
      <div className="p-3 border rounded bg-white">
        <div className="text-sm text-gray-500">Total Revenue</div>
        <div className="text-xl font-bold">${totals.revenue}</div>
      </div>
    </div>
  );
};
