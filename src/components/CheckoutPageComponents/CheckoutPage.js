import Form from "./Form";
import Header from "../PageComponents/Header";
import NavBar from "../PageComponents/NavBar";
import CartSidePanel2 from "./cartSidePanel2";
import MakeCartItemCardsForCart from "../CartComponents/makeCartItemCards";
import EmptyCartNotification from "./emptyCartPage";
import FormPage from "./FormPage";
import CartButton from "../ShopComponents/CartButton";

const CheckoutPage = (props) => {
  if(props.cartItemCount() === 0) {
    return (
      <div>
        <Header/>
        <NavBar cartItemCount={props.cartItemCount}/>
        <EmptyCartNotification/>
      </div>
    )
  } if (props.cartItemCount() > 0) {
    return (
      <div>
        <Header/>
        <NavBar cartItemCount={props.cartItemCount}/>
        <FormPage
        cartItemCount={props.cartItemCount} 
        addOne={props.addOneMoreItem} 
        removeAllOfSame={props.removeAllOfSame} 
        total={props.total} 
        inventory={props.inventory} 
        qtyHandler={props.qtyHandler} 
        removeFromCart={props.removeFromCart} 
        addToCart={props.addToCart} 
        clickHandler = {props.addToCart} 
        sort = {props.sortItemsByPrice}
        emptyCart={props.emptyCart}/>
      </div>
    )
  }
  
}

export default CheckoutPage