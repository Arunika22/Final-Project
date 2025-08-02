import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockMarketData } from '@/data/mockData'
import { formatCurrency, formatPercentage } from '@/lib/utils'
import { TrendingUp, TrendingDown } from 'lucide-react'

export function Market() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Market Cap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.72T</div>
            <div className="text-green-500 text-sm flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              +2.34%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">24h Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$89.2B</div>
            <div className="text-red-500 text-sm flex items-center gap-1">
              <TrendingDown className="h-4 w-4" />
              -1.23%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">BTC Dominance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">49.2%</div>
            <div className="text-green-500 text-sm">+0.15%</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Cryptocurrencies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
              <div>Name</div>
              <div className="text-right">Price</div>
              <div className="text-right">24h Change</div>
              <div className="text-right">Market Cap</div>
              <div className="text-right">Volume</div>
            </div>
            {mockMarketData.map((coin, index) => (
              <div key={coin.id} className="grid grid-cols-5 gap-4 items-center p-3 hover:bg-muted/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <div className="text-sm text-muted-foreground">#{index + 1}</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                    {coin.symbol.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{coin.name}</div>
                    <div className="text-sm text-muted-foreground">{coin.symbol}</div>
                  </div>
                </div>
                <div className="text-right font-medium">
                  {formatCurrency(coin.price)}
                </div>
                <div className={`text-right font-medium ${coin.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {formatPercentage(coin.change24h)}
                </div>
                <div className="text-right text-sm">
                  {formatCurrency(coin.marketCap)}
                </div>
                <div className="text-right text-sm">
                  {formatCurrency(coin.volume24h)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}