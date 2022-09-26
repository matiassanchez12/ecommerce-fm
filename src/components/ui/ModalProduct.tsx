import { FC } from "react";
import { iconClose } from "../../assets";
import { slideImages } from "../../constants";
import { ModalCarousel } from "./ModalCarousel";

interface Props {
  handleToggle: () => void;
  currentIndex: number;
}

export const ModalProduct: FC<Props> = ({ handleToggle, currentIndex }) => {
  return (
    <>
      <div
        style={{ opacity: 0.8 }}
        className={`fixed z-10 flex items-center justify-center bottom-0 left-0 w-screen h-screen bg-color-dark-blue`}
      />
      <div className="fixed z-20 h-screen w-screen flex bottom-0 left-0 pt-20 justify-center">
        <div className="flex w-[500px] max-w-full h-[500px] flex-col">
          <div className="flex mb-6 justify-end">
            <button className="relative top-0 left-0" onClick={handleToggle}>
              <img src={iconClose} alt="icon close" className="h-[22px] w-[22px] color-white-svg" />
            </button>
          </div>

          <ModalCarousel slides={slideImages} selectedIndex={currentIndex} />
        </div>
      </div>
    </>
  );
};
