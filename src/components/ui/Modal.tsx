import { iconDelete, imageProductOneThumbnail } from "../../assets";
import styles from "../../style";
import { FC, useContext, useEffect, useMemo, useRef } from "react";
import { CartContext } from "../../context";

interface Props {
  handleToggle: () => void;
}

export const Modal: FC<Props> = ({ handleToggle }) => {
  const container = useRef<any>();
  const { products, removeProduct } = useContext(CartContext);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (container.current && !container.current.contains(event.target)) {
        handleToggle();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [container]);

  function handleRemove() {
    removeProduct(products[0]);
  }

  return (
    <div
      ref={container}
      className={`absolute z-20 top-40 sm:right-2 border-r-sm md:w-[350px] w-full m-auto bg-color-white shadow-2xl`}
    >
      <div className="p-4">
        <p className={`${styles.paragraph} font-bold`}>Cart</p>
      </div>
      <hr />

      <div className="min-h-[200px]">
        {products.length <= 0 ? (
          <div className="flex items-center justify-center h-[200px] w-full">
            <h4 className="color-darkgrayish-blue font-bold text-center ">Your cart is empty.</h4>
          </div>
        ) : (
          <>
            <div className="flex flex-row p-4 justify-between items-center">
              <div className="flex flex-row items-center gap-5">
                <img
                  src={imageProductOneThumbnail}
                  alt="image-product-one"
                  className="w-[50px] h-[50px] object-cover border-r-xs"
                />

                <div className="flex flex-col gap-1 w-[160px]">
                  <p className={`${styles.paragraph} color-darkgrayish-blue cut-text`}>Autumn Limited Edition</p>
                  <p className={`${styles.paragraph} color-darkgrayish-blue`}>
                    {`${products[0].price}.00 x ${products[0].quantity}`}
                    <span className="ml-3 font-bold color-black">{`$${
                      products[0].price * products[0].quantity
                    }.00`}</span>
                  </p>
                </div>
              </div>

              <button
                onClick={handleRemove}
                className="transition-all duration-500 ease-in-out border-r-full bg-transparent hover:bg-gray-200 w-[32px] h-[32px] flex items-center justify-center"
              >
                <img src={iconDelete} alt="icon-delete" />
              </button>
            </div>
            <div className="px-4 pb-8 pt-3">
              <button className="flex items-center border-r-sm h-[60px] justify-center w-full color-white bg-color-orange">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
