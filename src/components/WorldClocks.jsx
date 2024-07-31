import React, { useEffect, useState } from 'react'

const WorldClocks = () => {
  const [indiaTime, setIndiaTime] = useState('');
  const [australiaTime, setAustraliaTime] = useState('');

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      // Get current time in India (GMT+5:30)
      const now = new Date();
      const indiaOffset = 5.5 * 3600 * 1000; // Offset in milliseconds
      const indiaTime = new Date(now.getTime() + indiaOffset);

      // Format time as HH:MM:SS
      const indiaHours = formatTime(indiaTime.getHours());
      const indiaMinutes = formatTime(indiaTime.getMinutes());
      const indiaSeconds = formatTime(indiaTime.getSeconds());

      // Update state with Indian time
      setIndiaTime(`${indiaHours}:${indiaMinutes}:${indiaSeconds}`);

      // Get current time in Australia (GMT+10:00)
      const australiaOffset = 10 * 3600 * 1000; // Offset in milliseconds
      const australiaTime = new Date(now.getTime() + australiaOffset);

      // Format time as HH:MM:SS
      const australiaHours = formatTime(australiaTime.getHours());
      const australiaMinutes = formatTime(australiaTime.getMinutes());
      const australiaSeconds = formatTime(australiaTime.getSeconds());

      // Update state with Australian time
      setAustraliaTime(`${australiaHours}:${australiaMinutes}:${australiaSeconds}`);
    };

    // Format time function
    const formatTime = (time) => {
      return time < 10 ? `0${time}` : time;
    };

    // Update time every second
    const interval = setInterval(updateTime, 1000);

    // Initial call to updateTime to avoid delay in displaying the time
    updateTime();

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures useEffect runs only on mount
  
  return (
    <section className='world-clocks'>
      <div className='clock-card'>
        <div className='card-flag-box'>
          <img src='https://img.icons8.com/?size=100&id=32584&format=png&color=000000'/>
        </div>
        <div className='card-box'>
          <p>7 Way Lane, Jopling Road Hazratganj, Lucknow 226001</p>
          <p>India: <span>{indiaTime}</span></p>
        </div>
      </div>
      <div className='clock-card'>
        <div className='card-flag-box'>
          <img src='https://img.icons8.com/?size=100&id=32584&format=png&color=000000'/>
        </div>
        <div className='card-box'>
          <p>Shop 12/A/E, Pragati Bazaar Kapoorthala, Lucknow 226024</p>
          <p>India: <span>{indiaTime}</span></p>
        </div>
      </div>
      <div className='clock-card'>
        <div className='card-flag-box'>
          <img src='https://img.icons8.com/?size=100&id=22557&format=png&color=000000'/>
        </div>
        <div className='card-box'>
          <p>Suite 12.01/54 Miller St North Sydney NSW 2060</p>
          <p>Australia: <span>{australiaTime}</span></p>
        </div>
      </div>
      <div className='clock-card'>
        <div className='card-flag-box'>
          <img src='https://img.icons8.com/?size=100&id=32584&format=png&color=000000'/>
        </div>
        <div className='card-box'>
          <p>Surat Diamond Bourse Surat, Gujarat 395007</p>
          <p>India: <span>{indiaTime}</span></p>
        </div>
      </div>
    </section>
  )
}

export default WorldClocks
