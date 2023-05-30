import React, { useState } from "react";
import axios from 'axios';

export default function NewPost() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [feedContent, setFeedContent] = useState(""); // 피드 내용 상태 변수
  const [uploadedImages, setUploadedImages] = useState([]); // 업로드된 이미지 목록 상태 변수

  const handleFileSelect = (event) => {
    const selectedFiles = event.target.files; // 선택한 파일들
    const files = []; // 파일 배열

    // 선택한 파일들을 배열에 추가
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const filename = `filename${i + 1}`; // 파일명 동적 생성
      files.push({ file, filename }); // 파일과 파일명을 객체로 추가
    }

    setSelectedFiles(files); // 선택한 파일들을 상태 변수에 저장
  };

  const handleContentChange = (event) => {
    setFeedContent(event.target.value); // 피드 내용 상태 업데이트
  };

  const handleUpload = async (e) => {
    if (selectedFiles.length > 0) {
      const formData = new FormData();

      selectedFiles.forEach((fileData, index) => {
        formData.append('file[]', fileData.file, fileData.filename); // 파일과 파일명 추가
        formData.append('order_num', index + 1); // 파일 순서 추가
      });

      const feedData = {
        user_seq: 1, // 사용자 고유 번호 (하드 코딩 예시)
        content: feedContent // 피드 내용
      };
      formData.append('jsonData', JSON.stringify(feedData));

      try {
        const response = await axios.post('/feed/write.do', formData);
        console.log(response.data);
        // 요청 성공 시 동작

        // 업로드된 이미지 목록 업데이트
        setUploadedImages(response.data.images);
      } catch (error) {
        console.log(error);
        // 요청 실패 시 동작
      }
    }
  };

  return (
    <>
      <div className="wrapper">
        <h1>New Post</h1>
        <input type="file" multiple onChange={handleFileSelect} />
        <textarea
          placeholder="피드 내용을 입력해주세요"
          value={feedContent}
          onChange={handleContentChange}
        ></textarea>
        <button onClick={handleUpload}>피드 업로드</button>

        {/* 업로드된 이미지 목록 표시 */}
        <div className="uploaded-images">
          {uploadedImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Uploaded ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
