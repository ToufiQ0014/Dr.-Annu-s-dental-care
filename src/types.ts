export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  treatment: string;
  date: string;
  time?: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}
