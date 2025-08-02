import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { mockMarketData } from '@/data/mockData'
import { formatCurrency } from '@/lib/utils'

export function Trade() {
  const [selectedCoin, setSelectedCoin] = useState(mockMarketData[0])
  const [amount, setAmount] = useState('')
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy')

  const estimatedTotal = parseFloat(amount || '0') * selectedCoin.price

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Trade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs value={orderType} onValueChange={(value) => setOrderType(value as 'buy' | 'sell')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="buy" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
                  Buy
                </TabsTrigger>
                <TabsTrigger value="sell" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                  Sell
                </TabsTrigger>
              </TabsList>

              <TabsContent value="buy" className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Cryptocurrency</label>
                  <select 
                    className="w-full p-2 border rounded-md bg-background"
                    value={selectedCoin.id}
                    onChange={(e) => {
                      const coin = mockMarketData.find(c => c.id === e.target.value)
                      if (coin) setSelectedCoin(coin)
                    }}
                  >
                    {mockMarketData.map((coin) => (
                      <option key={coin.id} value={coin.id}>
                        {coin.name} ({coin.symbol})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount ({selectedCoin.symbol})</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Price per {selectedCoin.symbol}:</span>
                    <span className="font-medium">{formatCurrency(selectedCoin.price)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Estimated Total:</span>
                    <span className="font-medium">{formatCurrency(estimatedTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Trading Fee (0.1%):</span>
                    <span className="font-medium">{formatCurrency(estimatedTotal * 0.001)}</span>
                  </div>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600" size="lg">
                  Buy {selectedCoin.symbol}
                </Button>
              </TabsContent>

              <TabsContent value="sell" className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Cryptocurrency</label>
                  <select 
                    className="w-full p-2 border rounded-md bg-background"
                    value={selectedCoin.id}
                    onChange={(e) => {
                      const coin = mockMarketData.find(c => c.id === e.target.value)
                      if (coin) setSelectedCoin(coin)
                    }}
                  >
                    {mockMarketData.map((coin) => (
                      <option key={coin.id} value={coin.id}>
                        {coin.name} ({coin.symbol})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Amount ({selectedCoin.symbol})</label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Price per {selectedCoin.symbol}:</span>
                    <span className="font-medium">{formatCurrency(selectedCoin.price)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Estimated Total:</span>
                    <span className="font-medium">{formatCurrency(estimatedTotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Trading Fee (0.1%):</span>
                    <span className="font-medium">{formatCurrency(estimatedTotal * 0.001)}</span>
                  </div>
                </div>

                <Button className="w-full bg-red-500 hover:bg-red-600" size="lg">
                  Sell {selectedCoin.symbol}
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Book</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center text-sm font-medium text-muted-foreground">
                {selectedCoin.name} ({selectedCoin.symbol})
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium text-red-500">Sell Orders</div>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-red-500">{formatCurrency(selectedCoin.price * (1 + (i + 1) * 0.001))}</span>
                    <span>{(Math.random() * 10).toFixed(3)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-b py-2 text-center">
                <div className="text-lg font-bold">{formatCurrency(selectedCoin.price)}</div>
                <div className="text-sm text-muted-foreground">Current Price</div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-green-500">Buy Orders</div>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-green-500">{formatCurrency(selectedCoin.price * (1 - (i + 1) * 0.001))}</span>
                    <span>{(Math.random() * 10).toFixed(3)}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
              <div>Time</div>
              <div>Type</div>
              <div>Amount</div>
              <div>Price</div>
            </div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="grid grid-cols-4 gap-4 text-sm py-2">
                <div>{new Date(Date.now() - i * 60000).toLocaleTimeString()}</div>
                <div className={Math.random() > 0.5 ? 'text-green-500' : 'text-red-500'}>
                  {Math.random() > 0.5 ? 'Buy' : 'Sell'}
                </div>
                <div>{(Math.random() * 5).toFixed(4)} {selectedCoin.symbol}</div>
                <div>{formatCurrency(selectedCoin.price * (0.99 + Math.random() * 0.02))}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}