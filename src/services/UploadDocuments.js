import axios from 'axios';

export const uploadDocument = async (file) => {
    try {
      // Create a FormData object to send the file
      const formData = new FormData();
      const filename = file.name;
      console.log(filename);
      formData.append("file", file);
  
      // Make an API call to your backend for document upload
      const response = await axios.post(
        `https://n8qqh8gg8j.execute-api.us-east-2.amazonaws.com/prod/file-upload?filename=${filename}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      // Handle successful upload
      console.log("Document uploaded", response.data);
  
      return response.data; // You can return additional data if needed
    } catch (error) {
      // Handle upload error
      console.error("Upload failed", error);
      throw error;
    }
  };