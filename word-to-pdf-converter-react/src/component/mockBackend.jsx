import axios from 'axios';

const convertToPDF = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    // Simulating conversion process - replace this with your actual backend endpoint
    const response = await axios.post('http://example.com/convert', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob',
    });

    // Simulating download - you can handle the response here
    // For now, we'll just log a message
    console.log('Conversion successful:', response);
  } catch (error) {
    console.error('Conversion failed:', error);
  }
};

export default convertToPDF;
