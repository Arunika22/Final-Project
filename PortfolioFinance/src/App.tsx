import { useState } from 'react'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Portfolio } from '@/components/Portfolio'
import { Market } from '@/components/Market'
import { Trade } from '@/components/Trade'
import { ConnectionTest } from '@/components/ConnectionTest'
import { DataVerification } from '@/components/DataVerification'
import { testBackendConnection, testGetAssets } from './testConnection'

function App() {
  const [activeTab, setActiveTab] = useState('portfolio')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleTestConnection = async () => {
    console.log('Testing backend connection...')
    await testBackendConnection()
    await testGetAssets()
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'portfolio':
        return <Portfolio />
      case 'market':
        return <Market />
      case 'trade':
        return <Trade />
      case 'history':
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Transaction History</h2>
              <p className="text-muted-foreground">Your trading history will appear here</p>
            </div>
          </div>
        )
      case 'settings':
        return <ConnectionTest />
      case 'verify':
        return <DataVerification />
      default:
        return <Portfolio />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      

      
      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          isOpen={sidebarOpen}
        />
        
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden" 
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        <main className="flex-1 p-6 md:ml-0">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App