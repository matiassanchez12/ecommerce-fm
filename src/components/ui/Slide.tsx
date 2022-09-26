import { FC, useState } from "react";
import { useMediaQuery } from "../../hooks";
import { ISlideImage } from "../../interfaces";
import { ModalProduct } from "./ModalProduct";

interface Props {
  slide: ISlideImage;
  index: number;
  currentIndex: number;
  isModal?: boolean;
}

const Slide: FC<Props> = ({ slide, index, currentIndex, isModal = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isResponsive = useMediaQuery("(max-width: 768px)");

  function handleToggle() {
    !isModal && !isResponsive && setIsOpen(!isOpen);
  }

  return (
    <>
      <div
        className={`${index === currentIndex ? "block" : "hidden"} fade-in ${!isResponsive ? "cursor-pointer" : ""}`}
        onClick={handleToggle}
      >
        <img
          src={slide.url}
          alt={slide.caption}
          id="slide"
          style={{ width: isModal || isResponsive ? "100%" : "400px" }}
          className={`border-r-sm`}
        />
      </div>

      {isOpen && <ModalProduct handleToggle={handleToggle} currentIndex={currentIndex} />}
    </>
  );
};

export default Slide;
