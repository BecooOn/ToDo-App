export const addLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocal = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
};
