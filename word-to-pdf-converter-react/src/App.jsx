import React, { useState } from 'react';
import FileUploader from './component/FileUploader';


function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelected = (file) => {
    setSelectedFile(file);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Word to PDF Converter</h1>
      <FileUploader onFileSelected={handleFileSelected} />
      {selectedFile && (
        <div style={{ marginTop: '20px' }}>
          <p>Selected file: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
