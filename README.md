## 🚀 Local Development Setup Guide

This project is built using **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **TanStack Query v5**. **Zustand** is used for global state management.

### Prerequisites

Make sure you have **Node.js** installed (v18.x or higher is recommended) along with **npm** (or _yarn_ / _pnpm_).

### 🛠 Getting Started

**1. Clone the repository:**

```bash
git clone <YOUR_REPOSITORY_URL>
cd ftp-games
```

**2. Install the project dependencies:**

```bash
npm install
```

_(This will install all necessary packages, including Ant Design and TanStack Query)._

**3. Start the Vite development server:**

```bash
npm run dev
```

**4. Open the application:**
Once the server starts, click the local link generated in your terminal (usually `http://localhost:5173`):
👉 [http://localhost:5173](http://localhost:5173)

---

### 📦 Available Scripts

- `npm run dev` — Starts the Vite development server with hot-module replacement (HMR).
- `npm run build` — Compiles TypeScript and builds the production-ready application inside the `/dist` directory.
- `npm run lint` — Runs ESLint to check the codebase for syntax and code style issues.
- `npm run preview` — Locally previews the production build before deployment.

### 🔌 API Proxy Note

All API requests starting with `/api` are automatically proxied via the Vite development server to the backend target specified in `vite.config.ts`. No manual CORS configuration is required for local development.
