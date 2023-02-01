import Form from "./Form";
import CartSidePanel2 from "./CartPanel";

const FormPage = (props) => {
  return (
    <div>
      <div className='flex justify-center pt-2 text-xl border-2 font-bold'><h1>Checkout</h1></div>
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

  )
}

export default FormPage