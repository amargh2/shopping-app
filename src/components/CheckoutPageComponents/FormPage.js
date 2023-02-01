import Form from "./Form";
import Header from "../PageComponents/Header";
import NavBar from "../PageComponents/NavBar";
import CartSidePanel2 from "./CartPanel";
import MakeCartItemCardsForCart from "../CartComponents/makeCartItemCards";
import CheckOutTotalDisplay from "./CheckoutTotalDisplay";
import CartButton from "../ShopComponents/CartButton";
const FormPage = (props) => {
  return (
    <div>
      <div className='flex justify-center pt-2 text-xl border-2 font-bold'><h1>Checkout</h1></div>
      <div class="md:grid grid-cols-12 flex flex-col px-10 pt-10 gap-4">
          <div className="col-span-4">
            <CartSidePanel2
              cartItemCount={props.cartItemCount}
              removeAllOfSame={props.removeAllOfSame}
              addOne={props.addOne} total={props.total}
              qtyHandler={props.qtyHandler}
              removeFromCart={props.removeFromCart}
              inventory={props.inventory}
              addToCart={props.addToCart}/>
            </div>
            <div className='col-span-3'><Form/></div>
          </div>
        </div>

  )
}

export default FormPage