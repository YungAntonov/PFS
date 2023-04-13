import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 50); // mettre un interval de 50ms pour que les aiguilles tournent 20 fois plus vite

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds() * 6; // chaque seconde fait tourner l'aiguille de 6 degrés
  const minutes = time.getMinutes() * 6; // chaque minute fait tourner l'aiguille de 6 degrés
  const hours = time.getHours() * 30 + time.getMinutes() / 2; // chaque heure fait tourner l'aiguille de 30 degrés plus un petit ajustement pour tenir compte des minutes

  return (
    <div className="clock">
      <div className="hour-hand" style={{ transform: `rotate(${hours}deg)` }} />
      <div className="minute-hand" style={{ transform: `rotate(${minutes}deg)` }} />
      <div className="second-hand" style={{ transform: `rotate(${seconds}deg)` }} />
    </div>
  );
};

export default Clock;
