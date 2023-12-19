import React, { useState, useEffect } from "react";
import { fetchDocuments } from "../../services/FetchDocuments";
import "./DocumentList.css";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fileNames = await fetchDocuments();
        setDocuments(fileNames);
      } catch (error) {
        // Handle error
        console.error("Error in component", error);
      }
    };

    // Fetch documents when the component mounts
    fetchData();
  }, []);

 

  return (
    <div className="document-list-container">
      <h2>Document List</h2>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>{document}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
