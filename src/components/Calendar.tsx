import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday } from 'date-fns';
import './Calendar.css'; // スタイルは必要に応じて追加してください

const Calendar: React.FC = () => {
  const [currentMonth] = useState(new Date());

  const monthDays = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  return (
    <div className="calendar-container">
      <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
      <div className="calendar-grid">
        {monthDays.map((day) => (
          <div
            key={day.toString()}
            className={`calendar-day ${isToday(day) ? 'today' : ''} ${isSameMonth(day, currentMonth) ? '' : 'other-month'}`}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
