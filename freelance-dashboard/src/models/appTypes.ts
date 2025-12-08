// Define the Client interface
export interface Client {
  id: string;
  name: string;
  country: string;
  email?: string;
}

// Define the Project interface
export interface Project {
  id: string;
  title: string;
  clientId: string;
  status: string;
  paymentStatus: "paid" | "unpaid";
  rate?: number;
}

// Define the Payment interface
export interface Payment {
  projectId: string;
  amount: number;
  date: string;
}

/** Count paid vs unpaid projects */
export function countProjectsByPayment(projects: Project[]) {
  const paid = projects.filter((p) => p.paymentStatus === "paid").length;
  const unpaid = projects.filter((p) => p.paymentStatus === "unpaid").length;
  return { paid, unpaid };
}

/** Find client by ID safely (type narrowing for undefined) */
export function findClientById(clients: Client[], id: string): Client | null {
  const found = clients.find((c) => c.id === id);
  return found ?? null;
}

/** Record a new payment with validation */
export function recordNewPayment(
  project: Project,
  amount: number
): Payment | null {
  if (!project || amount <= 0) return null;
  return { projectId: project.id, amount, date: new Date().toISOString() };
}

/** Filter projects by status */
export function filterProjectsByStatus(
  projects: Project[],
  status: "pending" | "in-progress" | "completed"
): Project[] {
  return projects.filter((p) => p.status === status);
}