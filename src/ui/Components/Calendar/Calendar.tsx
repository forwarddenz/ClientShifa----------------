import Calendar from 'react-calendar';
import { useState, useContext, useEffect } from 'react'
import { DateContext } from '../../Contexts/DateContext';
import './Calendar.css'

function CalendarComponent() {
  const context = useContext(DateContext)
  const [date, setDate] = useState<any>(() => {
    const storedDate = localStorage.getItem("selectedDate")
    if (storedDate) {
      try {
        return new Date(storedDate)
      } catch (error) {
        console.log("Error parsing Date from localStorage", error)
        return new Date()
      }
    }
    return new Date()
  })

  if (!context) {
    return <div>DateContext.Provider is missing</div>;
  }

  const { setSelectedDate } = context;

  useEffect(() => {
    localStorage.setItem("selectedDate", date.toISOString())
    setSelectedDate(date)
  }, [date, setDate])

  return (
    <div className="calendar_component">
      <Calendar onChange={setDate} value={date} />
    </div>
  )
}

export default CalendarComponent