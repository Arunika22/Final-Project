export interface CryptoAsset {
  id: string
  name: string
  symbol: string
  price: number
  change24h: number
  marketCap: number
  volume24h: number
  holdings?: number
  value?: number
}

export interface PortfolioData {
  totalValue: number
  totalChange24h: number
  assets: CryptoAsset[]
}

export const mockPortfolio: PortfolioData = {
  totalValue: 45678.90,
  totalChange24h: 5.67,
  assets: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 43250.00,
      change24h: 2.45,
      marketCap: 847000000000,
      volume24h: 15600000000,
      holdings: 0.5,
      value: 21625.00
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 2650.00,
      change24h: -1.23,
      marketCap: 318000000000,
      volume24h: 8900000000,
      holdings: 5.2,
      value: 13780.00
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      price: 0.48,
      change24h: 8.91,
      marketCap: 17000000000,
      volume24h: 450000000,
      holdings: 15000,
      value: 7200.00
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      price: 98.50,
      change24h: -3.45,
      marketCap: 42000000000,
      volume24h: 1200000000,
      holdings: 30,
      value: 2955.00
    }
  ]
}

export const mockMarketData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 43250.00,
    change24h: 2.45,
    marketCap: 847000000000,
    volume24h: 15600000000
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 2650.00,
    change24h: -1.23,
    marketCap: 318000000000,
    volume24h: 8900000000
  },
  {
    id: 'tether',
    name: 'Tether',
    symbol: 'USDT',
    price: 1.00,
    change24h: 0.01,
    marketCap: 91000000000,
    volume24h: 24000000000
  },
  {
    id: 'binancecoin',
    name: 'BNB',
    symbol: 'BNB',
    price: 315.80,
    change24h: 1.87,
    marketCap: 47000000000,
    volume24h: 890000000
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 98.50,
    change24h: -3.45,
    marketCap: 42000000000,
    volume24h: 1200000000
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.48,
    change24h: 8.91,
    marketCap: 17000000000,
    volume24h: 450000000
  }
]

export const mockChartData = [
  { date: '2024-01-01', value: 42000 },
  { date: '2024-01-02', value: 43200 },
  { date: '2024-01-03', value: 41800 },
  { date: '2024-01-04', value: 44500 },
  { date: '2024-01-05', value: 45200 },
  { date: '2024-01-06', value: 44800 },
  { date: '2024-01-07', value: 45678 }
]