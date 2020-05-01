import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import'./style.css';

export default function Cart() {

    const dispacth = useDispatch()

    function removeProduct(products){
        dispacth({type:'REMOVE_PRODUCT',payload:products})
    }
    const products = useSelector(state=>{
        return state.cart.products;
    });

  return (
    <div className="cart_wrapper" >

        <div className="cart_container">
            <div className="title_wrapper">
                <h1>SHOPPING BAG</h1>
            </div>

            <div className="bag_wrapper">
                <div className="bag_container">
                    {products.map((products,index)=>{
                        return(
                            <div key={products.id_produtos} className="product">

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
                            </div>
                        )

                    })}

                </div>
                <div className="payment_container"></div>

            </div>
        </div>
        
    </div>
  );
}
