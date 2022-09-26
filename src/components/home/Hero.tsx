import { slideImages } from "../../constants";
import { Counter, Carousel } from "../ui";
import styles, { layout } from "../../style";
import { iconCart } from "../../assets";
import { useContext, useState } from "react";
import { CartContext } from "../../context";

const Hero = () => {
  const { addNewProduct, updateProduct } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    count > 0 && addNewProduct({ name: "Autumn Limited Edition", quantity: count, price: 125 });
  };

  return (
    <div className={`${layout.section} sm:px-6 px-0 `}>
      <div className="flex-1">
        <Carousel slides={slideImages} />
      </div>

      <div className="flex flex-1 justify-center flex-col md:gap-6 gap-4 sm:px-0 px-6">
        <h5 className={`${styles.paragraph} uppercase color-orange font-bold`}>sneaker company</h5>
        <h4 className={`${styles.heading4} capitalize`}>
          fall limited edition <br className="sm:d-none block" /> sneaker
        </h4>
        <p className={`${styles.paragraph} color-darkgrayish-blue`}>
          These low-profile sneakers are your perfect casual wear
          <br className="md:block hidden" /> companion. Featuring a durable rubber outer sole, they’ll
          <br className="md:block hidden" /> withstand everything the weather can offer.
        </p>

        <div className="flex md:flex-col flex-row md:items-start md:justify-start justify-between items-center py-2">
          <div className="flex flex-row items-center justify-start gap-4">
            <h4 className={`${styles.heading4} text-[34px]`}>{`$${"125.00"}`}</h4>
            <span className="font-bold color-orange bg-color-pale py-[1px] px-2 text-[16px] border-r-xs">{`${"50%"}`}</span>
          </div>

          <p className={`${styles.paragraph} font-bold line-through color-grayish-blue`}>{`$${"250.00"}`}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-2">
          <Counter count={count} setCount={setCount} />

          <button
            className="flex flex-row bg-color-orange font-bold md:w-[280px] w-full h-16 md:h-12 border-r-sm items-center justify-center gap-4 color-white"
            onClick={handleAdd}
          >
            <img src={iconCart} alt="iconCart" className="color-white-svg" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
