'use client'

import { Bell, Phone, RefreshCw, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function EmployeeDashboard() {
  const [distance, setDistance] = useState('--');
  const [timeToReach, setTimeToReach] = useState('--');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching with a timeout
    setTimeout(() => {
      setDistance('2.5 km'); // Placeholder data
      setTimeToReach('15 min'); // Placeholder data
      setLoading(false);
    }, 1500); // Simulated delay for data fetching
  }, []);

  // Sample data for the last 15 days (mock data)
  const data = {
    labels: Array.from({ length: 15 }, (_, i) => `Day ${i + 1}`), // X-axis labels (Day 1 to Day 15)
    datasets: [
      {
        label: 'Pickups',
        data: [5, 8, 3, 7, 9, 6, 4, 8, 7, 6, 5, 9, 8, 7, 6], // Sample data for pickups
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Deliveries',
        data: [4, 6, 7, 5, 8, 4, 7, 9, 6, 8, 7, 5, 6, 8, 7], // Sample data for deliveries
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Valid predefined position
      },
      title: {
        display: true,
        text: 'Pickups and Deliveries (Last 15 Days)',
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-6 md:p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <header className="bg-blue-600 text-white p-6 flex justify-between items-center">
          <h1 className="text-5xl font-bold tracking-wider">GRABAZON</h1> {/* Enlarged and styled company name */}
          <div className="space-x-4">
            <button className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors" title="Refresh Data">
              <RefreshCw className="w-6 h-6 text-blue-600" />
            </button>
            <button className="p-3 bg-yellow-100 rounded-full hover:bg-yellow-200 transition-colors" title="Notifications">
              <Bell className="w-6 h-6 text-yellow-600" />
            </button>
            <button className="p-3 bg-red-100 rounded-full hover:bg-red-200 transition-colors" title="Contact Support">
              <Phone className="w-6 h-6 text-red-600" />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Employee ID */}
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-700">Employee ID</div> {/* Adjusted color for visibility */}
            <input
              type="text"
              value="GRABAZON"
              readOnly
              className="w-48 p-3 text-lg border border-gray-300 rounded bg-gray-50 text-center text-gray-900 font-bold"
            />
          </div>

          {/* Task Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Task Sheets', 'Pending Pickups/Deliveries', 'Completed Pickups/Deliveries', 'Failed Pickups/Deliveries', 'Critical Tasks', 'Average User Rating'].map((item, index) => (
              <div key={index} className="p-5 bg-blue-50 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-800 text-lg">{item}</h3>
                <p className="text-3xl font-bold text-blue-600 mt-3">0</p> {/* Placeholder value */}
              </div>
            ))}
          </div>

          {/* Nearest Warehouse */}
          <button className="w-full p-4 text-lg bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            NEAREST WAREHOUSE
          </button>

          {/* Distance and Time Information */}
          <div className="space-y-3 text-lg">
            <p className="text-gray-800">DISTANCE TO BE COVERED: <span className="font-semibold text-gray-900">{loading ? 'Loading...' : distance}</span></p>
            <p className="text-gray-800">TIME TO REACH DESTINATION: <span className="font-semibold text-gray-900">{loading ? 'Loading...' : timeToReach}</span></p>
          </div>

          {/* Summary Section */}
          <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">SUMMARY</h2>
            {/* Last 15 Days Chart */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Line data={data} options={options} />
            </div>
          </div>

          {/* Support Button */}
          <button className="w-full p-4 text-lg bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            SUPPORT
          </button>
        </div>

        {/* Footer with Logout */}
        <footer className="p-6 bg-gray-100">
          <button className="w-full p-4 text-lg bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center">
            <LogOut className="w-6 h-6 mr-3" />
            LOG OUT
          </button>
        </footer>
      </div>
    </div>
  );
}
