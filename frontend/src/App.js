import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadForm from './uploadForm'; 
import ContentRenderer from './contentRender';

function App() {
  return (
    <Router>
      <Routes>
         
        <Route path="/upload/:path" element={<UploadForm />} />        
        <Route path="/uploads/*" element={<ContentRenderer />} />

      </Routes>
    </Router>
  );
}

export default App;
