# 🎨 Event Circle Frontend

The **Event Circle Frontend** is a modern, responsive, and performance-optimized web application built with **Next.js 15+** and **Tailwind CSS**. It provides a premium experience for browsing events, managing bookings, and role-based dashboard control with real-time statistics.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **AI Interface**: Integrated Chatbot for event recommendations
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Data Fetching**: Axios with interceptors for auth management

---

## 📁 Key Features

### 1. Dashboard Stats Overview
Both User and Admin dashboards feature a **Stats Overview** grid:
- **User**: Total Bookings, Past Events, Available Events.
- **Admin**: Total Platform Events, Concluded Events, Total User Count.
- *Calculated dynamically from existing APIs.*

### 2. AI Assistant (Chatbot)
- A floating AI assistant powered by **Gemini 2.5 Flash**.
- Helps users find events, check prices, and get recommendations based on real-time database data.

### 3. "Latest Data First" UX
- Integrated with backend sorting to ensure users always see the most recent events and tickets at the top of every list.
- **Explore Events**: Categorized grid (Public, Private, Featured) limited to 6 newest entries for a clean UI.

### 4. Parallel Routes & RBAC
- Uses Next.js **Parallel Routes** (`@admin`, `@user`) for seamless role-based navigation.
- Strictly enforced server-side authentication using cookies and JWT decoding.

---

## ⚙️ Prerequisites & Setup

### 1. Environment Variables
Create a `.env` file:

```env
NEXT_PUBLIC_BACKEND_URL="http://localhost:4001"
```

### 2. Installation & Run
```bash
npm install
npm run dev
```

---

## 🚀 Key UI Components

| Component | Description |
| :--- | :--- |
| `StatsOverview.tsx` | Dynamic stats cards with Lucide icons. |
| `FeatureEvent.tsx` | Categorized event explorer (limit 6). |
| `ChatWindow.tsx` | AI Chatbot interface. |
| `UserInfoCard.tsx` | Premium profile summary. |
| `EventCard.tsx` | Event preview with hydration-safe date display. |

---

## 🚀 Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the production bundle.
- `npm run lint`: Runs ESLint for quality checks.
