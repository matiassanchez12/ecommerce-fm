import { FC, useState } from "react";
import { iconPlus, iconMinus } from "../../assets";

interface Props {
  count: number;
  setCount: (value: number) => void;
}

export const Counter: FC<Props> = ({ count, setCount }) => {
  return (
    <div className="flex align-center md:w-[180px] w-full md:h-12 h-16">
      <button
        className="text-[34px] flex-1 bg-color-lightgrayish-blue color-orange font-bold btn-count-left md:pl-[30px] pl-[45px]"
        onClick={() => {
          setCount(count === 0 ? 0 : count - 1);
        }}
      >
        <img src={iconMinus} alt="iconMinus" />
      </button>
      <p className="text-[20px] flex justify-center items-center flex-1 font-bold bg-color-lightgrayish-blue">
        {count}
      </p>
      <button
        className="text-[34px] flex-1 bg-color-lightgrayish-blue color-orange font-bold btn-count-right md:pr-[30px] pr-[45px]"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <img src={iconPlus} alt="iconPlus" />
      </button>
    </div>
  );
};
