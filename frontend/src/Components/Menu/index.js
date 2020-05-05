import React,{useEffect} from 'react';
import logo from '../../Assets/img/freezy.svg'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import'./style.css';
// import close from '../../Assets/img/signs.svg'

export default function Menu() {

  const dispatch = useDispatch()
  const response = useSelector(state=>{
    return state.bag
  });

  useEffect(()=>{

    $(document).ready(function($){
      $(window).scroll(function() {    
       if ($(window).scrollTop() >= 20) {
         $('.menu_wrapper').addClass('back');
       }else{
           $('.menu_wrapper').removeClass('back');
       }
   });

 });

},[])


const cart = response.products.filter((a,b,c)=>{
  return c.indexOf(a) === b
});



function openCart(){
  const open = {open:true}
  dispatch({type:'OPEN',payload:open})
}

// function removeProduct(product){
//   dispatch({type:"REMOVE_PRODUCT",payload:product})
// }

  return (
    <div className="menu_wrapper">

      <div className="menu_container">
      <div className="logo_wrapper">
        <Link to="/">
            <img src={logo} alt="Freezy"/>
            </Link>
        </div>
        <div className="nav_wrapper"></div>
        <div className="cart_icons_wrapper">
        <Link to="/cart">
          <>
          <div className="shop" onClick={openCart}>shopping cart</div>
          <i className="fas fa-shopping-cart"></i>
          {cart.length}
          </>
        </Link>

          {/* <div className="cart_modal">
            <div className="title_wrapper_modal">
            ITEMS IN YOUR SHOPPING BAG
            </div>
            <div className="content_products">
              {cart.map((product,index)=>{
                return(
                  <div key={index} className="product">
                    <div className="img">
                    <img src={product.photo} alt="product"></img>
                    </div>
                    <div className="name">{product.nome}<br/>{product.modelo}</div>
                    <div className="preco">R${product.preco}</div>
                    <div className="qtd" onClick={()=>removeProduct(product.id_produtos)}>
                      <img src={close} alt="close"></img>
                    </div>
                </div>
                )
              })}
            </div>

            <div className="price_total">
              <div className="total">total</div> 
              <div className="sumprice">R$ 50.00</div> 

            </div>
            <div className="buttom_wrapper">
            <Link to="/cart">
              <button>checkout</button>
              </Link>
            </div>
          </div> */}

        </div>
      </div>

    </div>
  );
}
