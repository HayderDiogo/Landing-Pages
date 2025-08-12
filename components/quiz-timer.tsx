"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

interface QuizTimerProps {
  onTimeUp?: () => void
}

export function QuizTimer({ onTimeUp }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp?.()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, onTimeUp])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600">
      <Clock className="w-4 h-4" />
      <span>
        Tempo restante: {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  )
}
