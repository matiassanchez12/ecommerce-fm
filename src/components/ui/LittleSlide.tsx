import { FC, useState } from "react";
import { ISlideImage } from "../../interfaces";

interface Props {
  handleClick: () => void;
  slide: ISlideImage;
  isSelected: boolean;
}

const LittleSlide: FC<Props> = ({ slide, isSelected, handleClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={`${isSelected && "little-slide"} w-[80px] h-[80px] cursor-pointer border-r-sm`}
      style={{
        background: `url(${slide.thumbnail}) center`,
        backgroundSize: "cover",
        opacity: hover ? 0.5 : 1,
        transition: "opacity .3s ease-in-out",
      }}
    />
  );
};

export default LittleSlide;
