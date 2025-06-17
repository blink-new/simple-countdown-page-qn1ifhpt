import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Target date: 3 days from now
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 3)

    const updateCountdown = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex flex-col items-center justify-center p-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12 animate-fade-in flex justify-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <img 
              src="/oneyoulogo.png" 
              alt="OneYou Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Something Big
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Is Coming
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-light">
            Get ready for an extraordinary experience that will change everything
          </p>
        </div>

        {/* Countdown */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={item.label} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 countdown-number">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base text-slate-500 font-medium uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enter Button (non-clickable) */}
        <div className="mb-8">
          <Button 
            disabled
            className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full shadow-lg cursor-not-allowed opacity-60 transition-all duration-300"
          >
            Enter
          </Button>
          <p className="text-sm text-slate-400 mt-3">
            Access coming soon
          </p>
        </div>

        {/* Waiting message */}
        <div className="text-center">
          <p className="text-slate-500 text-lg">
            Stay tuned to discover our revolutionary new experience
          </p>
        </div>
      </div>
    </div>
  )
}

export default App