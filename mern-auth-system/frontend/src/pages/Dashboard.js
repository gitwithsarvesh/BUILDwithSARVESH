import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Welcome to your dashboard! Your account is verified and ready to use.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Profile Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {user?.name}</p>
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                <p><span className="font-medium">Status:</span> 
                  <span className="text-green-600 ml-1">Verified</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Features</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  JWT Authentication
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Email Verified
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Password Reset Available
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Secure Session
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Next Steps</h4>
            <p className="text-yellow-700 text-sm">
              This is a protected route that requires authentication. You can now build additional 
              features like profile editing, settings, or integrate this auth system into your main application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;