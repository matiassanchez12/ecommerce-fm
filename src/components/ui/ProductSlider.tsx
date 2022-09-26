import { FC } from "react";
import { Slide } from "react-slideshow-image";
import { ISlideImage } from "../../interfaces";

interface Props {
  slideImages: ISlideImage[];
}

export const ProductSlider: FC<Props> = ({ slideImages }) => {
  return (
    <Slide easing="ease" duration={7000} indicators>
      {slideImages.map(({ url, caption }) => (
        <div className="each-slide" key={caption}>
          <div
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      ))}
    </Slide>
  );
};
