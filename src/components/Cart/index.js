import CartContext from '../../context/CartContext'
import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const totalCostList = cartList.map(each => each.quantity * each.price)
      let resultCost
      const lengthOfCart = cartList.length > 0
      if (lengthOfCart) {
        resultCost = totalCostList.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
        )
        console.log(resultCost)
      }
      const removeAllItem = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-item"
                  onClick={removeAllItem}
                  data-testid="remove"
                >
                  Remove All
                </button>
                <CartListView />
                <div className="total-container">
                  <div>
                    <h1 className="order-total-head">
                      <span>Order Total:</span> Rs {resultCost}/-
                    </h1>
                    <p className="para-deatils">
                      {cartList.length} Items in cart
                    </p>
                    <button className="checkout-button" type="button">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
