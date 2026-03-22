import api from '../../../shared/services/api';

const mockProducts = [
  { id: 1, productName: "Visa Platinum", category: "PLATINUM", interestRate: 14.5, annualFee: 2500, status: "ACTIVE" },
  { id: 2, productName: "Mastercard Gold", category: "GOLD", interestRate: 16.0, annualFee: 1500, status: "ACTIVE" },
  { id: 3, productName: "Student Lite", category: "STUDENT", interestRate: 18.0, annualFee: 0, status: "ACTIVE" }
];

export const cardProductService = {
  getAll: () => api.get('/api/products').then(res => res.data?.data || res.data || []).catch(() => mockProducts),
  getById: (id) => api.get(`/api/products/${id}`).then(res => res.data?.data || res.data).catch(() => mockProducts.find(p => p.id == id)),
  create: (data) => api.post('/api/products', data),
};

const mockFees = [
  { id: 1, productId: 101, feeType: "ANNUAL", amount: 2500, percentage: null },
  { id: 2, productId: 102, feeType: "LATE_PAYMENT", amount: 500, percentage: 5 },
  { id: 3, productId: 103, feeType: "OVERLIMIT", amount: 300, percentage: 0 }
];

export const feeConfigService = {
  getAll: () => api.get('/api/fees').then(res => res.data?.data || res.data || []).catch(() => mockFees),
  getById: (id) => api.get(`/api/fees/${id}`).then(res => res.data?.data || res.data).catch(() => mockFees.find(f => f.id == id)),
  create: (data) => api.post('/api/fees', data),
};
