import api from '../../../shared/services/api';

export const applicationService = {
  getAll: () => api.get('/applications').then(res => res.data?.data || res.data || []).catch(() => []),
  getById: (id) => api.get(`/applications/${id}`).then(res => res.data?.data || res.data).catch(() => ({})),
  getByCustomer: (customerId) => api.get(`/applications/customer/${customerId}`).then(res => res.data?.data || res.data || []).catch(() => []),
  getStatus: (id) => api.get(`/applications/${id}/status`).then(res => res.data?.data || res.data).catch(() => ({ status: 'Submitted' })),
  create: (data) => api.post('/applications', data).catch(() => Promise.resolve({ data: { message: 'Application submitted successfully (Mock)' } })),
  updateStatus: (id, status) => api.put(`/applications/${id}/status`, null, { params: { status } }).catch(() => Promise.resolve({ data: { message: 'Status updated successfully (Mock)' } })),
};
