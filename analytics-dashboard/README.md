# 📊 Analytics Dashboard

<div align="center">

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A modern, pixel-perfect analytics dashboard built with React and Tailwind CSS. Features real-time data visualization, dark mode, and a premium enterprise SaaS design.

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 📊 **Interactive Charts** | Donut charts, bar charts, line charts with smooth animations |
| 📈 **Real-time Metrics** | Revenue tracking, KPIs, user performance analytics |
| 🌓 **Dark Mode** | Seamless theme switching with system preference detection |
| 📱 **Responsive Design** | Optimized for desktop, tablet, and mobile |
| ⚡ **Performance** | Fast load times with Vite and React 19 |
| 🎯 **Pixel-Perfect** | Matches reference design with 8px uniform spacing |

## 🛠️ Tech Stack

- **Framework**: React 19.2 with Vite 7.3
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **State**: React Context API
- **Code Quality**: ESLint

## 📦 Quick Start

```bash
# Clone the repository
git clone https://github.com/hashmessi/web-dashboard-design.git
cd analytics-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── charts/       # PlatformChart, RevenueBarChart, SalesDynamicChart
│   ├── data/         # DataTable
│   ├── layout/       # Header, Sidebar
│   └── metrics/      # MetricCard, RevenueHero, UserStatsRow
├── context/          # DashboardContext (state management)
├── hooks/            # useAnimatedNumber, useDarkMode
├── services/         # Mock API services
└── App.jsx           # Main application
```

## 🎨 Key Components

### Dashboard Sections
- **Revenue Hero** - Main revenue display with animated numbers
- **Metric Cards** - Top sales, best deal, deals, value, win rate
- **User Avatar Row** - Team member quick access
- **User Stats Row** - Top performers with achievement badges

### Charts & Visualizations
- **Platform Chart** - Donut chart with platform distribution
- **Revenue Bar Chart** - Platform-wise revenue comparison  
- **Sales Dynamic Chart** - Line chart with trend indicators
- **Platform Value Chart** - Monthly revenue breakdown

### Data Display
- **Data Table** - Sortable user performance table
- **Sparklines** - Mini trend charts in metric cards

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

## 🌐 Browser Support

Chrome, Firefox, Safari, Edge (latest versions)

## 📝 License

MIT License - feel free to use for personal or commercial projects.

## 👤 Author

**Jaikishan** - [@hashmessi](https://github.com/hashmessi)

---

<div align="center">

⭐ Star this repo if you found it helpful!

</div>
