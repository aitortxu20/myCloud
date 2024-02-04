import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import './styles.css';
import * as FileSaver from 'file-saver';


function ShowContent() {

    const currentPath = window.location.pathname;
    const pathSplitted = currentPath.replaceAll('/', '-');
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const HandleDirectoryClick = (directoryName) => {
      navigate(`${currentPath}/${directoryName}`);  
      window.location.reload();   
    };

    const Download = (file) => {
      const pathToDownload = currentPath + '/' + file
      const pathReplaced = pathToDownload.replaceAll('/', '-');
      const downloadUrl = `http://192.168.1.33:3001/download/${pathReplaced}`;

      axios({
        method: 'get',
        url: downloadUrl,
        responseType: 'arraybuffer', 
      }).then(response => {
          const blob = new Blob([response.data]);
      
          FileSaver.saveAs(blob, file);
        })
        .catch(error => {
          console.error('Error when downloading:', error.message);
        });
    }

    const goBack = () => {
      navigate(-1)
    };

    useEffect(() =>{
        const getData = async() => {
            try {
                
                const response = await axios.get(`http://192.168.1.33:3001${currentPath}`);
                setData(response.data);
                
            } catch (error) {
                console.error('Error when obtaining data: ', error);
            }
        };  
        getData(); 

        window.addEventListener('popstate', () => {
          window.location.reload();
        });       
        
            
    }, []);

        
    return (
      <main>

        <div className="goBack" onClick={() => goBack()}>
            <img
              src="/img/goBack.png"
              alt="Carpeta"
              style={{ width: '24px', height: '24px' }}
            />
            <br></br>            
        </div>

      <div>
        {}
        <Link to={`/upload/${pathSplitted}`}>
          <button>
            <img src="/img/uploadFileIcon.png" height="40" alt="Create Dir"></img>
          </button>
        </Link>
      </div>

        
      <div className="file-list">
        {data && data.files && data.files.map((file, index) => (
          <div key={index} className="file" onClick={() => Download(file)}>
            <img
              src="/img/fileIcon.png"
              alt="Archivo"
              style={{ width: '24px', height: '24px' }}
            />
            <br></br>
            <span>{file}</span>
          </div>
        ))}

        {data && data.directories && data.directories.map((directory, index) => (
          <div key={index} className="directory" onClick={() => HandleDirectoryClick(directory)}>
            <img
              src="/img/folderImage.png"
              alt="Carpeta"
              style={{ width: '24px', height: '24px' }}
            />
            <br></br>
            <span>{directory}</span>
          </div>                  
        ))}
        
      </div>
      </main>
    );
};     

export default ShowContent;
