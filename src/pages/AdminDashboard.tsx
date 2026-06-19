import React, { useState } from 'react';
import { useAppointments } from '../hooks/useAppointments';
import { Calendar, Clock, Trash2, Plus, User, Phone, Clipboard, X, Search, CheckCircle } from 'lucide-react';

export default function AdminDashboard() {
  const { appointments, addAppointment, updateAppointmentStatus, deleteAppointment, isLoaded } = useAppointments();
  const [isAdding, setIsAdding] = useState(false);
  const [filter, setFilter] = useState('All');

  const filteredAppointments = appointments.filter(a => {
    if (filter === 'All') return true;
    return a.status === filter;
  }).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    addAppointment({
      patientName: formData.get('patientName') as string,
      phone: formData.get('phone') as string,
      treatment: formData.get('treatment') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      notes: formData.get('notes') as string,
    });
    setIsAdding(false);
  };

  const statusColors = {
    'Pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Confirmed': 'bg-blue-100 text-blue-800 border-blue-200',
    'Completed': 'bg-green-100 text-green-800 border-green-200',
    'Cancelled': 'bg-red-100 text-red-800 border-red-200',
  };

  if (!isLoaded) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Appointments Dashboard</h1>
            <p className="text-gray-500">Manage patient bookings and walk-ins.</p>
          </div>
          <button 
            onClick={() => setIsAdding(true)}
            className="mt-4 md:mt-0 flex items-center bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
          >
            <Plus size={20} className="mr-2" />
            Add Patient Appointment
          </button>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map(status => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === status 
                  ? 'bg-primary text-white shadow-sm' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {filteredAppointments.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center">
              <Calendar size={48} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">No Appointments Found</h3>
              <p className="text-gray-500 mt-2">There are no appointments matching your filter.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Patient Details</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date & Treatment</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredAppointments.map((appt) => (
                    <tr key={appt.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                            {appt.patientName.charAt(0).toUpperCase()}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{appt.patientName}</div>
                            <div className="text-sm text-gray-500 flex items-center mt-1">
                              <Phone size={12} className="mr-1" /> {appt.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 font-medium flex items-center">
                          <Calendar size={14} className="mr-2 text-gray-400" /> {appt.date || 'Not specified'}
                        </div>
                        <div className="text-sm text-gray-500 mt-1 flex items-center">
                          <Clipboard size={14} className="mr-2 text-gray-400" /> {appt.treatment || 'General'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select 
                          value={appt.status}
                          onChange={(e) => updateAppointmentStatus(appt.id, e.target.value as any)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-full border cursor-pointer outline-none ${statusColors[appt.status]}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button 
                          onClick={() => deleteAppointment(appt.id)}
                          className="text-red-500 hover:text-red-700 bg-red-50 p-2 rounded hover:bg-red-100 transition-colors"
                          title="Delete Appointment"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* Add Appointment Modal */}
      {isAdding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden my-8">
            <div className="bg-primary px-6 py-4 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold">Add Patient Appointment</h2>
              <button onClick={() => setIsAdding(false)} className="text-white hover:bg-black/20 p-1 rounded transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleAddSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patient Full Name <span className="text-red-500">*</span></label>
                  <input required name="patientName" type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input required name="phone" type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Treatment / Problem</label>
                  <select name="treatment" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white">
                    <option value="General Checkup">General Checkup</option>
                    <option value="Root Canal">Root Canal</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Tooth Ache">Tooth Ache / Pain</option>
                    <option value="Cosmetic">Cosmetic Dentistry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Date <span className="text-red-500">*</span></label>
                  <input required name="date" type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Internal Notes (Optional)</label>
                <textarea name="notes" rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none" placeholder="Any specific requirements..."></textarea>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
                <button type="button" onClick={() => setIsAdding(false)} className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors">
                  Save Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
