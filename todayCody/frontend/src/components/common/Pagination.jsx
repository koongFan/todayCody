import React from "react";
import { useState } from "react";
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const limit = 3;
  const [step, setStep] = useState(1);
  const lastIndex = step * limit;
  const firstIndex = lastIndex - limit;

  const currentStep = pages.slice(firstIndex, lastIndex);

  return (
    <div className="pagination">
      <button
        className="prev"
        onClick={() => {
          if (step <= 1) {
            return;
          } else {
            //setStep이 바로 반영되지 않기 때문에 step을 기준으로 페이지를 설정해줄 수 없다.
            //따라서 setCurrentPage를 먼저 해준다.
            setCurrentPage((step - 1) * limit);
            setStep((step) => step - 1);
          }
        }}
      >
        <img src="/icon/prev.svg" alt="prev" />
      </button>
      {currentStep.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
      <button
        className="next"
        onClick={() => {
          if (step >= Math.ceil(totalPosts / postsPerPage / limit)) {
            return;
          } else {
            setCurrentPage(step * limit + 1);
            setStep((step) => step + 1);
          }
        }}
      >
        <img src="/icon/next.svg" alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
