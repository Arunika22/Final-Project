import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DataVerification() {
  const [assets, setAssets] = useState([])
  const [holdings, setHoldings] = useState([])
  const [loading, setLoading] = useState(false)

  // Expected data from projectData.sql
  const expectedAssets = [
    { id: 'btc-asset-id-001', symbol: 'BTC', name: 'Bitcoin', price: '60000.00', type: 'crypto' },
    { id: 'eth-asset-id-002', symbol: 'ETH', name: 'Ethereum', price: '4000.00', type: 'crypto' },
    { id: 'aapl-asset-id-004', symbol: 'AAPL', name: 'Apple Inc', price: '150.00', type: 'stock' },
    { id: 'tsla-asset-id-003', symbol: 'TSLA', name: 'Tesla Inc', price: '700.00', type: 'stock' },
    { id: 'mf-asset-id-005', symbol: 'VFIAX', name: 'Vanguard 500 Index Fund', price: '350.00', type: 'fund' }
  ]

  const fetchData = async () => {
    setLoading(true)
    try {
      const verifyRes = await fetch('http://localhost:5000/api/verify/raw-sql')
      const verifyData = await verifyRes.json()
      
      setAssets(verifyData.assets)
      setHoldings(verifyData.holdings)
      console.log('Raw SQL Data:', verifyData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    setLoading(false)
  }

  const verifyAsset = (expected, actual) => {
    return actual && 
           actual.id === expected.id &&
           actual.symbol === expected.symbol &&
           actual.name === expected.name &&
           actual.current_price === expected.price &&
           actual.type === expected.type
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>🔍 Data Verification: projectData.sql vs Frontend</CardTitle>
        </CardHeader>
        <CardContent>
          <button 
            onClick={fetchData}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mb-4"
          >
            {loading ? 'Verifying...' : 'Verify Data Match'}
          </button>

          {assets.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Assets Verification</h3>
              <div className="grid gap-2">
                {expectedAssets.map(expected => {
                  const actual = assets.find(a => a.id === expected.id)
                  const isMatch = verifyAsset(expected, actual)
                  
                  return (
                    <div key={expected.id} className={`p-3 rounded border ${isMatch ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{expected.symbol}</span> - {expected.name}
                        </div>
                        <div className="flex items-center gap-4">
                          <span>Expected: ${expected.price}</span>
                          <span>Actual: ${actual?.current_price || 'NOT FOUND'}</span>
                          <span className={isMatch ? 'text-green-600' : 'text-red-600'}>
                            {isMatch ? '✅ MATCH' : '❌ MISMATCH'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Raw Database Response</h3>
                <div className="bg-gray-100 p-3 rounded text-xs max-h-40 overflow-y-auto">
                  <pre>{JSON.stringify(assets, null, 2)}</pre>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Holdings Data</h3>
                <div className="bg-gray-100 p-3 rounded text-xs max-h-40 overflow-y-auto">
                  <pre>{JSON.stringify(holdings, null, 2)}</pre>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}