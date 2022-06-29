import React, { useState } from 'react'
import Cards from './Cards'
import data from './data.json'
export default function Main() {

    const [cart, setCart] = useState([])
    const [string, setString] = useState("")
    const [filtered, setFiltered] = useState(data)
    
    let addtoCart = (id) =>{
        setCart(old=>[...old, id])       
    }
    var amount = totalAmount(cart);

    function totalAmount(arr){
        const initial = 0;
        const total = arr.reduce(
            (item, number) => item + number.price,
            initial
          );
        return total;
    }

    function removefromCart(id){
        let flag = window.confirm("Are you sure?")
        if(flag){const newTodos = cart.filter((_, index) => index !== id);
        setCart(newTodos);}
    }

    function findCategory(e){
        if(e==='Select'){
            setFiltered(data)
        }else{
            let cart1 = data.filter(value => {
                return value.category === e
            })
            setFiltered(cart1)
        }
    }
    
  return (
    <>
    
    <div className="container mt-4">
        <span style={{marginRight:"10px"}}>Search Item</span><input
        type="text"
        value={string}
        onInput={(e) => setString(e.target.value)}
      />
      <select onChange={(e)=> findCategory(e.target.value)} style={{marginLeft: "10px"}}>
            <option value="Select">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewelery</option>
            
    </select>

    
        <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Cart <i className="bi bi-cart-check-fill"></i> {cart.length !== 0? `(${cart.length})` : ""}
        </button>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">My Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {cart.map((item,index)=>{
                            return <div key ={index}><li style={{listStyle: "none"}}>
                                {index+1}. {item.title} - ${item.price}
                                <span style={{float: "right"}}><button className="btn btn-sm btn-danger" onClick={()=>{removefromCart(index)}}><i className="bi bi-trash3"></i></button></span></li><br/></div>
                        })}
                        <br/>
                        <strong>Total Amount : ${amount}</strong>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='container mx-auto pt-5'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {filtered.filter((value) =>{
                if (string === ""){return value}
                else if(value.title.toLowerCase().startsWith(string.toLowerCase())){
                    return value}
            }).map((item)=>{
            return <Cards item={item} key={item.id} func = {addtoCart}/>
        })}
        </div>
    </div>
    </>
  )
}
