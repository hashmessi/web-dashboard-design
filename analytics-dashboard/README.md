# Analytics Dashboard

A modern, responsive analytics dashboard built with React and JavaScript, featuring real-time data visualization, dark mode support, and a clean, professional UI.

## 🚀 Features

- **📊 Interactive Charts**: Platform distribution (donut chart), revenue trends (bar charts), sales dynamics (line charts)
- **📈 Real-time Metrics**: Revenue tracking, user performance, KPI monitoring, win/loss ratios
- **🎨 Modern UI/UX**: Clean design with smooth animations, hover effects, and micro-interactions
- **🌓 Dark Mode**: Seamless theme switching with persistent preferences
- **📱 Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile
- **⚡ Performance**: Optimized with React best practices and efficient rendering
- **🎯 Type Safety**: Comprehensive JSDoc documentation for better code intelligence

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Lucide React 0.562.0
- **Language**: JavaScript (ES2020+)
- **State Management**: React Context API
- **Code Quality**: ESLint with React best practices

## 📦 Project Structure

```
analytics-dashboard/
├── src/
│   ├── components/
│   │   ├── charts/          # Chart components (Platform, Revenue, Sales)
│   │   ├── data/            # Data table components
│   │   ├── layout/          # Layout components (Header, Sidebar)
│   │   ├── metrics/         # Metric cards and stats
│   │   └── ui/              # Reusable UI components (Toast)
│   ├── context/             # React Context for state management
│   ├── hooks/               # Custom React hooks
│   ├── services/            # API services and data fetching
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and Tailwind config
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── eslint.config.js         # ESLint configuration

```

## 🚦 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hashmessi/web-dashboard-design.git
cd analytics-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Key Components

### Dashboard Layout
- **Sidebar**: Collapsible navigation with folders and reports
- **Header**: Search bar, theme toggle, and user profile
- **Main Content**: Organized grid layout with metrics and charts

### Metrics & Analytics
- **Revenue Hero**: Large revenue display with trend indicators
- **Metric Cards**: Top sales, best deal, deals count, value, win rate
- **User Stats**: Top performers with revenue breakdown
- **Platform Analytics**: Multi-platform revenue distribution

### Charts & Visualizations
- **Platform Chart**: Donut chart showing platform distribution
- **Revenue Bar Chart**: Platform-wise revenue comparison
- **Sales Dynamic Chart**: Line chart with trend analysis
- **Platform Value Chart**: Monthly revenue breakdown

### Data Management
- **Data Table**: Sortable user performance table
- **Context API**: Centralized state management
- **Mock Data Service**: Simulated API with realistic data

## 🎯 Code Quality Features

- **JSDoc Documentation**: Comprehensive inline documentation
- **Component Comments**: Clear explanations of component purpose
- **Organized Imports**: Grouped by category (React, components, icons, context)
- **Consistent Naming**: Clear, descriptive variable and function names
- **Error Handling**: Proper loading states and error boundaries
- **Accessibility**: ARIA labels and semantic HTML

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Jaikishan**
- GitHub: [@hashmessi](https://github.com/hashmessi)

## 🙏 Acknowledgments

- Design inspiration from modern analytics platforms
- Icons by [Lucide](https://lucide.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: This dashboard uses mock data for demonstration purposes. In a production environment, connect to your actual API endpoints by modifying the `src/services/api.js` file.
