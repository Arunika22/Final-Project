# Finance Portfolio Manager

A modern, responsive cryptocurrency portfolio management web application built with React, TypeScript, and shadcn/ui.

## Features

- **Portfolio Overview**: View total portfolio value, asset allocation, and performance metrics
- **Market Data**: Real-time cryptocurrency market information and rankings
- **Trading Interface**: Buy/sell cryptocurrencies with order book visualization
- **Interactive Charts**: Portfolio performance and asset allocation charts
- **Responsive Design**: Mobile-first approach with collapsible sidebar
- **Modern UI**: Clean, professional design with gradients and animations

## Tech Stack

- **React 18** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern, accessible UI components
- **Recharts** - Interactive charts and graphs
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Portfolio.tsx   # Portfolio overview
│   ├── Market.tsx      # Market data
│   └── Trade.tsx       # Trading interface
├── data/               # Mock data and types
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## Key Components

### Portfolio
- Total portfolio value and 24h change
- Asset allocation pie chart
- Performance line chart
- Holdings list with individual asset details

### Market
- Top cryptocurrencies with live data
- Market cap, volume, and price changes
- Sortable and searchable coin list

### Trading
- Buy/sell interface with real-time calculations
- Order book visualization
- Recent trades history
- Trading fees calculation

## Customization

The app uses a dark theme by default with a professional blue/purple gradient. You can customize:

- **Colors**: Modify the CSS variables in `src/index.css`
- **Components**: All UI components are in `src/components/ui/`
- **Data**: Replace mock data in `src/data/mockData.ts` with real API calls
- **Charts**: Customize chart appearance in the respective components

## Future Enhancements

- Real-time data integration with cryptocurrency APIs
- User authentication and persistent portfolios
- Advanced trading features (limit orders, stop-loss)
- Price alerts and notifications
- Historical data analysis
- Multi-currency support

## License

MIT License - feel free to use this project for learning or commercial purposes.