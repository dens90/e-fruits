import { useSelector } from "react-redux";
import { addToCart, productInCart, totalProducts } from "../states/cartSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
import { removeCart } from "../states/cartSlice";
import { resetCart } from "../states/cartSlice";
import { totalSumPrices } from "../states/cartSlice";

export const Cart = ({ state }) => {
  const closePopUp = () => {
    state(false);
  };

  const dispatch = useDispatch();
  const cartState = useSelector(productInCart);
  const priceState = useSelector(totalSumPrices);
  const products = useSelector(totalProducts);

  return (
    <div className=" flex flex-col h-screen w-screen  items-center justify-center  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md text-black">
      <div className="relative flex shadow-lg flex-col justify-center items-center bg-red-100 w-[600px] h-[500px] rounded-lg">
        <h1 className=" text-2xl font-bold mb-4 ">
          {products > 0 ? "Prodotti nel carrello" : "Nessun prodotto presente"}
        </h1>

        {cartState.map((fruit, index) => (
          <div
            className="w-full my-4  flex justify-around  items-center"
            key={index}
          >
            <h1 className="text-2xl  w-[100px]">{fruit.name}</h1>
            <img className="w-[50px] " src={fruit.image} />
            <p>{fruit.quantity}</p>
            <p>{fruit.price} €</p>
            <DeleteForeverIcon onClick={() => dispatch(removeCart(fruit))} />
          </div>
        ))}
        <button
          onClick={closePopUp}
          className="absolute top-2 right-2 text-4xl"
        >
          &times;
        </button>
        <div className="flex items-center ">
          {products > 0 ? (
            <div className="text-2xl p-2 mt-4 mr-4 bg-green-500 text-white rounded-lg">
              Totale: {priceState}€
            </div>
          ) : (
            false
          )}
          {products > 0 ? (
            <div
              className="text-2xl p-2 mt-4 bg-red-500 text-white rounded-lg"
              onClick={() => dispatch(resetCart())}
            >
              Svuota Carrello
            </div>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};
