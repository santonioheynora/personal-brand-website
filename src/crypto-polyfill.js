// Polyfill for crypto.getRandomValues
// Handle browser environment
if (typeof window !== 'undefined') {
  if (!window.crypto) {
    window.crypto = {};
  }
  
  if (!window.crypto.getRandomValues) {
    window.crypto.getRandomValues = function(array) {
      for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    };
  }
}

// Handle Node.js environment
if (typeof global !== 'undefined') {
  if (!global.crypto) {
    try {
      const nodeCrypto = require('crypto');
      global.crypto = {
        getRandomValues: function(array) {
          return nodeCrypto.randomFillSync(array);
        }
      };
    } catch (e) {
      // Fallback if crypto module is not available
      global.crypto = {
        getRandomValues: function(array) {
          for (let i = 0; i < array.length; i++) {
            array[i] = Math.floor(Math.random() * 256);
          }
          return array;
        }
      };
    }
  }
}

export {};
