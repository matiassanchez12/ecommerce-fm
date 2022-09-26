import { FC, useState } from "react";
import { ISlideImage } from "../../interfaces";
import { iconNext, iconPrevius } from "../../assets";
import Slide from "./Slide";
import LittleSlide from "./LittleSlide";
import { useMediaQuery } from "../../hooks";

interface Props {
  slides: ISlideImage[];
  selectedIndex: number;
}

export const ModalCarousel: FC<Props> = ({ slides, selectedIndex }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0 | selectedIndex);
  const isResponsive = useMediaQuery("(max-width: 768px)");

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === slides.length - 1) return 0;

      return prev + 1;
    });
  };

  const handlePrevius = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return slides.length - 1;

      return prev - 1;
    });
  };

  return (
    <div className="pb-6">
      <div className="flex justify-start flex-col items-center relative">
        <span className={`absolute bottom-[55%] left-[-22px] btn-carousel z-10`} onClick={handlePrevius}>
          <img src={iconPrevius} alt="icon-previus" />
        </span>

        {slides.map((slide, index) => (
          <Slide key={index} slide={slide} index={index} currentIndex={currentIndex} isModal />
        ))}

        <div className="md:flex hidden gap-6 pt-4">
          {slides.map((slide, index) => (
            <LittleSlide
              key={index}
              slide={slide}
              isSelected={currentIndex === index}
              handleClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <span className={`absolute bottom-[55%] right-[-22px] btn-carousel`} onClick={handleNext}>
          <img src={iconNext} alt="icon-next" />
        </span>
      </div>
    </div>
  );
};
