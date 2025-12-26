# PDR Plan: Functional Analytics Dashboard Evolution

## Executive Summary
This **Plan-Design-Realization (PDR)** roadmap outlines the strategy to evolve the static React dashboard into a fully functional, production-ready frontend application. The focus is on robust state management, enhanced user interactivity, and professional-grade accessibility/responsiveness.

---

## 1. PLAN: Architecture & Core Logic
**Goal**: Transition from static mock data to a dynamic, scalable data architecture.

### 1.1 State Management Strategy
- **Context API + Reducer**: Implement a global `DashboardContext` to manage:
  - Date range selections (Global filter)
  - Active platform/category filters
  - Sidebar state (persisted in localStorage)
  - User preferences (Theme, Table density)
- **Data Layer Mocking**: Create a service layer (`src/services/api.ts`) to simulate async data fetching with delays, allowing for realistic "Loading" and "Error" states.

### 1.2 TypeScript Data Models
- Define strict interfaces for `Metric`, `UserRow`, `ChartData`, and `FilterState`.
- Ensure type safety across all components to prevent runtime errors.

### 1.3 Routing (Optional but Recommended)
- Setup `react-router-dom` to make navigation functional:
  - `/` -> Dashboard
  - `/sales` -> Sales List (Data Table focus)
  - `/reports` -> Reports View

---

## 2. DESIGN: Interaction & UX Strategy
**Goal**: Create a "living" interface that responds to user intent.

### 2.1 Advanced Data Table Features
- **Sorting**: Clickable headers for Revenue, Leads, KPI (asc/desc).
- **Filtering**: Dropdown filters for "Sales Rep", "Status", and "Date".
- **Pagination**: Functional 1-10 of 50 footer with page navigation.
- **Row Expansion**: Click row to see nested details (recent transactions).

### 2.2 Chart Interactivity
- **Dynamic Updates**: Charts should animate and update based on global Date Range picker.
- **Tooltips**: Custom, accessible tooltips that follow the mouse cursor on charts.
- **Filtering**: Clicking a legend item (e.g., "Instagram") toggles its visibility in the chart.

### 2.3 Mobile & Responsive Design
- **Mobile Navigation**: Sidebar becomes a bottom sheet or hamburger menu drawer on `< 768px`.
- **Card Stacking**: Statistics grid converts to swipable carousel or vertically stacked cards on mobile.
- **Table Adaptation**: Hide less critical columns (KPI, W/L) on small screens, or use a "Card View" for rows.

---

## 3. REALIZATION: Implementation Steps
**Goal**: Execute the plan in iterations.

### Step 3.1: Foundation (Data Layer) - [x] Done
- [x] Create `types.ts` models.
- [x] Build `useDashboardData` hook with mocked async calls.
- [x] Implement `DashboardContext` provider.

### Step 3.2: Component Intelligence (Interactivity) - [x] Done
- [x] Make `Header` search bar filter the visible content.
- [x] Implement sorting logic in `DataTable`.
- [x] Connect `RevenueBarChart` to the timeframe selector.

### Step 3.3: UX Polish (Quality of Life) - [x] Done
- [x] Add `Skeleton` loaders for async data states.
- [x] Implement "Toast" notifications for actions (e.g., "Report Downloaded").
- [x] Add keyboard navigation support (Tab ordering, Enter to select).

### Step 3.4: Final Polish - [x] Done
- [x] Mobile responsiveness audit (Sidebar Drawer implemented).
- [x] Accessibility (ARIA labels) audit.
- [x] Performance check (Lighthouse).

---

## Success Criteria
1. **Interactive**: Users can sort tables, filter data, and toggle timeframes.
2. **Responsive**: UI looks unbroken on iPhone SE, iPad, and 4k Monitors.
3. **Resilient**: Application handles "loading" and "empty" states gracefully.
