import React from "react";
import BoardImg from "../../assets/Images/board.png";
import PlayStoreImg from "../../assets/Images/play_store.png";
import AppStoreImg from "../../assets/Images/app_store.png";
const bannerImg = {
  backgroundImage: `url(${BoardImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};
const AppStoreBanner = () => {
  return (
    <div
      className="py-10 text-white bg-gray-100 dark:bg-gray-800"
      style={bannerImg}
    >
      <div className="container">
        <div className="max-w-xl mx-auto space-y-6">
          <h1
            data-aos="slide-up"
            className="text-2xl font-semibold text-center sm:text-4xl"
          >
            Read Books At your Fingertips
          </h1>
          <div
            data-aos="slide-up"
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#">
              <img
                src={PlayStoreImg}
                alt=""
                className="max-w-[150p] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
            <a href="#">
              <img
                src={AppStoreImg}
                alt=""
                className="max-w-[150p] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
