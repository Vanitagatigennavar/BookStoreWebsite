import React from "react";
import LibraryImage from "../../assets/Images/library.jpg";
import { GrSecure } from "react-icons/gr";
const LibraryFinger = () => {
  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2">
            {/* image section */}
            <div>
              <img
                data-aos="zoom-in"
                src={LibraryImage}
                alt=""
                className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_!2px_rgba(0,0,0,1)] object-corner"
              />
            </div>
            {/* text content section */}
            <div
              data-aos="slide-up"
              className="flex flex-col justify-center gap-6 sm:pt-0"
            >
              <h1 className="text-3xl font-bold sm:text-4xl">
                Library at your fingertips
              </h1>
              <p className="text-sm leading-5 tracking-wide text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quasi autem alias asperiores sint mollitia cumque
                expedita ad? Voluptatum delectus cumque, numquam soluta quidem
                suscipit neque explicabo dolores fugit vero.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <GrSecure className="w-12 h-12 p-4 text-4xl rounded-full shadow-sm bg-violet-100 dark:bg-violet-400" />
                  <p>Quality Books</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <GrSecure className="w-12 h-12 p-4 text-4xl bg-orange-100 rounded-full shadow-sm dark:bg-violet-400" />
                  <p>Fast Delivery</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <GrSecure className="w-12 h-12 p-4 text-4xl bg-green-100 rounded-full shadow-sm dark:bg-violet-400" />
                  <p>Easy Payment Method</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <GrSecure className="w-12 h-12 p-4 text-4xl bg-yellow-100 rounded-full shadow-sm dark:bg-violet-400" />
                  <p>Get offers on books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibraryFinger;
