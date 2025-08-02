// Test API connection
export const testBackendConnection = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/health');
    const data = await response.json();
    console.log('Backend connected:', data);
    return data;
  } catch (error) {
    console.error('Backend connection failed:', error);
    return null;
  }
};

// Test getting assets
export const testGetAssets = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/assets');
    const data = await response.json();
    console.log('Assets from backend:', data);
    return data;
  } catch (error) {
    console.error('Failed to get assets:', error);
    return null;
  }
};