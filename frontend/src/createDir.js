import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function DirectoryForm() {
  const [directoryName, setDirectoryName] = useState('');
  const currentPath = window.location.pathname;
  
  const handleInputChange = (event) => {
    setDirectoryName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
                
      await axios.post('http://localhost:3001/create-directory', { directoryName, currentPath });
      
    } catch (error) {
      console.error('Error al crear el directorio: ', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={directoryName}
        onChange={handleInputChange}
        placeholder="Nombre del directorio"
      />
      <button type="submit">
            <img src="/img/createFolderIcon.png" alt="Create Dir"></img>
      </button>
    </form>
  );
}

export default DirectoryForm;