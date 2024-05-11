/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "../Pagination.css";
import arrowLeftIcon from "../../../assets/images/svg/arrow-left.svg";
import arrowRightIcon from "../../../assets/images/svg/arrow-right.svg";

interface IProps {
  currentPage: number;
  lastPage: number;
  currentPosts: any;
  setPageNumberIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function BEPagination({
  currentPage,
  lastPage,
  currentPosts,
  setPageNumberIndex,
}: IProps) {
  // Functions, States and Variables
  //   States
  const [buttons, setButtons] = useState<JSX.Element[] | null>(null);

  //   UseEffects
  useEffect(() => {
    // Update pagination buttons on update
    const button = [] as JSX.Element[];
    const pagesArray = [];
    for (let index = 1; index <= lastPage; index++) {
      pagesArray.push(index);
    }

    //pagination number buttons
    for (let pageNumber = 1; pageNumber <= pagesArray.length; pageNumber++) {
      button.push(
        <li
          className={`pagination--page-item ${
            pageNumber === currentPage
              ? "active"
              : pageNumber === currentPage - 1
              ? "active-sibling"
              : ""
          }`}
          key={pageNumber}
        >
          <button
            onClick={() => handlePaginate(pageNumber)}
            className="page-link"
          >
            {pageNumber}
          </button>
        </li>
      );
    }
    setButtons(button);
  }, [currentPosts]);

  //on page change
  const handlePaginate = (pageNumber: number) => {
    if (pageNumber > lastPage) {
      return;
    }
    if (pageNumber < 1) {
      return;
    }
    // This triggers a dispatch to fetch new set of posts
    setPageNumberIndex(pageNumber);
  };

  return (
    <div className="pagination-container">
      <nav>
        {/* Previous Buttons */}
        <div className="prev-button-wrapper">
          <button onClick={() => handlePaginate(currentPage - 1)}>
            <img src={arrowLeftIcon} alt="" />
          </button>
        </div>

        {/* Button */}
        <ul className="pagination__">{buttons}</ul>

        {/* Next Button */}
        <div className="next-button-wrapper">
          <button onClick={() => handlePaginate(currentPage + 1)}>
            <img src={arrowRightIcon} alt="" />
          </button>
        </div>
      </nav>
    </div>
  );
}
