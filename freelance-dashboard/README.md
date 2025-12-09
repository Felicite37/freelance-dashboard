#  Freelance Dashboard

A modern, responsive dashboard application for freelancers to manage clients, projects, payments, and communications all in one place.

##  Features

- **Client Management** - Track all your clients with their contact information and location
- **Project Tracking** - Monitor project status (pending, in-progress, completed) and budgets
- **Payment Management** - Keep track of paid and unpaid projects with payment history
- **Client Messaging** - Communicate with clients directly through the dashboard
- **Dashboard Statistics** - Get quick insights into your freelance business at a glance
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

##  Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe code for better development experience
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Context API** - State management with React Context and useReducer
- **Axios** - HTTP client for API requests

##  Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

##  Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd freelance-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
freelance-dashboard/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ClientCard.tsx
│   │   ├── ClientMessages.tsx
│   │   ├── DashboardStats.tsx
│   │   └── ProjectList.tsx
│   ├── context/          # React Context for state management
│   │   └── AppContext.tsx
│   ├── models/           # TypeScript interfaces and utility functions
│   │   └── index.ts
│   ├── pages/            # Page components
│   │   └── FreelanceDashboard.tsx
│   ├── utils/            # Helper functions
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── package.json          # Project dependencies
```

## 🎯 Core Functionality

### State Management
The app uses React Context API with useReducer for centralized state management:
- Add payments
- Mark projects as paid
- Add client messages

### Data Models
- **Client**: id, name, country, email
- **Project**: id, clientId, title, budget, status, paymentStatus
- **Payment**: projectId, amount, date
- **Message**: id, clientId, text, date

### Utility Functions
- Count projects by payment status
- Find clients by ID
- Record new payments
- Filter projects by status or payment
- Search functionality for clients and projects

## 🎨 Customization

The project uses Tailwind CSS for styling. You can customize the design by:
1. Modifying `tailwind.config.js` for theme customization
2. Editing component styles in individual `.tsx` files
3. Updating global styles in `index.css`

## 🚧 Future Enhancements

- [ ] Add authentication and user accounts
- [ ] Integrate with payment gateways
- [ ] Export reports to PDF
- [ ] Calendar view for project deadlines
- [ ] Invoice generation
- [ ] Time tracking functionality
- [ ] Dark mode support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

Your Name - [Your Email]

---

Built with ❤️ for freelancers by freelancers
