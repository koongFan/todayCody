import Footer from "components/layout/Footer";
import React, { useState, useEffect } from "react";

export default function LookInfo() {

  const LookInfoImgs = [
    '/img/lookImg01.svg',
    '/img/lookImg02.svg',
    '/img/lookImg03.svg',
    '/img/lookImg04.svg',
    '/img/lookImg05.svg',
    '/img/lookImg06.svg',
    '/img/lookImg07.svg',
    '/img/lookImg08.svg',
    '/img/lookImg09.svg',
    '/img/lookImg10.svg',
    '/img/lookImg11.svg',
    '/img/lookImg12.svg',
    '/img/lookImg13.svg',
    '/img/lookImg14.svg',
    '/img/lookImg15.svg',
    '/img/lookImg16.svg',
    '/img/lookImg17.svg',
    '/img/lookImg18.svg',
    '/img/lookImg19.svg',
    '/img/lookImg20.svg',
    '/img/lookImg21.svg'
  ];

  const [imageSizes, setImageSizes] = useState([]);

  useEffect(() => {
    Promise.all(LookInfoImgs.map(getImageSize))
      .then((sizes) => {
        setImageSizes(sizes);
      })
      .catch((error) => {
        console.error("Error fetching image sizes:", error);
      });
  }, []);  

  const getImageSize = async (src) => {
    const img = new Image();
    img.src = src;
    await img.decode();
    return { src, width: img.width, height: img.height };
  };
  
  return (
    <div className="wrapper">
      <div className="lookInfoContainer">

        <div className="subHeader-container">

          <div className="search-container">
            <div className="search-bar">
              <div className="search">
                <div className="search-icon">
                  <img src="/icons/lookInfoSearchIcon.svg" alt="검색" className="search-icon24"  />
                </div>
                <input type="text" placeholder="내용을 입력해주세요" />
                <img src="/icons/xRemove.svg" alt="삭제" />
              </div>
            </div>
            <button type="submit" className="sumitBtn">검색</button>
          </div>

          <div className="categories">
            <button className="kitsch" id="fStyle">#키치</button>
            <button className="minimal" id="fStyle">#미니멀</button>
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
              {LookInfoImgs.slice(0, 5).map((img, index) => (
                <div
                  key={index}
                  id="lImage"
                  style={{
                    width: imageSizes[index]?.width,
                    height: imageSizes[index]?.height
                  }}
                >
                  <img src={img} alt={`Img ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="column">
              {LookInfoImgs.slice(5, 10).map((img, index) => (
                <div
                  key={index + 5}
                  id="lImage"
                  style={{
                    width: imageSizes[index + 5]?.width,
                    height: imageSizes[index + 5]?.height
                  }}
                >
                  <img src={img} alt={`Img ${index + 6}`} />
                </div>
              ))}
            </div>
            <div className="column">
              {LookInfoImgs.slice(10, 15).map((img, index) => (
                <div
                  key={index + 10}
                  id="lImage"
                  style={{
                    width: imageSizes[index + 10]?.width,
                    height: imageSizes[index + 10]?.height
                  }}
                >
                  <img src={img} alt={`Img ${index + 11}`} />
                </div>
              ))}
            </div>
            <div className="column">
              {LookInfoImgs.slice(15, 20).map((img, index) => (
                <div
                  key={index + 15}
                  id="lImage"
                  style={{
                    width: imageSizes[index + 15]?.width,
                    height: imageSizes[index + 15]?.height
                  }}
                >
                  <img src={img} alt={`Img ${index + 16}`} />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
}
