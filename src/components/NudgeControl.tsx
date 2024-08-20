import React, { useState } from 'react';
import './NudgeControl.css';

const NudgeControl: React.FC = () => {
  const [nudgeLevel, setNudgeLevel] = useState<string>('No Nudge');
  const [airlineId, setAirlineId] = useState<number | null>(null);

  const handleNudgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNudgeLevel(event.target.value);
  };

  const updateNudgeLevel = () => {
    if (airlineId === null) {
      console.error('No airline selected');
      return;
    }

    fetch(`/api/v1/airlines/${airlineId}/nudge`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nudgeLevel }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Nudge level updated successfully');
        } else {
          console.error('Failed to update nudge level');
        }
      })
      .catch(error => console.error('Error updating nudge level:', error));
  };

  return (
    <div className="nudge-control">
      <h2>Nudge Control</h2>
      <select value={nudgeLevel} onChange={handleNudgeChange}>
        <option value="No Nudge">No Nudge</option>
        <option value="Mild">Mild</option>
        <option value="Medium">Medium</option>
        <option value="Aggressive">Aggressive</option>
      </select>
      <button onClick={updateNudgeLevel}>Update Nudge Level</button>
    </div>
  );
};

export default NudgeControl;
