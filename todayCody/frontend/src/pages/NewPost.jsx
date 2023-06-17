import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
    const updatedFiles = [...selectedFiles, ...newFiles];
    setSelectedFiles(updatedFiles);
  
    // 파일 미리보기 이미지 URL 생성
    const previews = [];
    for (let i = 0; i < updatedFiles.length; i++) {
      const file = updatedFiles[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push(e.target.result);
        if (previews.length === updatedFiles.length) {
          setFilePreviews(previews);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleContentChange = (event) => {
    setFeedContent(event.target.value); // 피드 내용 상태 업데이트
  };

  const handleUpload = async (e) => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();
  
      selectedFiles.forEach((fileData, index) => {
        formData.append('file[]', fileData, fileData.name); // 파일 추가
        formData.append('order_num', index + 1); // 파일 순서 추가
      });
  
      const feedData = {
        user_seq: 1, // 사용자 고유 번호 (하드 코딩 예시)
        content: feedContent // 피드 내용
      };
      formData.append('jsonData', JSON.stringify(feedData));
  
      try {
        setUploading(true); // 파일 업로드 시작 시 상태 업데이트
  
        const response = await axios.post('/feed/write.do', formData);
        console.log(response.data);

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
          <textarea
            placeholder="피드 내용을 입력해주세요"
            value={feedContent}
            onChange={handleContentChange}
          ></textarea>
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
