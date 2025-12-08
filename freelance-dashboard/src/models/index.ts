// Direct exports to avoid import issues
export interface Client {
  id: string;
  name: string;
  country: string;
  email?: string;
}

export interface Project {
  id: string;
  clientId: string;
  title: string;
  budget?: number;
  status: string;
  paymentStatus: "paid" | "unpaid";
  rate?: number;
}

export interface Payment {
  projectId: string;
  amount: number;
  date: string;
}

export interface Message {
  id: string;
  clientId: string;
  text: string;
  date: string;
}

export function countProjectsByPayment(projects: Project[]) {
  const paid = projects.filter(p => p.paymentStatus === "paid").length;
  const unpaid = projects.filter(p => p.paymentStatus === "unpaid").length;
  return { paid, unpaid };
}

export function findClientById(clients: Client[], id: string): Client | null {
  const found = clients.find(c => c.id === id);
  return found ?? null;
}

export function recordNewPayment(project: Project, amount: number): Payment | null {
  if (!project || amount <= 0) return null;
  return { projectId: project.id, amount, date: new Date().toISOString() };
}

export function filterProjectsByStatus(
  projects: Project[],
  status: "pending" | "in-progress" | "completed"
): Project[] {
  return projects.filter(p => p.status === status);
}

export function filterProjectsByPayment(
  projects: Project[],
  paymentStatus: "paid" | "unpaid"
): Project[] {
  return projects.filter(p => p.paymentStatus === paymentStatus);
}

export function searchByName<T extends { name?: string; title?: string }>(
  items: T[],
  query: string
): T[] {
  const lower = query.toLowerCase();
  return items.filter(
    i => 
      (i.name && i.name.toLowerCase().includes(lower)) ||
      (i.title && i.title.toLowerCase().includes(lower))
  );
}