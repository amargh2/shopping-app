import { Link } from "react-router-dom"
const EmptyCartNotification = () => {
  return (
    <div className = 'flex flex-col items-center gap-2 justify-center p-10 font-medium'>Your cart is currently empty! Visit the shop and add some items to your cart!
                <Link to='/shop'>
                  <button
                    className="rounded-md bg-cyan-400 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Go to the shop
                  </button>
              </Link>
                </div>
  )
}

export default EmptyCartNotification