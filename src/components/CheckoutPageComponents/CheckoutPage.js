import Header from "../PageComponents/Header";
import NavBar from "../PageComponents/NavBar";
import EmptyCartNotification from "./emptyCartPage";
import Form from "./Form";
import CartPanel from "./CartPanel";
const CheckoutPage = (props) => {
  if(props.cartItemCount() === 0) {
    return (
      <div>
        <div className='justify-center lg:hidden sm:flex'>
          <Header></Header>
        </div> 
        <NavBar cartItemCount={props.cartItemCount}/>
        <EmptyCartNotification/>
      </div>
    )
  } if (props.cartItemCount() > 0) {
    return (
      <div className='md:grid grid-cols-12'>
        <div className='col-span-full p-2'>
        <div className='justify-center lg:hidden sm:flex'>
          <Header></Header>
        </div> 
          <NavBar cartItemCount={props.cartItemCount}/>
        </div>
        <div className='col-span-6'>
          <CartPanel
                cartItemCount={props.cartItemCount}
                removeAllOfSame={props.removeAllOfSame}
                addOne={props.addOne} total={props.total}
                qtyHandler={props.qtyHandler}
                removeFromCart={props.removeFromCart}
                inventory={props.inventory}
                addToCart={props.addToCart}/>
        </div>
        <div className='col-span-4'>
          <Form></Form>
        </div>
      </div>
    )
  }
  
}

export default CheckoutPage