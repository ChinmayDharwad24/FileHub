import axios from 'axios';

export const fetchDocuments = async () => {
  try {
    const response = await axios.get(
      "https://n8qqh8gg8j.execute-api.us-east-2.amazonaws.com/prod/file-upload"
    );

    const fileNames = JSON.parse(response.data.body);
    return fileNames;
  } catch (error) {
    console.error("Error fetching documents", error);
    throw error;
  }
};
