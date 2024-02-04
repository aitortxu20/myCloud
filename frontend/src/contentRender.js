import React from 'react';
import { useParams} from 'react-router-dom';
import ShowContent from './showContent';
import DirectoryForm from './createDir';

function ContentRenderer() {
  const { '*': path } = useParams();
  
  return (
    <div>
      <h2>Estás en: /uploads/{path}</h2>
      <ShowContent /> {}
      <DirectoryForm /> {}
    </div>
  );
}

export default ContentRenderer;
