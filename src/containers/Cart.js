import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCheckout } from "../actions/auth";
import { editItems } from "../actions/cart";
import { selectToken,selectCart,selectCartItems } from "../reducers";
import CartItem from "../components/Cart/items";
import CartCheckout from "../components/Cart/checkout";
import { QTY } from "../constants"
import ReactGA from 'react-ga';

const checkToken = (props) => {
  if(!props.token) props.setCheckout()
  return true
}
const Cart = (props) => {
  process.env.NODE_ENV === 'production' && ReactGA.pageview(window.location.pathname + window.location.search);


  const handleFilterChange = (e,filterType,_id,id) => {
    switch(filterType){
      case QTY:
          props.editItems(id,QTY,e.target.value)
          break;
      default: break
    }
  }

  return (
    <div className="py-4 px-2 bg-pink-50 dark:bg-white flex flex-wrap flex-shrink justify-between">
    <aside className="w-full xl:w-9/12 p-4">
    <CartItem items={props.cartItems && props.cartItems} change={handleFilterChange} />

    </aside>
    <section className="w-full xl:w-3/12 my-8 xl:my-4">
     <CartCheckout header={'Subtotal'} qty={props.cartItems && props.cartItems.length} total={props.cart && props.cart.totalPrice} items={props.cart && props.cart.totalPrice} shipping={0} tax={0}>
     {props.cartItems && props.cartItems.length !== 0 &&

       <NavLink to="/checkout/shipping" onClick={()=> checkToken(props)}>
            <button className="w-full mt-4 bg-red-700 dark:bg-gray-900 border border-gray-200 text-white rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:text-black focus:border-gray-500 hover:bg-white hover:text-black hover:border-gray-500">
            Proceed to checkout
            </button>
        </NavLink>
     }
    </CartCheckout>
    </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: selectToken(state),
  cartItems: selectCartItems(state),
  cart: selectCart(state),
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setCheckout,editItems }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
