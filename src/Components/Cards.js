import React from 'react'

export default function Cards({item, func}) {
  return (
    <>
    
    <div className="col">
        <div className="card">
            <img src={item.image} className="card-img-top" style={{width: "100%",height: "20vw", objectFit: "cover"}} alt="..."></img>
            <div className="card-body">
                <h5 class="card-title">{item.title}</h5>
                <h5 className="card-title"><strong>{item.name}</strong></h5>
                <p className="card-text">Price : ${item.price}</p>
                <button className="btn btn-primary" onClick={()=>{func(item)}}>Add to Cart</button>
            </div>
        </div>  
    </div>


    
    </>
    // <div>
    //     {item.id} - {item.name} - {item.price} -   <br/><br/>   
    // </div>
  )
}
