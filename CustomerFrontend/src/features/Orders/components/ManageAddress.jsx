import React, { useState } from 'react';
import { MapPin, Plus, Edit2, Trash2, Navigation } from 'lucide-react';

const ManageAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: 'Home',
      fullAddress: '123 Main Street, Apartment 4B, New York, NY 10001',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      fullAddress: '456 Business Ave, Suite 200, New York, NY 10002',
      isDefault: false
    }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddress, setNewAddress] = useState({ type: 'Home', fullAddress: '' });

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          alert(`Location: ${position.coords.latitude}, ${position.coords.longitude}`);
        },
        (error) => {
          alert('Unable to get location');
        }
      );
    }
  };

  const handleAddAddress = () => {
    if (newAddress.fullAddress.trim()) {
      setAddresses([...addresses, { ...newAddress, id: Date.now(), isDefault: false }]);
      setNewAddress({ type: 'Home', fullAddress: '' });
      setShowAddForm(false);
    }
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(addresses.map(addr => ({ ...addr, isDefault: addr.id === id })));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Manage Addresses</h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer text-sm md:text-base w-full sm:w-auto"
          >
            <Plus className="w-4 h-4" />
            Add New Address
          </button>
        </div>

        {showAddForm && (
          <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Add New Address</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
                <select
                  value={newAddress.type}
                  onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
                <textarea
                  value={newAddress.fullAddress}
                  onChange={(e) => setNewAddress({ ...newAddress, fullAddress: e.target.value })}
                  placeholder="Enter complete address"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleGetCurrentLocation}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                Use Current Location
              </button>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={handleAddAddress}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                >
                  Save Address
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`p-4 rounded-lg border-2 transition ${
                address.isDefault ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="font-semibold text-gray-800">{address.type}</span>
                    {address.isDefault && (
                      <span className="px-2 py-1 bg-indigo-600 text-white text-xs rounded-full">Default</span>
                    )}
                  </div>
                  <p className="text-gray-600 ml-7">{address.fullAddress}</p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition cursor-pointer"
                      title="Set as default"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition cursor-pointer"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
