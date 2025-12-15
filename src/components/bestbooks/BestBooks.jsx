import React from "react";
import Img1 from "../../assets/books/book1.jpg";
import Img2 from "../../assets/books/book2.jpg";
import Img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Img1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Img2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Img3,
    title: "Lost boys",
    rating: 4.7,
    author: "Lost Girl",
  },
];

const BestBooks = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="py-10 ">
        <div className="container">
          {/* header */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Trending Books for you
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          {/* Body section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center md:gap-5">
            {/* Card */}
            {booksData.map((book) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px] ">
                  <img
                    src={book.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center w-full">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>

                  <h1 className="text-xl font-bold">{book.title}</h1>
                  <p className="text-sm text-gray-500 duration-300 group-hover:text-white line-clamp-2">
                    {book.description}
                  </p>
                  <button
                    onClick={() => handleOrderPopup()}
                    className="px-4 py-2 mt-4 text-white duration-200 rounded-full bg-primary to-secondary hover:scale-105 group-hover:bg-white group-hover:text-primary"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestBooks;
