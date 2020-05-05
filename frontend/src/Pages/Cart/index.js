import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import arrow from '../../Assets/img/left.svg'
import visa from '../../Assets/img/visa.svg'
import {Link} from 'react-router-dom'
import'./style.css';
import $ from 'jquery'

export default function Cart() {

    const dispacth = useDispatch()

    function removeProduct(products){
        dispacth({type:'REMOVE_PRODUCT',payload:products})
    }
    const products = useSelector(state=>{
        return state.bag.products;
    });


    const cart = products.filter((a,b,c)=>{
        return c.indexOf(a) === b
    });


    const sum = cart.reduce((total, valor) => total + valor.preco, 0).toFixed(2)

    useEffect(()=>{
        $(window).scrollTop(0);
  
    },[products])

  return (
    <div className="cart_wrapper" >

        <div className="cart_container">
            <div className="title_wrapper">
                <h1>SHOPPING BAG</h1>
            </div>

            <div className="bag_wrapper">
                <div className="bag_container">
                    {cart.map((products,index)=>{
                        return(
                            <div key={index} className="product">

                                <div className="img">
                                    <img src={products.photo} alt="product"/>
                                </div>
                                <div className="title">{products.nome}</div>

                                    <div className="cont_wrapper">
                                        <button>-</button>
                                         <div className="qtd" type="text">{products.quantidade}</div>
                                        <button>+</button>
                                    </div>
                               
                                <button onClick={()=>removeProduct(products.id_produtos)}>
                                    remover item
                                </button>
                                <div className="codProduto"><span>cod: </span> {products.cod}</div>
                                <div className="priceProduto"><span>R$</span> {products.preco}</div>
                            </div>
                        )

                    })}

                    <div className='subtotal_wrapper'>
                        <div className="back_home"><Link to='/'><img src={arrow} alt="arrow"/> continue shopping</Link></div>
                        <div className="back_home">subtotal : <span> R$ {sum}</span></div>
                    </div>

                </div>
                <div className="payment_container">
                    <div className="title">Card Details</div>

                    <div className="card_wrapper">
                        <div className="card">
                            <div className="flag"><img src={visa}alt="card flag" /></div>
                            <div className="number">**** **** **** ****</div>
                            <div className="name">
                                <div>leonardo c santos</div>
                                <div>21/07</div>
                                </div>
                        </div>
                        
                    </div>

                    <form className="form_payment">
                        <input type="text" placeholder="card name"></input>
                        <input type="text" placeholder="**** **** **** ****"></input>
                        <div className="date_wrapper">
                        <input type="text" placeholder="card name"></input>
                        <input type="text" placeholder="card name"></input>
                        <input type="text" placeholder="card name"></input>
                        </div>

                        <button>Checkout</button>

                    </form>

                </div>

            </div>
        </div>
        
    </div>
  );
}
