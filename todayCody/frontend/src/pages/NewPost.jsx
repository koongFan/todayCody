import React, { useState } from "react";
import axios from 'axios';

export default function NewPost() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    if (selectedFile) {
      try {
        const response = await axios.post('/api/upload', selectedFile);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
    <div className="wrapper">
      <h1>New Post</h1>
      <input
        type="file"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>게시물 업로드</button>  
    </div>
    </>
  );
}