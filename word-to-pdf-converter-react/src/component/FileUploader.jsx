import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import convertToPDF from './mockBackend'; // Import convertToPDF function from mockBackend

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
    convertToPDF(acceptedFiles[0]); // Call conversion function when file is selected
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.docx',
  });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop a .docx file here, or click to select one</p>
      {selectedFile && (
        <p>
          Selected file: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
        </p>
      )}
    </div>
  );
}

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FileUploader;
