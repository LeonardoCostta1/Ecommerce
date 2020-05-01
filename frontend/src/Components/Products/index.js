import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import './style.css';
import api from '../../Services/api'
export default function Products() {
    const [response,setResponse] = useState([]);
    const dispacth =  useDispatch();
    useEffect(()=>{
        api.get('/products').then((response)=>{
            setResponse(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    function addProduct(product){
        dispacth({type:"ADD_PRODUCT",payload:product})
    }
  return (
    <div className="products_wrapper">

        <div className="detail_stock_wrapper">
            <div className="filter_wrapper">
                <div>total: {response.length}</div>
                <div>tamanho</div>
                <div>cor</div>
                <div>preço</div>
            </div>
        </div>

        <div className="products_container">

            {response.map((item)=>{
                return(
                    <div key={item.id_produtos} className='product_box_item'onClick={()=>addProduct(item)}>
                    <i className="far fa-heart"></i>
                    {/* <div className="new_type">novo</div> */}
                    <div className="img">
                    <img src={item.photo} alt="product"/>
                    </div>
                    <div className="description_product">
                        <div className="category">{item.modelo}</div>
                        <div className="name_product">{item.nome}</div>
                        <div className="price">R${item.preco}<span>R${item.preco_antigo}</span></div>
                    </div>
                </div>
                )
            })}


        </div>
    </div>
  );
}
