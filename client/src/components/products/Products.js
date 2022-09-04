
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Products.css';
const Products = ({ products }) => {
    // const history = useHistory();
    let navigate = useNavigate();
    const handleClick = id => {
        // history.push(`product/${id}`)
        // navigate("/home");
        navigate(`product/${id}`)
    };
    // function handleClick() {
    //     navigate("/home");
    //     // navigate(`${newRecord.id}`);
    // }

    return (
        <>
            {/* <div className="products-card">
            <div className="products-container">
                <img src={products.img} alt="image" />
                <h2>{products.name}</h2>
                <h4>$ {products.price}</h4> <button className="btn btn-primary" onClick={() => handleClick(products._id)}>Buy Now</button>
            </div>
        </div> */}

            <div className="col-md-4">
                <div className="card text-center product">
                    <img src={products.image} className="card-img-top" alt="image" />
                    <div className="card-body mb-3">
                        <h5 className="card-title">{products.name}</h5>
                        <p className="card-text">Reguler Price: {products.regular_price}</p>
                        <p className="card-title">Sale Price: {products.sale_price}</p>
                        <p className="card-title">Stock: {products.stock}</p>
                        <div className="add_minus_quantity">
                            <i className="fa-solid fa-minus"></i>
                            <input type="text" className="mx-3" />
                            <i className="fa-solid fa-plus"></i>
                            <i className="fa-solid fa-trash-alt ms-3"
                            //  onClick={() => removeItem(id)}
                            ></i>
                        </div>
                        <div className="add_to_cart_btn pt-4">
                            <a href="#" className="btn btn-sm btn-primary" onClick={() => handleClick(products._id)}>Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;

// import React, { useEffect, useState } from 'react';
// import Items from '../item/Items';
// const Products = () => {
//     return (
//         <div className="container pt-3">
//             <div className="row g-4">

//                     {
//                         item.length>0 && item.map((currentItm, id)=> {
//                             return (
//                                 <div className="col-md-4">
//                                     <Items key={currentItm.id} {...currentItm}/>
//                                 </div>
//                             )
//                         })
//                     }

//             </div>
//         </div>
//     );
// };

// export default Products;

{/* <div className="card text-center">
<img src={image} className="card-img-top" alt="image" />
<div className="card-body mb-3">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Reguler Price: {regular_price}</p>
    <p className="card-title">Sale Price: {sale_price}</p>
    <p className="card-title">Stock: {stock}</p>
    <div className="add_minus_quantity">
        <i className="fa-solid fa-minus"></i>
            <input type="text" className="mx-3"/>
        <i className="fa-solid fa-plus"></i>
        <i className="fa-solid fa-trash-alt ms-3" onClick={() => removeItem(id)}></i>
    </div>
    <div className="add_to_cart_btn pt-4">
        <a href="#" className="btn btn-sm btn-primary">Add to Cart</a>
    </div>
</div>
</div> */}

