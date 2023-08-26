import Footer from "components/layout/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LookInfo() {
  const [imageSizes, setImageSizes] = useState([]);
  const [feedData, setFeedData] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [loadedImageCount, setLoadedImageCount] = useState(20);
  const [loading, setLoading] = useState(false);

  const handleTagClick = (tag) => {
    const encodedTag = encodeURIComponent(tag);
    const apiUrl = `/lookinfo/list.do?tag=${encodedTag}`;
    axios.get(apiUrl)
      .then(response => {
        setFeedData(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    const tagButtons = document.querySelectorAll('.categories button');
    tagButtons.forEach(button => {
      button.style.backgroundColor = '#E7E7E7'; // 기본 색으로 초기화
    });

    const clickedButton = document.querySelector(`#${tag}`);
    if (clickedButton) {
      clickedButton.style.backgroundColor = '#FF4C13'; // 클릭한 버튼 색으로 변경
    }
  };

  const getImageSize = async (src) => {
    const img = new Image();
    img.src = src;
    await img.decode();
    return { src, width: img.width, height: img.height };
  };

  useEffect(() => {
    const urls = feedData.flatMap(feed => feed.image_path.split(', '));
    const imageUrls = urls.map(urlString => {
      const imageUrl = urlString.split(',')[0];
      return imageUrl;
    });

    Promise.all(imageUrls.map(getImageSize))
      .then((sizes) => {
        setImageSizes(sizes);
        setImageUrls(imageUrls);
      })
      .catch((error) => {
        console.error("이미지 크기 가져오기 오류:", error);
      });
  }, [feedData]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20 && !loading && loadedImageCount < imageUrls.length) {
      loadMoreImages();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, loadedImageCount, imageUrls]);

  const loadMoreImages = () => {
    setLoading(true);
    const nextBatchUrls = imageUrls.slice(loadedImageCount, loadedImageCount + 20);
    Promise.all(nextBatchUrls.map(getImageSize))
      .then((sizes) => {
        setImageSizes(prevSizes => [...prevSizes, ...sizes]);
        setLoadedImageCount(prevCount => prevCount + 20);
        setLoading(false);
      })
      .catch((error) => {
        console.error("추가 이미지 로드 오류:", error);
        setLoading(false);
      });
  };
  
  return (
    <div className="wrapper">
      <div className="lookInfoContainer">

        <div className="subHeader-container">

          <div className="search-container">
            <div className="search-bar">
              <div className="search">
                <div className="search-icon">
                  <img src="/img/lookInfoSearchIcon.svg" alt="검색" className="search-icon24"  />
                </div>
                <input type="text" placeholder="내용을 입력해주세요" />
                <img src="/img/xRemove.svg" alt="삭제" />
              </div>
            </div>
            <button type="submit" className="sumitBtn">검색</button>
          </div>

          <div className="categories">
            <button className="kitsch" id="fStyle">#키치</button>
            <button className="minimal" id="fStyle" onClick={() => handleTagClick("#미니멀")}>#미니멀</button>
            <button className="minimal" id="fStyle">#미니멀</button>
            <button className="minimal" id="fStyle">#미니멀</button>
            <button className="minimal" id="fStyle">#미니멀</button>
            <button className="minimal" id="fStyle">#미니멀</button>
            <button className="casual" id="fStyle">#캐주얼</button>
            <button className="minimal" id="fStyle">#미니멀</button>
            <button className="minimal" id="fStyle">#미니멀</button>
            <button className="minimal" id="fStyle">#미니멀</button>
            <button className="minimal" id="fStyle">#미니멀</button>
            <button className="casual" id="fStyle">#캐주얼</button>
            <button className="lovely" id="fStyle">#러블리</button>
            <button className="glam" id="fStyle">#글램</button>
            <button className="street" id="fStyle">#스트릿</button>
            <button className="sporty" id="fStyle">#스포티</button>
            <button className="vintage" id="fStyle">#빈티지</button>
            <button className="lovely" id="fStyle">#러블리</button>
            <button className="glam" id="fStyle">#글램</button>
            <button className="street" id="fStyle">#스트릿</button>
            <button className="sporty" id="fStyle">#스포티</button>
            <button className="vintage" id="fStyle">#빈티지</button>
          </div>

          <div className="lookImages-container">
            <div className="column">
              {imageSizes.map((size, index) => (
                <div
                  key={index}
                  id="lImage"
                  style={{
                    width: size?.width,
                    height: size?.height
                  }}
                  >
                  <img src={imageUrls[index]} alt={`Img ${index + 1}`} />
                  {index === imageSizes.length - 1 && loading && (
                    <img src="/img/three-dots.svg" alt="로딩중.," />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};