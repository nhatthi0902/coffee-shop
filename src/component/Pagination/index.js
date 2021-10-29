import { useState } from "react";
import "./pagination.scss";
import Button from "../Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classNames from "classnames";

export default function Pagination({ currentPage, totalPage, onChangePage }) {
  let numberList = [];
  for (let i = 1; i <= totalPage; i++) {
    numberList.push(i);
  }

  const handleOnChangePage = (number) => {
    onChangePage(number);
    window.scrollTo(0, 0);
  };

  const prePage = () => {
    let currentNumber = currentPage;
    let pageNumber = currentNumber <= 1 ? 1 : currentNumber - 1;
    onChangePage(pageNumber);
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    let currentNumber = currentPage;
    let pageNumber = currentNumber >= totalPage ? totalPage : currentNumber + 1;
    onChangePage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="pagination">
      {totalPage >= 2 && (
        <Button extendClass="btn-primary" onClick={prePage}>
          <IoIosArrowBack />
        </Button>
      )}
      <ul className="number-list">
        {numberList.map((item, index) => {
          let classes = classNames("number", { current: item === currentPage });
          return (
            <li key={index}>
              <Button
                extendClass={classes}
                onClick={() => handleOnChangePage(item)}
              >
                {item}
              </Button>
            </li>
          );
        })}
      </ul>
      {totalPage >= 2 && (
        <Button extendClass="btn-primary" onClick={nextPage}>
          <IoIosArrowForward />
        </Button>
      )}
    </nav>
  );
}
