import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import '../scss/pages/_newpost.scss';

export default function NewPost() {
  const navigate = useNavigate();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]); // 파일 미리보기 이미지 URL 배열
  const [feedContent, setFeedContent] = useState(""); // 피드 내용 상태 변수
  const [uploading, setUploading] = useState(false); // 파일 업로드 상태

  const handleFileSelect = (event) => {
    const newFiles = event.target.files; // 선택한 파일들
  
    if (newFiles.length + selectedFiles.length > 5) {
      // 선택한 파일 개수가 5를 초과하는 경우
      alert("최대 5개의 파일까지 선택할 수 있습니다.");
      event.target.value = null; // 파일 선택 초기화
      return;
    }
  
    // 선택한 파일들을 배열에 추가
    const updatedFiles = [...selectedFiles, ...newFiles].filter((file) => file !== null && file !== undefined);
    setSelectedFiles(updatedFiles);
  
    // 파일 미리보기 이미지 URL 생성
    const updatedFilePreviews = [];
  
    const readAndSetPreview = (file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = e.target.result; // 파일 미리보기 이미지 URL을 변수에 저장
        updatedFilePreviews.push(preview); // 파일 미리보기 이미지 URL을 updatedFilePreviews 배열에 추가
        if (updatedFilePreviews.length === updatedFiles.length) {
          setFilePreviews([...updatedFilePreviews]);
        }
      };
      reader.readAsDataURL(file);
    };
    
    for (let i = 0; i < updatedFiles.length; i++) {
      const file = updatedFiles[i];
      if (file) {
        readAndSetPreview(file, i);
      }
    }

  }; 
  

  const handleUpload = async (e) => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
  
      selectedFiles.forEach((fileData, index) => {
        formData.append('file[]', fileData);  // 파일 추가
      });

      const fileDataArray = selectedFiles.map((file, index) => ({
        file_name: file.name,
        order_num: index + 1,
      }));
  
      const feedData = {
        user_seq: 1,
        content: feedContent,
        file: fileDataArray,
      };

      formData.append('jsonData', JSON.stringify(feedData));
  
      try {
        setUploading(true); // 파일 업로드 시작 시 상태 업데이트
  
        const response = await axios.post('http://52.79.65.236:8081/feed/write.do', formData);
        
        const uploadedFileURLs = response.data.fileURLs;
        setFilePreviews([...filePreviews, ...uploadedFileURLs]);

        // 요청 성공 시 동작
        setSelectedFiles([]); // 선택한 파일 초기화
        setFilePreviews([]); // 미리보기 초기화
        setFeedContent(""); // 피드 내용 초기화
        setUploading(false); // 파일 업로드 완료 시 상태 업데이트

        // 업로드 완료 후 페이지 이동
        alert("피드 업로드가 완료되었습니다.");
        navigate('/mypage');
      } catch (error) {
        console.log(error);
        // 요청 실패 시 동작
        setUploading(false); // 파일 업로드 실패 시 상태 업데이트
      }
    }
  };
  
  const handlePreviewRemove = (index) => {
    const updatedFiles = [...selectedFiles];
    const updatedPreviews = [...filePreviews];

    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setFilePreviews(updatedPreviews);
  };

  return (
    <>
      <div className="wrapper">
        <h1>New Post</h1>
        <div className="file-upload">
          <input
            type="file"
            onChange={handleFileSelect}
            accept="image/*"
            multiple  // 다중 파일 선택 가능하도록 설정
            maxLength={5} // 최대 5개 파일까지 선택 가능
          />
          {filePreviews.length > 0 && (
            <div className="image-preview">
              {filePreviews.map((preview, index) => (
                <div key={index} className="preview-item">
                  <img src={preview} alt={`미리보기 ${index + 1}`} />
                  <button onClick={() => handlePreviewRemove(index)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="text-upload">
          <ReactQuill
            theme="snow"
            value={feedContent}
            onChange={setFeedContent}
          />
          {!uploading ? (
            <button onClick={handleUpload}>피드 업로드</button>
          ) : (
            <button disabled>Uploading...</button>
          )}
        </div>
      </div>
    </>
  );
}