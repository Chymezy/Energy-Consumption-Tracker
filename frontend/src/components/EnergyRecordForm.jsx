// import React, { useState, useEffect } from 'react';
// import { getEnergyRecords } from '../api';

// // Importance: Displays a list of energy records.

// const EnergyRecordList = () => {
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     // Fetch energy records from the API
//     getEnergyRecords().then(response => setRecords(response.data));
//   }, []);

//   return (
//     <div>
//       <h1>Energy Records</h1>
//       <ul>
//         {records.map(record => (
//           <li key={record.id}>{record.consumption} kWh on {record.recorded_at}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EnergyRecordList;

import React from 'react';

const EnergyRecordForm = () => {
  return (
    <div>
      <h2>Add Energy Consumption Data</h2>
      {/* Form to add energy consumption data */}
    </div>
  );
};

export default EnergyRecordForm;
