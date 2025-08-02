import { Home, PieChart, TrendingUp, Settings, Wallet, History, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
  isOpen: boolean
}

const navigation = [
  { id: 'portfolio', label: 'Portfolio', icon: PieChart },
  { id: 'market', label: 'Market', icon: TrendingUp },
  { id: 'trade', label: 'Trade', icon: Wallet },
  { id: 'history', label: 'History', icon: History },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'verify', label: 'Verify Data', icon: CheckCircle },
]

export function Sidebar({ activeTab, onTabChange, isOpen }: SidebarProps) {
  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex flex-col h-full pt-16 md:pt-0">
        <div className="p-4">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => onTabChange(item.id)}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </aside>
  )
}