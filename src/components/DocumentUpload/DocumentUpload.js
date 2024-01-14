import React, { useState, useRef } from "react";
import "./DocumentUpload.css";
import { uploadDocument } from "../../services/UploadDocuments";


const DocumentUpload = (props) => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const response = await uploadDocument(file);
  
      // Handle successful upload
      console.log("Document uploaded", response);

      props.onUploadSuccess();
  
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      // Handle upload error
      console.error("Upload failed", error);
    }
  };

  return (
    <div className='document-upload-container'>
      <br/><br/><br/>
      <h2>Document Upload</h2>
      <input
        type="file"
        className="form-control"
        id="customFile"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <input onClick={handleUpload} class="btn btn-primary" type="submit" value="Submit"></input>
    </div>
  );
};

export default DocumentUpload;
