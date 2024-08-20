import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [airlines, setAirlines] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/v1/airlines')
      .then(response => response.json())
      .then(data => setAirlines(data))
      .catch(error => console.error('Error fetching airline data:', error));
  }, []);

  return (
    <div className="dashboard">
      <h1>Airline Revenue Optimization Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Airline</th>
            <th>Volume</th>
            <th>Revenue</th>
            <th>Commission</th>
            <th>PLB</th>
          </tr>
        </thead>
        <tbody>
          {airlines.map(airline => (
            <tr key={airline.airlineId}>
              <td>{airline.name}</td>
              <td>{airline.volumeCommitment}</td>
              <td>{airline.revenue}</td>
              <td>{airline.commission}</td>
              <td>{airline.plb}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
