import React, { createContext, useReducer, useContext, type ReactNode } from "react";
import type { Client, Project, Payment, Message } from "../models/index";

interface AppState {
  clients: Client[];
  projects: Project[];
  payments: Payment[];
  messages: Message[];
}

type Action =
  | { type: "ADD_PAYMENT"; payload: Payment }
  | { type: "MARK_PROJECT_PAID"; payload: string }
  | { type: "ADD_MESSAGE"; payload: Message };

const initialState: AppState = {
  clients: [
    { id: "1", name: "Iana Eleana", country: "canada", email: "iana@example.com" },
    { id: "2", name: "Josiah Avi", country: "canada", email: "josiah@example.com" },
  ],
  projects: [
    {
      id: "p1",
      clientId: "1",
      title: "Website Design",
      budget: 2000,
      status: "in-progress",
      paymentStatus: "unpaid",
    },
    {
      id: "p2",
      clientId: "2",
      title: "App Development",
      budget: 5000,
      status: "completed",
      paymentStatus: "paid",
    },
  ],
  payments: [{ projectId: "p2", amount: 5000, date: "2025-10-30" }],
  messages: [],
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "ADD_PAYMENT":
      return { ...state, payments: [...state.payments, action.payload] };
    case "MARK_PROJECT_PAID":
      return {
        ...state,
        projects: state.projects.map((p) =>
          p.id === action.payload ? { ...p, paymentStatus: "paid" } : p
        ),
      };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
}

const AppContext = createContext<
  { state: AppState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppState must be used within AppProvider");
  return context;
};
