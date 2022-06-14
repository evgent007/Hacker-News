import { useState, useEffect } from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000)
  })

  return (
    <h2>
      {date.toLocaleDateString([], {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })}
    </h2>
  )
}
