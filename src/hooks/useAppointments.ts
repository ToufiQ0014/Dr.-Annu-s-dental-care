import { useState, useEffect } from 'react';
import { Appointment } from '../types';

const STORAGE_KEY = 'dental_appointments_v1';

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setAppointments(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse appointments", e);
      }
    }
    setIsLoaded(true);
  }, []);

  const addAppointment = (appt: Omit<Appointment, 'id' | 'createdAt' | 'status'>) => {
    const newAppt: Appointment = {
      ...appt,
      id: Math.random().toString(36).substring(2, 9),
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    const updated = [...appointments, newAppt];
    setAppointments(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newAppt;
  };

  const updateAppointmentStatus = (id: string, status: Appointment['status']) => {
    const updated = appointments.map(a => a.id === id ? { ...a, status } : a);
    setAppointments(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deleteAppointment = (id: string) => {
    const updated = appointments.filter(a => a.id !== id);
    setAppointments(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return {
    appointments,
    isLoaded,
    addAppointment,
    updateAppointmentStatus,
    deleteAppointment
  };
}
