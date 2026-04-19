# 🎨 Event Circle Frontend

The **Event Circle Frontend** is a modern, responsive, and performance-optimized web application built with **Next.js 15+** and **Tailwind CSS v4**. It provides a seamless user experience for browsing events, managing bookings, and role-based dashboard control.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/postcss`)
- **Language**: TypeScript
- **Form Management**: React Hook Form
- **Authentication Handling**: `js-cookie` (Session storage) & `jwt-decode` (Role extraction)
- **Icons**: Lucide React & Heroicons
- **Notifications**: React Hot Toast

---

## 📁 Project Structure & Layouts

The application utilizes **Next.js Route Groups** to organize layouts without affecting the URL structure:

### 1. Common Layout `(CommonLayout)`
- **Scope**: Home, About, Contact, Login, Register, Events.
- **Components**: Global Navbar and Footer.
- **Path**: `/`, `/home`, `/login`, etc.

### 2. Dashboard Layout `(DashboardLayout)`
- **Scope**: Authenticated areas for Users and Admins.
- **Architecture**: Uses **Parallel Routes** (`@admin`, `@user`) to render different interfaces at the same URL based on the user's role.

```mermaid
graph TD
    A[Dashboard Layout] --> B{Decoded JWT Role}
    B -- ADMIN --> C[@admin slot]
    B -- USER --> D[@user slot]
    C --> E[Admin Sidebar + Dashboard Content]
    D --> F[User Sidebar + Dashboard Content]
```

---

## 🛡️ Role-Based Access Control (RBAC)

RBAC is strictly enforced across the application:
- **Middleware**: Validates the presence of session cookies.
- **Layout Logic**: The primary dashboard layout decodes the JWT and determines which parallel route slot to display.
- **Conditional Rendering**: Navigation items in the `Sidebar` are filtered based on the `user-role` cookie.

---

## ⚙️ Prerequisites & Setup

### 1. Environment Variables
Create a `.env` file in the `event-circle-frontend` root:

```env
NEXT_PUBLIC_BACKEND_URL="http://localhost:4001"
```

### 2. Installation
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

---

## 📦 Key UI Components

| Component | Description |
| :--- | :--- |
| `NavBar.tsx` | Main navigation with dynamic login/logout buttons. |
| `Sidebar.tsx` | Vertical navigation for dashboards, role-adaptive. |
| `TicketForm.tsx` | Integrated booking form with payment initialization. |
| `EventCard.tsx` | reusable component for event previews and registration. |
| `MyTicketTable.tsx`| List of user-specific bookings with payment status. |
| `TicketTable.tsx` | Admin management tool for viewing all platform tickets. |

---

## 🚀 Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the production bundle.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.
