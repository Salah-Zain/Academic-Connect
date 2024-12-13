import React from 'react';

const AttendanceCalendar = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Kadachira school</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b bg-gray-100 p-2 text-left">Attendance for 2023-24</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b p-2">January</td>
          </tr>
          <tr>
            <td className="border-b p-2">February</td>
          </tr>
          <tr>
            <td className="border-b p-2">March</td>
          </tr>
          <tr>
            <td className="border-b p-2">April</td>
          </tr>
          <tr>
            <td className="border-b p-2">May</td>
          </tr>
          <tr>
            <td className="border-b p-2">June</td>
          </tr>
          <tr>
            <td className="border-b p-2">July</td>
          </tr>
          <tr>
            <td className="border-b p-2">August</td>
          </tr>
          <tr>
            <td className="border-b p-2">September</td>
          </tr>
          <tr>
            <td className="border-b p-2">October</td>
          </tr>
          <tr>
            <td className="border-b p-2">November</td>
          </tr>
          <tr>
            <td className="border-b p-2">December</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceCalendar;