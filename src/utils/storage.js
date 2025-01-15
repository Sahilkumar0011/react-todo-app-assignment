// src/utils/storage.js
export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// utils/storage.js

export const getFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    if (!data) return null;

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return []; // Return an empty array in case of an error
  }
};


export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
