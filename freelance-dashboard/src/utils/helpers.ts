import type { Client, Project, Payment } from "../models/index";

export const countPaidUnpaid = (projects: Project[]) => {
  return projects.reduce(
    (acc, p) => {
      p.paymentStatus === "paid" ? acc.paid++ : acc.unpaid++;
      return acc;
    },
    { paid: 0, unpaid: 0 }
  );
};

export const findClientById = (clients: Client[], id: string) =>
  clients.find((c) => c.id === id);

export function recordPayment(
  projects: Project[],
  payment: Payment
) {
  const project = projects.find((p) => p.id === payment.projectId);
  if (!project) return { success: false, message: "Project not found" };
  return { success: true };
}
