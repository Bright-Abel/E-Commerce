import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accept: 'application/json',
  },
});

export default authFetch;

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarAmount;
};

export const getUniqueValue = (data, type) => {
  let unique = data.map((val) => val[type]);
  if (type === 'colors') {
    unique = unique.flat();
  }
  return ['all', ...new Set(unique)];
};
