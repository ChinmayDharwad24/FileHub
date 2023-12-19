import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/Header/NavBar';
import DocumentUpload from '../../components/DocumentUpload/DocumentUpload';
import DocumentList from '../../components/DocumentList/DocumentList';
import './Home.css';
import isAuthenticated from '../../components/Auth/auth';


function DocumentContainer() {

  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated().then((authenticated) => {
      if (!authenticated) {
        navigate('/');
      }
    });
  }, [navigate]);

  const [uploadTrigger, setUploadTrigger] = useState(0);

  const handleUploadSuccess = () => {
    // Increment the uploadTrigger to trigger a re-render of DocumentList
    setUploadTrigger(uploadTrigger + 1);
  };

  return (
    <div className='container'>
      <NavBar></NavBar>
      <DocumentUpload onUploadSuccess = {handleUploadSuccess}/>
      <DocumentList key = {uploadTrigger}/>
    </div>
  );
}

export default DocumentContainer;
