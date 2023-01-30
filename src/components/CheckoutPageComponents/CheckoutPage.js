import Form from "./Form";
import Header from "../PageComponents/Header";
import NavBar from "../PageComponents/NavBar";
import EmptyCartNotification from "./emptyCartPage";
import FormPage from "./FormPage";

const CheckoutPage = (props) => {
  if(props.cartItemCount() === 0) {
    return (
      <div>
        <NavBar cartItemCount={props.cartItemCount}/>
        <EmptyCartNotification/>
      </div>
    )
  } if (props.cartItemCount() > 0) {
    return (
      <div className='grid grid-cols-2'>
        <div className='col-span-full'>
          <NavBar cartItemCount={props.cartItemCount}/>
        </div>
        <div className='col-span-full'>
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
      </div>
    )
  }
  
}

export default CheckoutPage