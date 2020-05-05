import React,{useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import $ from 'jquery'

import'./style.css';

export default function Detail() {

const dispacth = useDispatch()

    const product = useSelector(state =>{
        return state.bag.detail
    })


    function addCart(product){
        dispacth({type:'ADD_PRODUCT',payload:product})
    }

    useEffect(()=>{
        $(window).scrollTop(0);
    },[]);

  return (
    <div className="detail_wrapper">
        <div className="detail_conatiner">
            {/* <div className="title_wrapper">
            <h1>Detalhes</h1>
            </div> */}

            <div className="product_detail_wrapper">
                {product.map((product,index)=>{
                    return(
                        <div className="det" key={index}>
                        <div  className="img_detail_wrapper">
                            {/* <div className="sidebar_images">

                                <div className="box_img_sidebar">
                                    <img src={product.photo} alt="product"/>
                                </div>
                                <div className="box_img_sidebar">
                                    <img src={product.photo} alt="product"/>
                                </div>
                                <div className="box_img_sidebar">
                                    <img src={product.photo} alt="product"/>
                                </div>
                            </div> */}
                        <div className="img_box">
                            <img src={product.photo} alt="product"/>
                        </div>
                    </div>
                    <div className="description_detail_wrapper">
                        <div className='name_product'>{product.nome}</div>
                        <div className="category">{product.modelo}</div>
                        <div className="price">R${product.preco} <span>R${product.preco_antigo}</span></div>
                        <div className="size">tamanho {product.tamanho}</div>
                        <button className="addBag" onClick={()=>addCart(product)}>add to bag</button>
                        <div className="description">{product.descricao}</div>
                        <div className="color"><span>cor: </span>{product.cor}</div>
                        <div className="cod"><span>cod: </span>{product.cod}</div>
                    </div>
                    </div>
                    )
                })}

            </div>
        
        </div>
        
    </div>
  );
}
