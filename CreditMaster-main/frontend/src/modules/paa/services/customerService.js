import api from '../../../shared/services/api';

const mockCustomers = [
  {
    customerId: 101,
    name: "Harsha Vardhan",
    dob: "1992-08-15",
    income: 1200000,
    employmentType: "Salaried",
    status: "Active",
    contactInfo: { email: "harsha@example.com", phone: "9876543210", address: "123 Banking Street, Hyderabad" }
  },
  {
    customerId: 102,
    name: "Anjali Sharma",
    dob: "1995-12-10",
    income: 850000,
    employmentType: "SelfEmployed",
    status: "Active",
    contactInfo: { email: "anjali@example.com", phone: "9123456789", address: "45 Finance Row, Bangalore" }
  }
];

export const customerService = {
  getAll: () => api.get('/customers').then(res => res.data?.data || res.data || []).catch(() => mockCustomers),
  getById: (id) => api.get(`/customers/${id}`).then(res => res.data?.data || res.data).catch(() => mockCustomers.find(c => c.customerId == id)),
  create: (data) => api.post('/customers', data).catch(() => Promise.resolve({ data: { message: 'Customer created successfully (Mock)', customerId: Date.now() } })),
  update: (id, data) => api.put(`/customers/${id}`, data).catch(() => Promise.resolve({ data: { message: 'Customer updated successfully (Mock)' } })),
  delete: (id) => api.delete(`/customers/${id}`).catch(() => Promise.resolve({ data: { message: 'Customer deleted successfully (Mock)' } })),
  getMyProfile: () => api.get('/customers/my').then(res => res.data?.data || res.data).catch(() => mockCustomers[0]),
};
