import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import { feedUpload } from "api/feed";
import Footer from "components/layout/Footer";
import { BsCheckLg } from "react-icons/bs";

export default function NewPost() {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const [feedContent, setFeedContent] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (e) => {
    let imageLists = Object.values(e.target.files);
    let imageUrlLists = [];

    if (imageLists.length > 5) {
      window.alert("최대 5개의 파일까지 선택할 수 있습니다.");
      imageLists = imageLists.slice(0, 5);
    }

    imageLists.map((item) => imageUrlLists.push(URL.createObjectURL(item)));

    setSelectedFiles(imageLists);
    setFilePreviews(imageUrlLists);
  };

  const handleUpload = async (e) => {
    if (selectedFiles.length > 0) {
      let formData = new FormData();

      selectedFiles.map((fileData) => formData.append("file[]", fileData));

      const fileDataArray = selectedFiles.map((file, idx) => ({
        file_name: file.name,
        order_num: idx + 1,
      }));

      const feedData = {
        user_seq: user?.user_seq,
        content: feedContent,
        file: fileDataArray,
      };

      formData.append("jsonData", JSON.stringify(feedData));

      try {
        setUploading(true);
        feedUpload(formData, navigate);
      } catch (error) {
        setUploading(false);
        console.log(error);
      }
    }
  };

  const handlePreviewRemove = (idx) => {
    const updatedFiles = [...selectedFiles];
    const updatedPreviews = [...filePreviews];

    updatedFiles.splice(idx, 1);
    updatedPreviews.splice(idx, 1);

    setSelectedFiles(updatedFiles);
    setFilePreviews(updatedPreviews);
  };

  return (
    <div className="wrapper">
      <div className="newContainer">
        <h1 className="top">게시물 작성</h1>
        <div className="bottom">
          <div className="left">
            <div className="add">
              <div className="tag">대표사진</div>
              <input
                id="img-input"
                type="file"
                onChange={handleFileSelect}
                accept="image/*"
                multiple
                maxLength={5}
                style={{ display: "none" }}
              />

              {filePreviews.length > 0 ? (
                <img
                  className="represent-img"
                  src={filePreviews[0]}
                  alt="represent-img"
                />
              ) : (
                <label htmlFor="img-input" className="img-input">
                  <div className="imgContainer">
                    <img
                      src="assets/icon/camera.svg"
                      alt="camera-icon"
                      className="camera"
                    />
                  </div>
                  <p>아이콘을 클릭해서 사진을 추가해주세요!</p>
                </label>
              )}
            </div>

            {filePreviews.length > 0 && (
              <ul className="preview">
                {filePreviews.map((preview, index) => (
                  <li key={index} className="previewItem">
                    {index === 0 && <BsCheckLg className="check-icon" />}
                    <img src={preview} alt={`미리보기 ${index + 1}`} />
                    <button onClick={() => handlePreviewRemove(index)}>
                      x
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="right">
            <div className="recommend">
              <p>사진 용량: 5MB 미만</p>
              <p>사진 사이즈: 최소 640px * 640px</p>
              <p>규격에 맞춰서 최대 5장 업로드 (최소 1장 이상)</p>
            </div>

            <textarea
              cols="30"
              rows="10"
              placeholder="코멘트 입력.."
              value={feedContent}
              onChange={(e) => setFeedContent(e.target.value)}
            ></textarea>
            <button onClick={handleUpload} disabled={uploading}>
              {uploading ? "업로드 중..." : "업로드"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
