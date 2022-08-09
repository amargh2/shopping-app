import Form from "./Form";
import Header from "../PageComponents/Header";
import NavBar from "../PageComponents/NavBar";
import CartSidePanel2 from "./cartSidePanel2";
import MakeCartItemCardsForCart from "../CartComponents/makeCartItemCards";

const EmptyCartNotification = () => {
  return (
    <div className='flex justify-center font-semibold py-10'>Your cart is empty. Head over to the shop and add some items to your cart!</div>
  )
}

export default EmptyCartNotification