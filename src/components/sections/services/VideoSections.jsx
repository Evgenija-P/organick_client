"use client";
import Wrapper from "@/components/Wrapper";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import { Play } from "@/icons/iconComponent";
import { useState } from "react";

const VideoSections = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="w-full h-[1073px] py-[80px] bg-videoSection mb-[140px]">
      <Wrapper styles={""}>
        <div className="w-[671px] mx-auto">
          <Title style={"text-center"}>Наша робота </Title>
          <Subtitle className={"text-center"}>Дізнайтеся, як ми працюємо</Subtitle>
          <p className="text-lg text-grey text-center my-10">
            Цей маленький відеоролик допоможе зрозуміти, що та як ми робимо на наших фермах, та чому
            наші продукти дійсно є екологічними та корисними. Натискайте на кнопку та дивіться!
          </p>
        </div>

        <div
          className={`rounded-md mx-auto overflow-hidden transition-all duration-500 ${
            showVideo ? "w-full" : "w-0 max-w-0"
          }`}
        >
          {showVideo && (
            <div className="aspect-w-16 aspect-h-9">
              {/* Компонент з відео */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MpWvth1N_IY?si=5OaVCVVbnl6OSgK7"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="w-[80%] h-[650px] mx-auto"
              ></iframe>
            </div>
          )}
        </div>
        {!showVideo && (
          <button
            className="w-[107px] h-[107px] rounded-full bg-green flex items-center justify-center shadow-2xl cursor-pointer mx-auto hover:bg-white"
            onClick={handleButtonClick}
          >
            <Play />
          </button>
        )}
      </Wrapper>
    </section>
  );
};

export default VideoSections;
