import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ConnectionTest() {
  const [backendStatus, setBackendStatus] = useState('Not tested')
  const [dbData, setDbData] = useState(null)
  const [loading, setLoading] = useState(false)

  const testConnection = async () => {
    setLoading(true)
    
    // Test backend health
    try {
      const healthRes = await fetch('http://localhost:5000/api/health')
      const healthData = await healthRes.json()
      setBackendStatus(healthData.status === 'OK' ? '✅ Connected' : '❌ Failed')
    } catch (error) {
      setBackendStatus('❌ Failed')
    }

    // Test database data
    try {
      const assetsRes = await fetch('http://localhost:5000/api/assets')
      const assetsData = await assetsRes.json()
      setDbData(assetsData)
    } catch (error) {
      setDbData(null)
    }
    
    setLoading(false)
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>🔗 Connection Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <button 
          onClick={testConnection}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Full Stack Connection'}
        </button>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Backend API:</span>
            <span>{backendStatus}</span>
          </div>
          <div className="flex justify-between">
            <span>Database:</span>
            <span>{dbData ? `✅ ${dbData.length} assets loaded` : '❌ No data'}</span>
          </div>
        </div>

        {dbData && (
          <div className="mt-4">
            <h4 className="font-semibold mb-2">ProjectData Database Records:</h4>
            <div className="bg-gray-100 p-3 rounded text-sm max-h-40 overflow-y-auto">
              {dbData.filter(asset => parseFloat(asset.current_price) > 0).slice(0, 5).map(asset => (
                <div key={asset.id} className="mb-1">
                  {asset.symbol}: {asset.name} - ${asset.current_price}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}