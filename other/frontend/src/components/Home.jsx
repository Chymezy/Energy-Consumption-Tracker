// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchDailyEnergyConsumption } from '../services/api';
import '../styles/Home.css';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDailyEnergyConsumption();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Energy Consumption Tracker</h1>
      <p>Track and manage your energy consumption efficiently.</p>
      {data && (
        <div>
          <h2>Energy Usage:</h2>
          <ul>
            {data.usage.map((usage, index) => (
              <li key={index}>{data.dates[index]}: {usage} kWh</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
