# Personal Finance Snapshot 📈

A clean, modern personal finance tracker built with **Next.js**, **TypeScript**, and **Material UI**. This application allows users to manage their monthly budgets, track transactions, and visualize their spending habits through interactive data snapshots.

## 🚀 The Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/) - Chosen for its robust project structure and optimized performance.
- **UI Library**: [Material UI (MUI)](https://mui.com/) - Used to build a responsive, accessible, and professional-grade interface.
- **State Management & Persistence**: Custom React Hooks with **LocalStorage API** to ensure data persists across browser sessions without a backend.
- **Visualization**: [Recharts](https://recharts.org/) - Selected for its declarative nature and smooth animations.
- **Date Handling**: [Day.js](https://day.js.org/) - A lightweight alternative to Moment.js for parsing and formatting transaction dates.

---

## ⚙️ Features

- ✅ **Budget Tracking**: Set monthly limits per category and track progress in real-time.
- ✅ **Transaction Management**: Add income or expenses with automatic date handling and category tagging.
- ✅ **Persistence**: All data is automatically saved to `localStorage`.
- ✅ **Responsive Visualization**: Interactive spending breakdown that adapts to any screen size.

---

## ✨ Design Choices & "Small Delights"

Instead of a generic spreadsheet-style app, I focused on a **"Data-In, Value-Out"** user flow:

1.  **The Donut Snapshot**: I implemented a Donut Chart instead of a Pie Chart to place the **Total Spent** figure in the center, allowing users to see their bottom line at a glance.
2.  **Budget Color States**: Budgets aren't just bars; they are reactive. They transition from **Green** to **Orange (80%)** to **Red (Over Budget)** to provide immediate visual feedback.
3.  **Adaptive UI (Mobile-First)**: 
    *   **Desktop**: Uses a clean 12-column grid layout.
    *   **Mobile**: Transactions and Budgets stack vertically, and the "Add" button transforms into a **Floating Action Button (FAB)** for better thumb-reach.
4.  **Empty States**: To improve UX for new users, the app features custom empty states (icons) that guide the user to add their first transaction.

---

## 🏃‍♂️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/lawrenceime/Finance-Tracker.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

---

## 🛠 Project Architecture

The project follows a **Modular Feature-Based Architecture**:

- `/src/features`: Contains domain-specific logic (Budgets, Transactions, Dashboard).
- `/src/hooks`: Contains `useFinance.ts`, the centralized "brain" of the app handling logic and persistence.
- `/src/theme`: Houses the custom MUI theme configuration.
- `/src/types`: Centralized TypeScript interfaces for type safety.
- `/src/utils`: Reusable helper functions (currency formatting, category icons).

---

## 🔮 Future Enhancements
- **Search & Filtering**: Filter transactions by date range or category.
- **CSV Export**: Enable users to download their data for external use.
- **Multi-Month History**: Track spending trends over a longer period.