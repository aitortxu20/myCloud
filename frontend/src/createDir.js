import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import { Button, Modal } from 'react-bootstrap';

function DirectoryForm() {

  const [directoryName, setDirectoryName] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentPath = window.location.pathname;
  
  const handleInputChange = (event) => {
    setDirectoryName(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
                
      await axios.post('http://192.168.1.33:3001/create-directory', { directoryName, currentPath });
      
    } catch (error) {
      console.error('Error al crear el directorio: ', error);
    }
  };

  return (

    <div>
      <Button variant="primary" onClick={() => setModalIsOpen(true)}>
        <img src="/img/createFolderIcon.png" alt="Create Dir"></img>
      </Button>

      <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)} centered dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Create Folder</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalIsOpen(false)}>
            Cerrar Pop-up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default DirectoryForm;