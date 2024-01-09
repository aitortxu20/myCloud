import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './styles.css';


function UploadForm() {
    const [file, setFile] = useState(null);
    const { path } = useParams();
  

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const realPath = path.replaceAll('-', '/')
            const formData = new FormData();
            
            formData.append('file', file);
            formData.append('pathToUpload', realPath);
            
            const response = await axios.post('http://192.168.1.27:3001/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            },
        });

            console.log('File uploaded succesfully: ', response.data);

        } catch (error) {
            console.error('Error while uploading file: ', error)
        }
    };

    return (
        
        <div>
            <h1>Subir Archivos</h1>
            <form action="/upload" onSubmit={handleSubmit}>
            <input type="file" name="file" onChange={handleFileChange} />
            <br /><br />
            <input type="submit" value="Subir Archivo" />
            </form>
        </div>
        
        );
    
}

export default UploadForm;